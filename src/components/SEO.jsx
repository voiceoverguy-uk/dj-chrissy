import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageSeo, siteUrl } from '../seo/pages'

export default function SEO() {
  const { pathname } = useLocation()
  const metadata = pageSeo[pathname]

  useEffect(() => {
    if (!metadata) return
    const { title, description } = metadata
    const canonical = siteUrl + (pathname === '/' ? '/' : pathname)
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
    const canonicalTag = document.querySelector('link[rel="canonical"]')
    if (canonicalTag) canonicalTag.setAttribute('href', canonical)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', title)
    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', description)
  }, [metadata, pathname])
  return null
}
