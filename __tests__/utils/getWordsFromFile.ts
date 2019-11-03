import * as fs from 'fs-extra'
import * as path from 'path'

const cwd = process.cwd()

/**
 * Read a dictionary file and return all words.
 *
 * @internal
 * @param fileName - Dictionary file name.
 * @returns Words found in the dictionary file.
 */
export const getWordsFromFile = async (fileName: string): Promise<string[]> => {
  const contents = await fs.readFile(
    path.join(cwd, 'definitions', `${fileName}.txt`),
    'utf8'
  )
  return contents.trim().split('\n')
}
