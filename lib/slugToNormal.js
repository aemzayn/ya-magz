export const slugToNormal = slug => {
  if (!slug) {
    throw new Error('Slug is not found')
  }
  return slug
    .split('-')
    .map(c => c[0].toUpperCase() + c.slice(1))
    .join(' ')
}
