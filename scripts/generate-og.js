import sharp from 'sharp'
import { join } from 'path'

const root = process.cwd()

const W = 1200
const H = 630

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#080808" stop-opacity="0.55"/>
      <stop offset="40%" stop-color="#080808" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#080808" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D4A017"/>
      <stop offset="100%" stop-color="#E8760A"/>
    </linearGradient>
  </defs>

  <!-- Dark overlay -->
  <rect width="${W}" height="${H}" fill="url(#overlay)"/>

  <!-- Gold accent line top -->
  <rect x="0" y="0" width="${W}" height="3" fill="url(#goldLine)"/>

  <!-- Subtitle label -->
  <text
    x="${W / 2}" y="220"
    font-family="Arial, sans-serif"
    font-size="22"
    font-weight="700"
    fill="#D4A017"
    text-anchor="middle"
    letter-spacing="10"
  >WAKEFIELD'S FEEL-GOOD PARTY SPECIALIST</text>

  <!-- Main title -->
  <text
    x="${W / 2}" y="360"
    font-family="Impact, Arial Black, sans-serif"
    font-size="130"
    font-weight="900"
    fill="white"
    text-anchor="middle"
    letter-spacing="6"
  >DJ CHRISSY G</text>

  <!-- Gold divider -->
  <rect x="${W / 2 - 45}" y="385" width="90" height="4" fill="url(#goldLine)" rx="2"/>

  <!-- Tagline -->
  <text
    x="${W / 2}" y="440"
    font-family="Arial, sans-serif"
    font-size="22"
    fill="rgba(255,255,255,0.7)"
    text-anchor="middle"
    letter-spacing="2"
  >Dance · Club · House · R&amp;B · Soul · Motown</text>

  <!-- URL -->
  <text
    x="${W / 2}" y="560"
    font-family="Arial, sans-serif"
    font-size="18"
    fill="rgba(255,255,255,0.4)"
    text-anchor="middle"
    letter-spacing="3"
  >djshakeywakey.co.uk</text>

  <!-- Gold accent line bottom -->
  <rect x="0" y="${H - 3}" width="${W}" height="3" fill="url(#goldLine)"/>
</svg>
`

async function generate() {
  const bgPath = join(root, 'public/images/crowd-phones.jpg')

  await sharp(bgPath)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .composite([
      {
        input: Buffer.from(svg),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 92 })
    .toFile(join(root, 'public/og-image.jpg'))

  console.log('OG image generated → public/og-image.jpg')
}

generate().catch(console.error)
