import { randomUrl } from './src'

test('haha', () => {
  const dev = true
  
  const {
    url,
    random
  } = randomUrl({
    url: 'http://example.com?random=123456&name=test',
    dev
  })

  expect(url).toBe(`http://example.com?random=${random}&name=test`)
  
  // 'http://example.com'
  // 'http://example.com/'
  // 'http://example.com?random=123456&name=test'

})