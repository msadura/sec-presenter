export default function getDefaultRiders(count) {
  return new Array(count).fill('').map((item, index) => ({ name: `Rider ${index + 1}` }))
}