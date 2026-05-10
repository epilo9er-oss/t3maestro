import type { VcsStatusRemoteResult, VcsStatusResult } from "@t3tools/contracts";
import { describe, expect, it } from "vitest";

import {
  applyGitStatusStreamEvent,
  buildTemporaryWorktreeBranchName,
  buildGeneratedWorktreeBranchName,
  isTemporaryWorktreeBranch,
  extractTokenFromBranch,
  normalizeGitRemoteUrl,
  parseGitHubRepositoryNameWithOwnerFromRemoteUrl,
  DEFAULT_WORKTREE_BRANCH_PREFIX,
} from "./git.ts";

describe("normalizeGitRemoteUrl", () => {
  it("canonicalizes equivalent GitHub remotes across protocol variants", () => {
    expect(normalizeGitRemoteUrl("git@github.com:T3Tools/T3Code.git")).toBe(
      "github.com/t3tools/t3code",
    );
    expect(normalizeGitRemoteUrl("https://github.com/T3Tools/T3Code.git")).toBe(
      "github.com/t3tools/t3code",
    );
    expect(normalizeGitRemoteUrl("ssh://git@github.com/T3Tools/T3Code")).toBe(
      "github.com/t3tools/t3code",
    );
  });

  it("preserves nested group paths for providers like GitLab", () => {
    expect(normalizeGitRemoteUrl("git@gitlab.com:T3Tools/platform/T3Code.git")).toBe(
      "gitlab.com/t3tools/platform/t3code",
    );
    expect(normalizeGitRemoteUrl("https://gitlab.com/T3Tools/platform/T3Code.git")).toBe(
      "gitlab.com/t3tools/platform/t3code",
    );
  });

  it("drops explicit ports from URL-shaped remotes", () => {
    expect(normalizeGitRemoteUrl("https://gitlab.company.com:8443/team/project.git")).toBe(
      "gitlab.company.com/team/project",
    );
    expect(normalizeGitRemoteUrl("ssh://git@gitlab.company.com:2222/team/project.git")).toBe(
      "gitlab.company.com/team/project",
    );
  });
});

describe("parseGitHubRepositoryNameWithOwnerFromRemoteUrl", () => {
  it("extracts the owner and repository from common GitHub remote shapes", () => {
    expect(
      parseGitHubRepositoryNameWithOwnerFromRemoteUrl("git@github.com:T3Tools/T3Code.git"),
    ).toBe("T3Tools/T3Code");
    expect(
      parseGitHubRepositoryNameWithOwnerFromRemoteUrl("https://github.com/T3Tools/T3Code.git"),
    ).toBe("T3Tools/T3Code");
  });
});

