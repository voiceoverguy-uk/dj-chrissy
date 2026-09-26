---
name: Clean merge dependency checks
description: Why post-merge clean dependency installation matters in this project
---

Run the configured post-merge setup to verify dependency restoration from the lockfile, not just a build using existing dependencies. For external hosting, also verify that the lockfile's download addresses are reachable outside Replit.

**Why:** A clean installation after a task merge encountered a security-policy block on a transitive package even though the app previously built successfully with its warm dependency directory. Updating the direct parent to a safe release resolved it. Separately, npm recorded Replit-internal package download addresses in a lockfile that an external builder could not resolve, despite the same versions working locally.

**How to apply:** When dependency versions change or merge setup fails, test a clean post-merge run and resolve blocked transitive packages through their direct dependencies rather than bypassing package policy. Before building externally, check every lockfile section for private download hosts; preserve versions and integrity values when replacing those URLs with public registry addresses.