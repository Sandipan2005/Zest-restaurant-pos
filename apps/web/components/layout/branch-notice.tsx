"use client";

import { QueryError } from "@/components/ui/query-error";
import { useBranch } from "@/hooks/use-branch";

// Shown only when there is no usable branch: a failed request offers a retry,
// and a loaded-but-empty list says the account has no branch. Nothing while
// the list is still loading.
export function BranchNotice() {
  const { state, error, retry, retrying } = useBranch();
  if (state === "error") {
    return <QueryError error={error} what="your branches" onRetry={retry} retrying={retrying} />;
  }
  if (state === "empty") {
    return (
      <p role="alert" className="flex items-center gap-2 rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-warning">
        <span className="size-2 shrink-0 rounded-full bg-warning" />
        No branch is assigned to your account. Ask an administrator to assign you to one.
      </p>
    );
  }
  return null;
}
