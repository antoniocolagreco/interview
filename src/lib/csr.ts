export const isCSR = () => {
  if (typeof window === 'object') return true
  return false
}
