---
name: Git workflow push rejection
description: Diagnosing push rejection when outgoing commits contain a GitHub Actions workflow
---

When the Git pane reports a generic push rejection, compare the local and remote branches before assuming the remote is ahead. An outgoing GitHub Actions workflow can be rejected because the connection lacks workflow permission; removing the file only from the working tree is insufficient if an outgoing commit still contains it.

**Why:** In this project, the remote was not ahead, but an unpushed workflow commit could not be pushed. Removing that workflow from the unpushed history while preserving other changes was followed by a successful Git pane push and a Ready external build. The workspace shell's HTTPS push authentication did not necessarily match the Git pane's authorization.

**How to apply:** Inspect the complete outgoing commit range and remote tip, preserve non-workflow changes during any explicitly authorized local history rewrite, verify no outgoing commit contains the workflow, and use the Git pane for the normal push if shell Git authentication is unavailable. Never force-push to work around this error.