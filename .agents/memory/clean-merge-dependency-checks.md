---
name: Clean merge dependency checks
description: Why post-merge clean dependency installation matters in this project
---

Run the configured post-merge setup to verify dependency restoration from the lockfile, not just a build using existing dependencies.

**Why:** A clean installation after a task merge encountered a security-policy block on a transitive package even though the app previously built successfully with its warm dependency directory. Updating the direct parent to a safe release resolved it; skipping the installation would have left future merges vulnerable to the same failure.

**How to apply:** When dependency versions change or merge setup fails, test a clean post-merge run and resolve blocked transitive packages through their direct dependencies rather than bypassing package policy.