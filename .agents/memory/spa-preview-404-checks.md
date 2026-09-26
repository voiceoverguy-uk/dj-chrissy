---
name: SPA preview 404 checks
description: HTTP-request differences when verifying missing paths in Vite previews
---

Check missing URLs with an ordinary HTTP client as well as a browser-style request when verifying SPA routing. A preview that seems to return 404 in the browser may still return the homepage with 200 for other requests.

**Why:** The Vite development fallback responded differently depending on the request's Accept header. An initial preview-only fix caught browser requests but missed plain curl requests; a second check exposed the discrepancy.

**How to apply:** Test representative valid and unknown paths without special headers, then check browser rendering. Verify production routing separately because the preview middleware and published host have different fallback behavior.