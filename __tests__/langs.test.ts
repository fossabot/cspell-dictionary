import { getWordsFromFile } from '../getWordsFromFile'

test('En', async () => {
  const words = await getWordsFromFile('en.txt')
  expect(words.sort()).toEqual(words)
})
