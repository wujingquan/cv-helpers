export const location_domain = url => {
  if (url.startsWith('http://')) {
    url = url.replace('http://', '')
  }
  
  if (url.startsWith('https://')) {
    url = url.replace('https://', '')
  }
  
  if (!url.includes('/')) {
    url += '/'
  }
  
  return url.split('/')[0]
}

export const location_host = location_domain
export const location_hostname = location_domain

export function location_origin (url) {
  const domain = location_domain(url)
  
  if (url.startsWith('http://')) {
    return 'http://' + domain
  }
  
  if (url.startsWith('https://')) {
    return 'https://' + domain
  }
}