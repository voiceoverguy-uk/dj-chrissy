import { readFile, writeFile } from 'node:fs/promises'
import { pageSeo, siteUrl } from '../src/seo/pages.js'

const escapeHtml = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Expected metadata tag not found: ${pattern}`)
  return html.replace(pattern, replacement)
}

for (const [path, { title, description }] of Object.entries(pageSeo)) {
  const canonical = siteUrl + (path === '/' ? '/' : path)
  let html = template
  html = replaceTag(html, /<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
  html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)

  if (path === '/') {
    await writeFile(new URL('../dist/index.html', import.meta.url), html)
  } else {
    await writeFile(new URL(`../dist${path}.html`, import.meta.url), html)
  }
}