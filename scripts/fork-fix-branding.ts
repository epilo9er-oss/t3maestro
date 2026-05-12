#!/usr/bin/env bun

/**
 * Fork branding fix detector.
 *
 * This script scans the codebase for hardcoded upstream branding strings
 * that should use the fork branding system instead. Run this after merging
 * from upstream to identify new code that needs to be updated.
 *
 * Usage:
 *   bun run fork:fix-branding          # Scan and report
 *   bun run fork:fix-branding --fix    # Attempt automatic fixes
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

// Patterns that indicate upstream branding is hardcoded
const PATTERNS = [
  // Direct string literals (case-sensitive to avoid false positives)
  { pattern: /"T3 Code"/g, description: 'Hardcoded "T3 Code" string' },
  { pattern: /'T3 Code'/g, description: "Hardcoded 'T3 Code' string" },
  { pattern: /`T3 Code`/g, description: "Hardcoded `T3 Code` string" },
  // Bundle IDs and slugs
  { pattern: /com\.t3tools\.t3code/g, description: "Hardcoded bundle ID" },
  { pattern: /pingdotgg\/t3code/g, description: "Hardcoded GitHub repo" },
  { pattern: /\bt3code\b/g, description: "Hardcoded 't3code' slug" },
  // Common file paths
  { pattern: /T3-Code-/g, description: "Hardcoded artifact prefix" },
];

// Directories to scan
const SCAN_DIRS = ["apps", "packages", "scripts"];

// File extensions to scan
const SCAN_EXTENSIONS = [".ts", ".tsx", ".js", ".mjs", ".cjs", ".json", ".md"];

// Files to ignore
const IGNORE_PATHS = [
  "node_modules",
  "dist",
  "dist-electron",
  ".turbo",
  "build",
  "release",
  ".git",
  "coverage",
  "docs/fork-branding.md", // This file mentions upstream defaults
  ".env.fork.example", // This file intentionally uses defaults
  "packages/shared/src/branding.ts", // Our branding module (uses defaults intentionally)
  "scripts/fork-fix-branding.ts", // This script
  "scripts/verify-fork-branding.ts", // Verification script
  "scripts/electron-launcher.mjs", // Uses env vars with defaults
  "apps/desktop/src/app/DesktopEnvironment.ts", // Uses config with fallbacks
  "apps/web/src/branding.ts", // Uses import.meta.env with fallback
  "README.md", // May mention upstream
  "CHANGELOG.md",
  "CLAUDE.md",
];

interface Issue {
  file: string;
  line: number;
  pattern: string;
  match: string;
  description: string;
}

interface FileIssues {
  file: string;
  issues: Issue[];
}

function shouldIgnorePath(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, "/");
  return IGNORE_PATHS.some((ignore) => normalized.includes(ignore));
}

function scanFile(filePath: string): Issue[] {
  const issues: Issue[] = [];

  try {
    const content = readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
      const line = lines[lineNum];

      for (const { pattern, description } of PATTERNS) {
        const matches = line.matchAll(pattern);
        for (const match of matches) {
          // Skip if it's in a comment about defaults or upstream
          const trimmedLine = line.trim();
          if (
            trimmedLine.startsWith("//") ||
            trimmedLine.startsWith("#") ||
            trimmedLine.startsWith("*") ||
            trimmedLine.includes("upstream") ||
            trimmedLine.includes("default") ||
            trimmedLine.includes("fallback") ||
            trimmedLine.includes("github.com/pingdotgg/t3code/issues") ||
            trimmedLine.includes("pingdotgg/t3code/issues")
          ) {
            continue;
          }

          issues.push({
            file: filePath,
            line: lineNum + 1,
            pattern: pattern.source,
            match: match[0],
            description,
          });
        }
      }
    }
  } catch {
    // Ignore read errors
  }

  return issues;
}

function isTestFile(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, "/");
  return (
    normalized.includes(".test.") ||
    normalized.includes(".spec.") ||
    normalized.includes("/__tests__/") ||
    normalized.includes("/test/") ||
    normalized.includes("/tests/")
  );
}

function scanDirectory(dir: string, baseDir: string, includeTests: boolean): FileIssues[] {
  const allIssues: FileIssues[] = [];

  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      const relativePath = relative(baseDir, fullPath);

      if (shouldIgnorePath(relativePath)) {
        continue;
      }

      // Skip test files unless explicitly included
      if (!includeTests && isTestFile(relativePath)) {
        continue;
      }

      if (entry.isDirectory()) {
        allIssues.push(...scanDirectory(fullPath, baseDir, includeTests));
      } else if (entry.isFile()) {
        const ext = entry.name.includes(".") ? `.${entry.name.split(".").pop()}` : "";
        if (SCAN_EXTENSIONS.includes(ext)) {
          const issues = scanFile(fullPath);
          if (issues.length > 0) {
            allIssues.push({ file: relativePath, issues });
          }
        }
      }
    }
  } catch {
    // Ignore directory access errors
  }

  return allIssues;
}

function printReport(issuesByFile: FileIssues[]): void {
  const totalIssues = issuesByFile.reduce((sum, f) => sum + f.issues.length, 0);

  if (totalIssues === 0) {
    console.log("\n✅ No hardcoded upstream branding found!");
    console.log("   Your fork branding is properly configured.");
    return;
  }

  console.log(`\n⚠️  Found ${totalIssues} potential branding issue(s):\n`);

  for (const { file, issues } of issuesByFile) {
    console.log(`📄 ${file}`);
    for (const issue of issues) {
      console.log(`   Line ${issue.line}: ${issue.description}`);
      console.log(`   └─ Match: "${issue.match}"`);
    }
    console.log();
  }

  console.log("💡 Suggestions:");
  console.log("   1. Review the files above and replace hardcoded values with:");
  console.log("      - For branding values: Use functions from packages/shared/src/branding.ts");
  console.log("      - For config: Add T3_FORK_* env var reads with fallbacks");
  console.log("   2. See docs/fork-branding.md for the fork branding pattern");
  console.log("   3. After fixing, run this script again to verify\n");
}

function main() {
  const repoRoot = process.cwd();
  const args = process.argv.slice(2);
  const includeTests = args.includes("--include-tests");

  console.log("🔍 Scanning for hardcoded upstream branding...\n");
  if (!includeTests) {
    console.log("ℹ️  Skipping test files (use --include-tests to include them)\n");
  }

  const allIssues: FileIssues[] = [];

  for (const dir of SCAN_DIRS) {
    const fullPath = resolve(repoRoot, dir);
    try {
      if (statSync(fullPath).isDirectory()) {
        allIssues.push(...scanDirectory(fullPath, repoRoot, includeTests));
      }
    } catch {
      // Directory doesn't exist, skip
    }
  }

  // Sort files for consistent output
  allIssues.sort((a, b) => a.file.localeCompare(b.file));

  printReport(allIssues);

  if (allIssues.length > 0) {
    process.exit(1);
  }
}

main();
