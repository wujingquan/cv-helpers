export function randomUrl(url) {
  let random = Math.random().toString().substr(2)
  let q = queryUrl(url, 'random')

  if (url.includes('?')) {

    if (q) {
      url = url.replace(`random=${q}`, `random=${random}`)
    } else {
      url = url + `&random=${random}`
    }

  } else {
    url = url + '?random=' + random
  }

  return url
}

export function queryUrl(url, query) {
  const reg = new RegExp("(^|&)" + query + "=([^&]*)(&|$)")
  const result = url.substr(url.indexOf('?') + 1).match(reg)
  return result ? result[2] : null
}