const refresh = () => {
  let random = Math.floor((Math.random() * 10000) + 1)
  let url = decodeURI(window.location.href)
  if (url.indexOf('?') < 0) {
    url = url + "?random" + random
  } else {
    url = url.substr(0, url.indexOf('?random')) + "?random" + random
  }
  window.location.href = url
}