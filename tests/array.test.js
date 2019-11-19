import { splitArray } from '../src'

it('', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  expect(splitArray(list, 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])

  expect(splitArray(list, 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9]
  ])
})