export default function getRandomItem(arr, need) {
  let tmp = new Set()
  const max = Math.min(arr.length, need)
  while (tmp.size < max) {
    const random = Math.floor(Math.random() * arr.length)
    tmp.add(arr[random])
  }

  return [...tmp]
}
