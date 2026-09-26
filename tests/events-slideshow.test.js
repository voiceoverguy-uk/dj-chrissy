import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { photos } from '../src/components/eventsSlideshowData.js'
import { nextPhotoIndex, keyboardDirection, swipeDirection } from '../src/components/eventsSlideshowNavigation.js'

test('arrows advance through all 14 photos and wrap in both directions', () => {
  assert.equal(photos.length, 14)
  assert.equal(nextPhotoIndex(0, 1, photos.length), 1)
  assert.equal(nextPhotoIndex(photos.length - 1, 1, photos.length), 0)
  assert.equal(nextPhotoIndex(0, -1, photos.length), photos.length - 1)
  assert.equal(nextPhotoIndex(7, -1, photos.length), 6)

  let index = 0
  for (let i = 0; i < photos.length; i++) index = nextPhotoIndex(index, 1, photos.length)
  assert.equal(index, 0)
})

test('left and right keyboard keys navigate and wrap; unrelated keys do nothing', () => {
  assert.equal(keyboardDirection('ArrowRight'), 1)
  assert.equal(keyboardDirection('ArrowLeft'), -1)
  assert.equal(keyboardDirection('Enter'), null)
  assert.equal(keyboardDirection('a'), null)
  assert.equal(nextPhotoIndex(photos.length - 1, keyboardDirection('ArrowRight'), photos.length), 0)
  assert.equal(nextPhotoIndex(0, keyboardDirection('ArrowLeft'), photos.length), photos.length - 1)
})

test('horizontal swipes navigate but small or vertical gestures do not', () => {
  const start = { x: 100, y: 100 }
  assert.equal(swipeDirection(start, { clientX: 40, clientY: 110 }), 1)
  assert.equal(swipeDirection(start, { clientX: 160, clientY: 110 }), -1)
  assert.equal(swipeDirection(start, { clientX: 50, clientY: 100 }), null)
  assert.equal(swipeDirection(start, { clientX: 40, clientY: 170 }), null)
})

test('every slideshow photo has a unique, nonempty image in public assets', async () => {
  assert.equal(photos.length, 14)
  assert.equal(new Set(photos.map(({ src }) => src)).size, photos.length)
  for (const { src, alt } of photos) {
    assert.match(src, /^\/images\/recent-events\/[^/]+\.webp$/)
    assert.ok(alt.trim(), `${src} needs descriptive alt text`)
    const path = fileURLToPath(new URL(`../public${src}`, import.meta.url))
    const info = await stat(path)
    assert.ok(info.isFile() && info.size > 12, `${src} is missing or empty`)
    const bytes = await readFile(path)
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF', `${src} is not a WebP file`)
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP', `${src} is not a WebP file`)
  }
})