# Fork Branding Customization

This document describes how to customize branding for your T3 Code fork without creating merge conflicts when pulling upstream changes.

## Overview

The fork branding system uses environment variables to override default branding values. This approach allows you to:

1. **Maintain clean merges** - No conflicts when upstream changes branding strings
2. **Customize independently** - Change branding without modifying core code
3. **Switch easily** - Disable fork branding by unsetting environment variables

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `T3_FORK_APP_NAME` | Display name for your fork | `T3 Code` |
| `T3_FORK_DOMAIN` | Organization domain for bundle IDs | `com.t3tools` |
| `T3_FORK_SLUG` | URL/file safe identifier | `t3code` |
| `T3_FORK_REPO` | GitHub repository (owner/repo) | `pingdotgg/t3code` |

## Quick Start

1. **Copy the example configuration:**

   ```bash
   cp .env.fork.example .env.fork
   ```

2. **Edit `.env.fork` with your branding:**

   ```bash
   T3_FORK_APP_NAME=T3 Maestro
   T3_FORK_DOMAIN=com.t3tools
   T3_FORK_SLUG=t3maestro
   T3_FORK_REPO=pingdotgg/t3maestro
   ```

3. **Source the environment when building:**

   ```bash
   # Load fork branding and build
   set -a && source .env.fork && set +a
   bun run build:desktop
   ```

   Or for development:

   ```bash
   # Load fork branding and run dev
   set -a && source .env.fork && set +a
   bun run dev
   ```

## What Gets Customized

### Desktop App

- **App bundle ID** (macOS): `com.t3tools.t3maestro` instead of `com.t3tools.t3code`
- **Executable name** (Linux): `t3maestro` instead of `t3code`
- **User data directory**: `~/.t3/t3maestro` instead of `~/.t3/t3code`
- **Display name**: "T3 Maestro (Alpha)" instead of "T3 Code (Alpha)"
- **Linux WM class**: `t3maestro` instead of `t3code`

### Web App

- **App display name**: "T3 Maestro" instead of "T3 Code"

### Build Artifacts

- **Package name**: `t3maestro` instead of `t3code`
- **Artifact filenames**: `t3maestro-{version}-{arch}.{ext}` instead of `t3-code-{version}-{arch}.{ext}`

## CI/CD Integration

For GitHub Actions or other CI systems:

```yaml
env:
  T3_FORK_APP_NAME: "T3 Maestro"
  T3_FORK_DOMAIN: "com.t3tools"
  T3_FORK_SLUG: "t3maestro"
  T3_FORK_REPO: "pingdotgg/t3maestro"
```

## Verification

Run the verification script to see current branding values:

```bash
bun run verify-fork-branding
```

Output example:

```
Fork Branding Configuration
============================
App Name:     T3 Maestro
Domain:       com.t3tools
Slug:         t3maestro
Repo:         pingdotgg/t3maestro

App Bundle ID: com.t3tools.t3maestro
Display Name:  T3 Maestro (Alpha)
Data Dir:      ~/.t3/t3maestro
```

## Upstream Merges

When merging from upstream `pingdotgg/t3code`:

1. **No conflicts expected** - The branding system uses additive changes only
2. **Verify env vars** - Ensure `.env.fork` values are still being read
3. **Scan for new hardcoded branding** - Run `bun run fork:fix-branding` to detect any newly added hardcoded upstream branding strings
4. **Rebuild** - Run `bun run build:desktop` with fork branding active

### Detecting New Hardcoded Branding

After an upstream merge, run the fix detector:

```bash
bun run fork:fix-branding
```

This script scans for:
- Hardcoded "T3 Code" strings
- Hardcoded bundle IDs (`com.t3tools.t3code`)
- Hardcoded slugs (`t3code`)
- Hardcoded repo references (`pingdotgg/t3code`)

If any issues are found, the script will:
1. List all files with hardcoded branding
2. Show the line numbers and matches
3. Provide suggestions for fixing

**Example output:**
```
⚠️  Found 3 potential branding issue(s):

📄 apps/desktop/src/new-feature.ts
   Line 42: Hardcoded "T3 Code" string
   └─ Match: "T3 Code"
```

**Fix pattern:** Replace hardcoded values with environment variable reads:
```typescript
// Before (conflict-prone):
const APP_NAME = "T3 Code";

// After (merge-friendly):
const APP_NAME = process.env.T3_FORK_APP_NAME || "T3 Code";
```

## Migration from Direct Modifications

If you previously modified branding directly in files:

1. **Create `.env.fork`** with your branding values
2. **Revert direct changes** to upstream defaults
3. **Rebuild** with environment variables active

The fork branding system provides the same results with better merge safety.