describe("isTemporaryWorktreeBranch", () => {
  it("matches the generated temporary worktree refName format", () => {
    expect(isTemporaryWorktreeBranch(buildTemporaryWorktreeBranchName())).toBe(true);
  });

  it("matches generated temporary worktree refs", () => {
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbeef`)).toBe(true);
    expect(isTemporaryWorktreeBranch(` ${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbeef `)).toBe(true);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/DEADBEEF`)).toBe(true);
  });

  it("matches temporary worktree refs with github nickname", () => {
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/githubuser/deadbeef`)).toBe(true);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/GitHubUser/deadbeef`)).toBe(true);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/user123/abc12345`)).toBe(true);
  });

  it("matches temporary worktree refs with generated name suffix", () => {
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbeef-fix-auth-bug`)).toBe(true);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/abc12345-update-readme`)).toBe(true);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/githubuser/deadbeef-add-feature`)).toBe(
      true,
    );
  });

  it("rejects non-temporary refName names", () => {
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/feature/demo`)).toBe(false);
    expect(isTemporaryWorktreeBranch("main")).toBe(false);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbee-extra`)).toBe(false);
    expect(isTemporaryWorktreeBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/toolongtoken123-extra`)).toBe(false);
  });
});

describe("applyGitStatusStreamEvent", () => {
  it("treats a remote-only update as a repository when local state is missing", () => {
    const remote: VcsStatusRemoteResult = {
      hasUpstream: true,
      aheadCount: 2,
      behindCount: 1,
      pr: null,
    };

    expect(applyGitStatusStreamEvent(null, { _tag: "remoteUpdated", remote })).toEqual({
      isRepo: true,
      hasPrimaryRemote: false,
      isDefaultRef: false,
      refName: null,
      hasWorkingTreeChanges: false,
      workingTree: { files: [], insertions: 0, deletions: 0 },
      hasUpstream: true,
      aheadCount: 2,
      behindCount: 1,
      pr: null,
    });
  });

  it("preserves local-only fields when applying a remote update", () => {
    const current: VcsStatusResult = {
      isRepo: true,
      sourceControlProvider: {
        kind: "github",
        name: "GitHub",
        baseUrl: "https://github.com",
      },
      hasPrimaryRemote: true,
      isDefaultRef: false,
      refName: "feature/demo",
      hasWorkingTreeChanges: true,
      workingTree: {
        files: [{ path: "src/demo.ts", insertions: 1, deletions: 0 }],
        insertions: 1,
        deletions: 0,
      },
      hasUpstream: false,
      aheadCount: 0,
      behindCount: 0,
      pr: null,
    };

    const remote: VcsStatusRemoteResult = {
      hasUpstream: true,
      aheadCount: 2,
      behindCount: 1,
      pr: null,
    };

    expect(applyGitStatusStreamEvent(current, { _tag: "remoteUpdated", remote })).toEqual({
      ...current,
      hasUpstream: true,
      aheadCount: 2,
      behindCount: 1,
      pr: null,
    });
  });
});

describe("extractTokenFromBranch", () => {
  it("extracts the 8-char hex token from temporary worktree branches", () => {
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbeef`)).toBe("deadbeef");
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/ABC12345`)).toBe("abc12345");
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/githubuser/deadbeef`)).toBe(
      "deadbeef",
    );
  });

  it("extracts the token from branches with generated name suffix", () => {
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbeef-fix-auth-bug`)).toBe(
      "deadbeef",
    );
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/abc12345-update-readme`)).toBe(
      "abc12345",
    );
    expect(
      extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/githubuser/deadbeef-add-feature`),
    ).toBe("deadbeef");
  });

  it("returns null for non-temporary worktree branches", () => {
    expect(extractTokenFromBranch("main")).toBe(null);
    expect(extractTokenFromBranch("feature/demo")).toBe(null);
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/feature/demo`)).toBe(null);
    expect(extractTokenFromBranch(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbee-extra`)).toBe(null);
  });
});

describe("buildGeneratedWorktreeBranchName", () => {
  it("builds a branch name with prefix and fragment", () => {
    expect(buildGeneratedWorktreeBranchName("fix-auth-bug")).toBe(
      `${DEFAULT_WORKTREE_BRANCH_PREFIX}/fix-auth-bug`,
    );
    expect(buildGeneratedWorktreeBranchName("update readme")).toBe(
      `${DEFAULT_WORKTREE_BRANCH_PREFIX}/update-readme`,
    );
  });

  it("preserves the provided prefix", () => {
    expect(buildGeneratedWorktreeBranchName("fix-auth-bug", "custom/prefix")).toBe(
      "custom/prefix/fix-auth-bug",
    );
    expect(buildGeneratedWorktreeBranchName("update-readme", "t3maestro/username")).toBe(
      "t3maestro/username/update-readme",
    );
  });

  it("includes the token when provided", () => {
    expect(buildGeneratedWorktreeBranchName("fix-auth-bug", undefined, "deadbeef")).toBe(
      `${DEFAULT_WORKTREE_BRANCH_PREFIX}/deadbeef-fix-auth-bug`,
    );
    expect(buildGeneratedWorktreeBranchName("update-readme", "t3maestro/username", "abc12345")).toBe(
      "t3maestro/username/abc12345-update-readme",
    );
  });

  it("sanitizes the branch fragment", () => {
    expect(buildGeneratedWorktreeBranchName("Fix: Auth bug!")).toBe(
      `${DEFAULT_WORKTREE_BRANCH_PREFIX}/fix-auth-bug`,
    );
    expect(buildGeneratedWorktreeBranchName("add 'feature' (demo)")).toBe(
      `${DEFAULT_WORKTREE_BRANCH_PREFIX}/add-feature-demo`,
    );
  });

  it("uses 'update' as fallback for empty fragments", () => {
    expect(buildGeneratedWorktreeBranchName("")).toBe(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/update`);
    expect(buildGeneratedWorktreeBranchName("   ")).toBe(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/update`);
    expect(buildGeneratedWorktreeBranchName("!!!")).toBe(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/update`);
  });

  it("limits the fragment to 64 characters", () => {
    const longFragment = "a".repeat(100);
    const result = buildGeneratedWorktreeBranchName(longFragment);
    expect(result).toBe(`${DEFAULT_WORKTREE_BRANCH_PREFIX}/${"a".repeat(64)}`);
  });
});
