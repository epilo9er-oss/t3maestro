/**
 * Fork-friendly branding resolver module.
 *
 * This module provides environment-based branding overlay functionality
 * that allows forks to customize branding without modifying upstream code,
 * ensuring clean merges from upstream.
 *
 * Environment Variables:
 * - T3_FORK_APP_NAME: Display name for the fork (e.g., "T3 Maestro")
 * - T3_FORK_DOMAIN: Organization domain (e.g., "com.t3tools")
 * - T3_FORK_SLUG: URL/file safe identifier (e.g., "t3maestro")
 * - T3_FORK_REPO: GitHub repo (e.g., "pingdotgg/t3maestro")
 */

import type { DesktopAppBranding, DesktopAppStageLabel } from "@t3tools/contracts";

const UPSTREAM_DEFAULTS = {
  appName: "T3 Code",
  domain: "com.t3tools",
  slug: "t3code",
  repo: "pingdotgg/t3code",
} as const;

/**
 * Read a fork branding environment variable with fallback to upstream default.
 */
function readForkEnv(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

/**
 * Get the fork app name from environment or upstream default.
 */
export function getForkAppName(): string {
  return readForkEnv(process.env.T3_FORK_APP_NAME, UPSTREAM_DEFAULTS.appName);
}

/**
 * Get the fork domain from environment or upstream default.
 */
export function getForkDomain(): string {
  return readForkEnv(process.env.T3_FORK_DOMAIN, UPSTREAM_DEFAULTS.domain);
}

/**
 * Get the fork slug from environment or upstream default.
 */
export function getForkSlug(): string {
  return readForkEnv(process.env.T3_FORK_SLUG, UPSTREAM_DEFAULTS.slug);
}

/**
 * Get the fork repo from environment or upstream default.
 */
export function getForkRepo(): string {
  return readForkEnv(process.env.T3_FORK_REPO, UPSTREAM_DEFAULTS.repo);
}

/**
 * Check if fork branding is active (any T3_FORK_* var is set).
 */
export function isForkBrandingActive(): boolean {
  const check = (value: string | undefined) => {
    const trimmed = value?.trim();
    return trimmed !== undefined && trimmed.length > 0;
  };
  return (
    check(process.env.T3_FORK_APP_NAME) ||
    check(process.env.T3_FORK_DOMAIN) ||
    check(process.env.T3_FORK_SLUG) ||
    check(process.env.T3_FORK_REPO)
  );
}

/**
 * Resolve app base name for desktop app.
 * Uses fork app name if available, otherwise upstream default.
 */
export function resolveAppBaseName(stageLabel: DesktopAppStageLabel): string {
  const appName = getForkAppName();
  return `${appName} (${stageLabel})`;
}

/**
 * Resolve app bundle ID for macOS.
 * Format: {domain}.{slug}[.{stage}]
 */
export function resolveAppBundleId(isDevelopment: boolean): string {
  const domain = getForkDomain();
  const slug = getForkSlug();
  return isDevelopment ? `${domain}.${slug}.dev` : `${domain}.${slug}`;
}

/**
 * Resolve Linux desktop entry name.
 * Format: {slug}[-{stage}].desktop
 */
export function resolveLinuxDesktopEntryName(isDevelopment: boolean): string {
  const slug = getForkSlug();
  return isDevelopment ? `${slug}-dev.desktop` : `${slug}.desktop`;
}

/**
 * Resolve Linux WM class.
 * Format: {slug}[-{stage}]
 */
export function resolveLinuxWmClass(isDevelopment: boolean): string {
  const slug = getForkSlug();
  return isDevelopment ? `${slug}-dev` : slug;
}

/**
 * Resolve user data directory name.
 * Format: {slug}[-{stage}]
 */
export function resolveUserDataDirName(isDevelopment: boolean): string {
  const slug = getForkSlug();
  return isDevelopment ? `${slug}-dev` : slug;
}

/**
 * Resolve legacy user data directory name.
 * This preserves compatibility with older T3 Maestro installs.
 */
export function resolveLegacyUserDataDirName(isDevelopment: boolean): string {
  const appName = getForkAppName();
  return isDevelopment ? `${appName} (Dev)` : `${appName} (Alpha)`;
}

/**
 * Build desktop app branding object.
 */
export function buildDesktopAppBranding(stageLabel: DesktopAppStageLabel): DesktopAppBranding {
  const appName = getForkAppName();
  return {
    baseName: appName,
    stageLabel,
    displayName: resolveAppBaseName(stageLabel),
  };
}

/**
 * Get all fork branding configuration as an object.
 */
export function getForkBrandingConfig() {
  return {
    appName: getForkAppName(),
    domain: getForkDomain(),
    slug: getForkSlug(),
    repo: getForkRepo(),
    isActive: isForkBrandingActive(),
  };
}
