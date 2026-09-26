import { readFile, writeFile } from 'node:fs/promises'
import { pageSeo } from '../src/seo/pages.js'
import { renderPageHtml } from '../src/seo/html.js'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

for (const path of Object.keys(pageSeo)) {
  const html = renderPageHtml(template, path)
  if (path === '/') {
    await writeFile(new URL('../dist/index.html', import.meta.url), html)
  } else {
    await writeFile(new URL(`../dist${path}.html`, import.meta.url), html)
  }
}