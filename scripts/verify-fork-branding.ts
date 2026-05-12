#!/usr/bin/env bun

/**
 * Fork branding verification script.
 *
 * Run this script to verify that fork branding is properly configured.
 * Displays current branding values and what they would resolve to.
 */

import {
  getForkAppName,
  getForkDomain,
  getForkSlug,
  getForkRepo,
  isForkBrandingActive,
  resolveAppBundleId,
  resolveAppBaseName,
  resolveLinuxDesktopEntryName,
  resolveLinuxWmClass,
  resolveUserDataDirName,
  resolveLegacyUserDataDirName,
  buildDesktopAppBranding,
} from "../packages/shared/src/branding.ts";

function printSection(title: string) {
  console.log(`\n${title}`);
  console.log("=".repeat(title.length));
}

function printRow(label: string, value: string) {
  console.log(`${label.padEnd(20)} ${value}`);
}

function printSeparator() {
  console.log("-".repeat(50));
}

// Get current branding configuration
const config = {
  appName: getForkAppName(),
  domain: getForkDomain(),
  slug: getForkSlug(),
  repo: getForkRepo(),
  isActive: isForkBrandingActive(),
};

// Print current configuration
printSection("Fork Branding Environment Variables");
printRow("T3_FORK_APP_NAME", config.appName);
printRow("T3_FORK_DOMAIN", config.domain);
printRow("T3_FORK_SLUG", config.slug);
printRow("T3_FORK_REPO", config.repo);
printRow("Active", config.isActive ? "Yes" : "No (using upstream defaults)");

// Print resolved values for different contexts
printSection("Resolved Branding Values");

// Desktop App - Production
const prodBranding = buildDesktopAppBranding("Alpha");
printRow("Display Name (Prod)", prodBranding.displayName);
printRow("App Bundle ID (Prod)", resolveAppBundleId(false));
printRow("Linux Entry (Prod)", resolveLinuxDesktopEntryName(false));
printRow("Linux WM Class", resolveLinuxWmClass(false));
printRow("User Data Dir", resolveUserDataDirName(false));
printRow("Legacy Data Dir", resolveLegacyUserDataDirName(false));

printSeparator();

// Desktop App - Development
const devBranding = buildDesktopAppBranding("Dev");
printRow("Display Name (Dev)", devBranding.displayName);
printRow("App Bundle ID (Dev)", resolveAppBundleId(true));
printRow("Linux Entry (Dev)", resolveLinuxDesktopEntryName(true));
printRow("Linux WM Class (Dev)", resolveLinuxWmClass(true));
printRow("User Data Dir (Dev)", resolveUserDataDirName(true));
printRow("Legacy Data Dir (Dev)", resolveLegacyUserDataDirName(true));

// File paths
printSection("File Paths");
const homeDir = process.env.HOME ?? "~";
printRow("Base Dir", `${homeDir}/.t3`);
printRow("State Dir (Prod)", `${homeDir}/.t3/userdata`);
printRow("State Dir (Dev)", `${homeDir}/.t3/dev`);
printRow("Settings Path", `${homeDir}/.t3/userdata/settings.json`);

// Notes
printSection("Notes");
if (config.isActive) {
  console.log("✓ Fork branding is active");
  console.log(`  The app will be branded as "${config.appName}"`);
} else {
  console.log("ℹ Fork branding is not active");
  console.log("  Set T3_FORK_* environment variables to customize branding");
  console.log('  Example: export T3_FORK_APP_NAME="My Custom IDE"');
}

console.log();
