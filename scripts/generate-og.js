import { createCanvas, GlobalFonts, loadImage } from '@napi-rs/canvas'
import { writeFileSync } from 'fs'
import { join } from 'path'

const root = process.cwd()

const W = 1200
const H = 630

const fontPath = join(root, 'node_modules/@fontsource/bebas-neue/files/bebas-neue-latin-400-normal.woff')
GlobalFonts.registerFromPath(fontPath, 'BebasNeue')

async function generate() {
  const bgImage = await loadImage(join(root, 'public/images/crowd-phones.jpg'))

  const canvas = createCanvas(W, H)
  const ctx = canvas.getContext('2d')

  // Draw background (cover fit)
  const imgRatio = bgImage.width / bgImage.height
  const canvasRatio = W / H
  let sx = 0, sy = 0, sw = bgImage.width, sh = bgImage.height
  if (imgRatio > canvasRatio) {
    sw = bgImage.height * canvasRatio
    sx = (bgImage.width - sw) / 2
  } else {
    sh = bgImage.width / canvasRatio
    sy = (bgImage.height - sh) / 2
  }
  ctx.drawImage(bgImage, sx, sy, sw, sh, 0, 0, W, H)

  // Dark gradient overlay
  const overlay = ctx.createLinearGradient(0, 0, 0, H)
  overlay.addColorStop(0, 'rgba(8,8,8,0.55)')
  overlay.addColorStop(0.4, 'rgba(8,8,8,0.45)')
  overlay.addColorStop(1, 'rgba(8,8,8,0.85)')
  ctx.fillStyle = overlay
  ctx.fillRect(0, 0, W, H)

  // Gold gradient helper
  const goldGrad = (x1, x2) => {
    const g = ctx.createLinearGradient(x1, 0, x2, 0)
    g.addColorStop(0, '#D4A017')
    g.addColorStop(1, '#E8760A')
    return g
  }

  // Top gold bar
  ctx.fillStyle = goldGrad(0, W)
  ctx.fillRect(0, 0, W, 3)

  // Subtitle
  ctx.font = '700 20px Arial'
  ctx.fillStyle = '#D4A017'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '8px'
  ctx.fillText("WAKEFIELD'S FEEL-GOOD PARTY SPECIALIST", W / 2, 215)

  // Main title — Bebas Neue
  ctx.letterSpacing = '6px'
  ctx.font = '400 155px BebasNeue'
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'
  ctx.fillText('DJ CHRISSY G', W / 2, 380)

  // Gold divider line
  ctx.fillStyle = goldGrad(W / 2 - 45, W / 2 + 45)
  ctx.beginPath()
  ctx.roundRect(W / 2 - 45, 398, 90, 4, 2)
  ctx.fill()

  // Genre tagline
  ctx.letterSpacing = '1px'
  ctx.font = '400 22px Arial'
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.textAlign = 'center'
  ctx.fillText('Dance · Club · House · R&B · Soul · Motown', W / 2, 452)

  // URL
  ctx.letterSpacing = '2px'
  ctx.font = '400 18px Arial'
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.fillText('djshakeywakey.co.uk', W / 2, 568)

  // Bottom gold bar
  ctx.fillStyle = goldGrad(0, W)
  ctx.fillRect(0, H - 3, W, 3)

  // Save as JPEG
  const buf = canvas.toBuffer('image/jpeg', 92)
  writeFileSync(join(root, 'public/og-image.jpg'), buf)
  console.log('OG image generated → public/og-image.jpg')
}

generate().catch(console.error)
