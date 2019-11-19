import { randomUrl, queryUrl } from './src'

it('', () => {
  let result
  
  result = randomUrl({ url: `http://example.com` })
  expect(result).toMatch(/^http:\/\/example.com\?random=[0-9]+/)
  // http://example.com?random=123123123

  result = randomUrl({ url: `http://example.com/` })
  expect(result).toMatch(/^http:\/\/example.com\/\?random=[0-9]+/)
  // http://example.com/?random=123123123

  result = randomUrl({ url: `http://example.com?random=123456` })
  expect(result).toMatch(/^http:\/\/example.com\?random=[0-9]+/)
  // http://example.com/?random=123123123

  result = randomUrl({ url: `http://example.com?random=123456&name=test` })
  expect(result).toMatch(/^http:\/\/example.com\?random=[0-9]+&name=test/)
  // http://example.com?random=123123123&name=test

  result = randomUrl({ url: `http://example.com?name=test&random=123456` })
  expect(result).toMatch(/^http:\/\/example.com\?name=test&random=[0-9]+/)
  // http://example.com?name=test&random=123123123
})

it('', () => {
  let result
  
  result = queryUrl({ url: 'http://example.com?name=cv-helpers&test=jest', query: 'name' })
  expect(result).toBe('cv-helpers')

  result = queryUrl({ url: 'http://example.com?name=cv-helpers&test=jest', query: 'test' })
  expect(result).toBe('jest')
})