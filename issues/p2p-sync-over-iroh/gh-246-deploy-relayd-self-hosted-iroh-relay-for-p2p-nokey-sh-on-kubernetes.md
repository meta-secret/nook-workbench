---
title: "Deploy `relayd`: self-hosted Iroh relay for `p2p.nokey.sh` on Kubernetes"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T05:55:54Z
updated_at: 2026-07-21T04:19:10Z
source_issues: ["https://github.com/meta-secret/nook/issues/246"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: ""
---

# Deploy `relayd`: self-hosted Iroh relay for `p2p.nokey.sh` on Kubernetes

## Imported context

This record was imported from [Nook GitHub issue #246](https://github.com/meta-secret/nook/issues/246)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

# Deploy `relayd`: self-hosted Iroh relay for `p2p.nokey.sh` on Kubernetes

## Summary

Set up `p2p.nokey.sh` as a self-hosted Iroh relay.

We probably do **not** need to implement a new relay server. Iroh already provides `iroh-relay`.

For this issue, `relayd` means:

```text
Nokey-owned deployment package for upstream iroh-relay
```

not a from-scratch relay implementation.

## Goal

Create Kubernetes deployment manifests or a Helm chart that runs an upstream Iroh relay for:

```text
https://p2p.nokey.sh
```

The relay should help `nokeyd` instances connect through NAT and relay encrypted fallback traffic when direct P2P is not available.

## Important design note

The relay must not store Nook vault data.

```text
iroh-relay:
  - NAT traversal helper
  - encrypted fallback traffic forwarding
  - no Nook vault database
  - no Nook account namespace
  - no durable offline sync storage
```

`relayd` is connectivity infrastructure, not vault storage.

## Proposed repo location

```text
infra/
  relayd/
    README.md
    helm/
      Chart.yaml
      values.yaml
      templates/
        deployment.yaml
        service.yaml
        configmap.yaml
        pvc.yaml
        servicemonitor.yaml
        networkpolicy.yaml
```

Alternative simpler layout:

```text
deploy/
  k8s/
    relayd/
      configmap.yaml
      deployment.yaml
      service.yaml
      pvc.yaml
      README.md
```

## Phase 1 scope

Deploy one relay:

```text
p2p.nokey.sh
```

Phase 2 can add regional relays:

```text
p2p-us.nokey.sh
p2p-eu.nokey.sh
p2p-ap.nokey.sh
```

`nokeyd` should eventually support a relay list, not a single hardcoded relay.

## Kubernetes requirements

Expose at least:

```text
80/TCP    ACME / HTTP
443/TCP   HTTPS relay traffic
443/UDP   QUIC address discovery
9090/TCP  metrics, internal only
```

Use a Layer 4 `LoadBalancer`, not a normal HTTP ingress, because the relay needs TCP and UDP.

Some Kubernetes/cloud providers may require separate Services for TCP and UDP on the same external IP/hostname.

## ConfigMap: `iroh-relay` config

Example `config.toml`:

```toml
enable_relay = true
enable_quic_addr_discovery = true

http_bind_addr = "[::]:80"
enable_metrics = true
metrics_bind_addr = "0.0.0.0:9090"

[tls]
cert_mode = "LetsEncrypt"
hostname = "p2p.nokey.sh"
contact = "ops@nokey.sh"
cert_dir = "/var/lib/iroh-relay/certs"
https_bind_addr = "[::]:443"
quic_bind_addr = "[::]:443"

[limits]
accept_conn_limit = 1000
accept_conn_burst = 2000

[limits.client.rx]
bytes_per_second = 1048576
max_burst_bytes = 4194304
```

Access control for alpha can start open:

```toml
access = "everyone"
```

For private beta, switch to shared-token auth:

```toml
access.shared_token = ["REPLACE_WITH_SECRET"]
```

The shared token should be stored as a Kubernetes Secret, not hardcoded in a ConfigMap.

## Deployment sketch

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: relayd
  labels:
    app: relayd
spec:
  replicas: 1
  selector:
    matchLabels:
      app: relayd
  template:
    metadata:
      labels:
        app: relayd
    spec:
      containers:
        - name: iroh-relay
          image: n0computer/iroh-relay:<pin-version>
          imagePullPolicy: IfNotPresent
          args:
            - "--config-path=/etc/iroh-relay/config.toml"
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
            - name: https-tcp
              containerPort: 443
              protocol: TCP
            - name: quic-udp
              containerPort: 443
              protocol: UDP
            - name: metrics
              containerPort: 9090
              protocol: TCP
          volumeMounts:
            - name: config
              mountPath: /etc/iroh-relay
              readOnly: true
            - name: cert-cache
              mountPath: /var/lib/iroh-relay
          readinessProbe:
            tcpSocket:
              port: 443
            initialDelaySeconds: 5
            periodSeconds: 10
          livenessProbe:
            tcpSocket:
              port: 443
            initialDelaySeconds: 15
            periodSeconds: 20
      volumes:
        - name: config
          configMap:
            name: relayd-config
        - name: cert-cache
          persistentVolumeClaim:
            claimName: relayd-cert-cache
```

## Service sketch

```yaml
apiVersion: v1
kind: Service
metadata:
  name: relayd
  labels:
    app: relayd
spec:
  type: LoadBalancer
  externalTrafficPolicy: Local
  selector:
    app: relayd
  ports:
    - name: http
      port: 80
      targetPort: http
      protocol: TCP
    - name: https-tcp
      port: 443
      targetPort: https-tcp
      protocol: TCP
    - name: quic-udp
      port: 443
      targetPort: quic-udp
      protocol: UDP
```

If the cloud provider cannot expose TCP and UDP on the same LoadBalancer, split the Service into:

```text
relayd-tcp
relayd-udp
```

and document provider-specific annotations.

## PVC sketch

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: relayd-cert-cache
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

The PVC is for Let’s Encrypt certificate cache, not for application data.

## DNS

Create DNS:

```text
p2p.nokey.sh -> relay LoadBalancer IP / hostname
```

For multi-region later:

```text
p2p-us.nokey.sh -> US relay LB
p2p-eu.nokey.sh -> EU relay LB
```

Avoid hiding the relay behind a standard HTTP ingress unless it supports the needed TCP/UDP passthrough behavior.

## Metrics

Metrics should be internal-only.

Add either:

```text
ServiceMonitor
```

or documentation for scraping:

```text
http://relayd.<namespace>.svc.cluster.local:9090/metrics
```

Do not expose `9090` publicly.

## Security

- [ ] Run as non-root if the image supports it; otherwise document why root is required for low ports.
- [ ] Keep metrics internal.
- [ ] Add NetworkPolicy allowing public ingress only to `80/TCP`, `443/TCP`, `443/UDP`.
- [ ] Add optional shared-token mode for beta/private deployments.
- [ ] Store relay token in Kubernetes Secret if token auth is enabled.
- [ ] Do not log tokens.
- [ ] Do not store Nook vault data on the relay.
- [ ] Document that the relay can still see metadata such as IPs, timing, and traffic volume.

## Acceptance criteria

- [ ] `infra/relayd` contains Kubernetes manifests or Helm chart.
- [ ] Deployment runs upstream `iroh-relay`.
- [ ] Relay serves `p2p.nokey.sh` with valid TLS.
- [ ] `80/TCP`, `443/TCP`, and `443/UDP` are reachable through the LoadBalancer.
- [ ] Metrics are available inside the cluster only.
- [ ] `nokeyd` can connect to `https://p2p.nokey.sh` as its custom relay.
- [ ] Two `nokeyd` clients behind NAT can establish an Iroh connection through the relay.
- [ ] README documents installation, DNS, ports, config, and troubleshooting.
- [ ] README explicitly states that `relayd` is not vault storage.
- [ ] README documents how to enable shared-token relay access.
- [ ] Image version is pinned instead of using `latest`.

## Non-goals

This issue should not implement:

- custom relay protocol;
- durable vault storage;
- Matrix/Nostr/GitHub sync;
- address lookup server;
- user accounts;
- vault/device namespace registry.

## Follow-up issues

- Add second relay in another region.
- Add `p2p-us.nokey.sh` and `p2p-eu.nokey.sh`.
- Add relay auth via HTTP callout.
- Add custom address lookup if needed.
- Add Terraform for DNS and cloud LoadBalancer.
- Add Grafana dashboard for relay metrics.
- Add synthetic connectivity checks using `nokeyd`.


## Historical comments

### cypherkitty — 2026-07-21T04:19:10Z

Assigned to milestone [Feature: P2P sync over Iroh](https://github.com/meta-secret/nook/milestone/13) together with #245 (`nokeyd`).
