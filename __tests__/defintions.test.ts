import { getWordsFromFile } from './utils/getWordsFromFile'

const definitionFiles = ['code', 'companies', 'team']

for (const fileName of definitionFiles) {
  test(`${fileName}.txt sort order`, async () => {
    const words = await getWordsFromFile(`${fileName}`)
    expect(words.sort()).toEqual(words)
  })
}
