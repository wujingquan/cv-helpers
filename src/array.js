export function splitArray (arr, length) {
  const ret = []
  for (let i = 0; i < arr.length; i += length) {
    ret.push(arr.slice(i, i + length))
  }

  return ret
}