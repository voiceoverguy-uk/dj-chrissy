import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('lockfile does not point to Replit-only package downloads', async () => {
  const lockfile = JSON.parse(await readFile(new URL('../package-lock.json', import.meta.url), 'utf8'))

  for (const section of ['packages', 'dependencies']) {
    for (const [name, dependency] of Object.entries(lockfile[section] ?? {})) {
      if (!dependency.resolved) continue
      const hostname = new URL(dependency.resolved).hostname
      assert.ok(
        hostname !== 'replit.internal' && !hostname.endsWith('.replit.internal'),
        `${section}/${name} resolves to ${dependency.resolved}, which cannot be installed outside Replit. Replace the resolved URL with the public registry.npmjs.org tarball URL without changing the version or integrity checksum.`,
      )
    }
  }
})