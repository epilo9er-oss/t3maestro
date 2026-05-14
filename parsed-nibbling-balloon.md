# Fix Effect Schema API Usage for defaultDiffScope

## Context

After adding `defaultDiffScope` to the settings, the dev server crashes with:
```
TypeError: members.map is not a function
    at Module.union (effect/dist/SchemaAST.js:1526:28)
```

## Root Cause

The issue is incorrect Effect Schema API usage. I used:
```tsx
Schema.Union(Schema.Literal("session"), Schema.Literal("git"))
```

But Effect Schema's `Schema.Union` expects either:
- A single schema argument
- Different API entirely for union types

The correct pattern for literal unions (used elsewhere in the file) is:
```tsx
Schema.Literals(["session", "git"])
```

## Fix

### File: `packages/contracts/src/settings.ts`

**Step 1**: Add DiffScope schema constant (after line 10, following the existing pattern):
```tsx
export const DiffScope = Schema.Literals(["session", "git"]);
export type DiffScope = typeof DiffScope.Type;
```

**Step 2**: Update ClientSettingsSchema (line 51-54):
```tsx
// Remove the incorrect Schema.Union usage
// Replace with:
defaultDiffScope: DiffScope.pipe(Schema.withDecodingDefault(Effect.succeed("git" as const))),
```

**Step 3**: Update ClientSettingsPatch (line 490-492):
```tsx
// Remove the incorrect Schema.Union usage
// Replace with:
defaultDiffScope: Schema.optionalKey(DiffScope),
```

## Verification

1. Run dev server: `node --watch src/bin.ts`
2. Verify no Schema errors
3. Check that settings UI renders correctly
