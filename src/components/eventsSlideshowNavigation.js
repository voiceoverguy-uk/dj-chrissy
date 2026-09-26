export function nextPhotoIndex(index, direction, count) {
  return (index + direction + count) % count
}

export function keyboardDirection(key) {
  if (key === 'ArrowRight') return 1
  if (key === 'ArrowLeft') return -1
  return null
}

export function swipeDirection(start, end) {
  const distanceX = end.clientX - start.x
  const distanceY = end.clientY - start.y
  if (Math.abs(distanceX) <= 50 || Math.abs(distanceX) <= Math.abs(distanceY)) return null
  return distanceX < 0 ? 1 : -1
}