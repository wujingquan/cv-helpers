function randomUrl({ url, dev }) {
  let random = Math.random().toString().substr(2)
  let p = getQueryFromStr(url, 'random')

  if (url.includes('?')) {
    
    console.log('debug', p)
    if (p) {
      url = url.replace(`random=${p}`, `random=${random}`)
    } else {
      url = url + `&random=${random}`
    }
    
  } else {
    url = url + '?random' + random
  }

  return dev ? { url, random } : url
}

function getQueryFromHref(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var result = decodeURI(window.location.search.substr(1)).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}

function getQueryFromStr(str, name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var result = decodeURI(str.substr(str.indexOf('?') + 1)).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}