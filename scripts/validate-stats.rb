# frozen_string_literal: true

require "yaml"

errors = []
paths = ARGV

if paths.empty?
  puts "No changed Workbench statistics to validate."
  exit
end

paths.grep(%r{\Astats/ai-agent/[^/]+\.yaml\z}).sort.each do |path|
  record = YAML.safe_load(File.read(path), permitted_classes: [Time], aliases: false)
  source = record.fetch("source_pr")
  summary = record.fetch("summary")
  inventory = record.fetch("test_inventory")
  local = record.fetch("local_executions")
  actions = record.fetch("github_actions_runs")
  retriggers = record.fetch("pr_retriggers")
  attempts = record.fetch("merge_attempts")
  expected_number = File.basename(path, ".yaml").to_i

  errors << "#{path}: filename/source PR mismatch" unless source.fetch("number") == expected_number
  errors << "#{path}: inventory head mismatch" unless inventory.fetch("head_sha") == source.fetch("head_sha")
  by_type = inventory.fetch("by_type")
  expected_total = %w[rust preflight web_unit e2e].sum { |key| by_type.fetch(key) }
  errors << "#{path}: inventory total mismatch" unless inventory.fetch("total") == expected_total
  errors << "#{path}: local execution count mismatch" unless summary.fetch("local_execution_count") == local.length
  errors << "#{path}: local execution seconds mismatch" unless summary.fetch("local_execution_seconds") == local.sum { |item| item.fetch("duration_seconds") }
  errors << "#{path}: Actions run count mismatch" unless summary.fetch("github_actions_run_count") == actions.length
  errors << "#{path}: Actions seconds mismatch" unless summary.fetch("github_actions_seconds") == actions.sum { |item| item.fetch("duration_seconds") }
  errors << "#{path}: retrigger count mismatch" unless summary.fetch("pr_retrigger_count") == retriggers.length
  errors << "#{path}: merge attempt count mismatch" unless summary.fetch("merge_attempt_count") == attempts.length
rescue KeyError, Psych::Exception, TypeError => e
  errors << "#{path}: #{e.message}"
end

paths.grep(%r{\Astats/main-build/[^/]+\.yaml\z}).sort.each do |path|
  record = YAML.safe_load(File.read(path), permitted_classes: [Time], aliases: false)
  run = record.fetch("source_run")
  match = /(\d+)-attempt-(\d+)\.yaml\z/.match(path)
  errors << "#{path}: invalid filename" unless match
  next unless match

  errors << "#{path}: filename/run id mismatch" unless run.fetch("run_id") == match[1].to_i
  errors << "#{path}: filename/run attempt mismatch" unless run.fetch("run_attempt") == match[2].to_i
rescue KeyError, Psych::Exception, TypeError => e
  errors << "#{path}: #{e.message}"
end

if errors.empty?
  puts "Workbench statistics are valid."
else
  warn errors.join("\n")
  exit 1
end
