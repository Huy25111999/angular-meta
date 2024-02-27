export class AlphabetDictionaryDTO {
  constructor(characters: string, group: string, items: any[]) {
    this.characters = characters;
    this.group = group;
    this.items = items;
  }

  characters?: string;
  group?: string;
  items?: any[];
}

export const DICTIONARY = [
  new AlphabetDictionaryDTO('A', 'A', []),
  new AlphabetDictionaryDTO('B', 'B', []),
  new AlphabetDictionaryDTO('C', 'C', []),
  new AlphabetDictionaryDTO('D', 'D', []),
  new AlphabetDictionaryDTO('E', 'E', []),
  new AlphabetDictionaryDTO('F', 'F', []),
  new AlphabetDictionaryDTO('G', 'G', []),
  new AlphabetDictionaryDTO('H', 'H', []),
  new AlphabetDictionaryDTO('J', 'J', []),
  new AlphabetDictionaryDTO('K', 'K', []),
  new AlphabetDictionaryDTO('L', 'L', []),
  new AlphabetDictionaryDTO('M', 'M', []),
  new AlphabetDictionaryDTO('N', 'N', []),
  new AlphabetDictionaryDTO('O', 'O', []),
  new AlphabetDictionaryDTO('P', 'P', []),
  new AlphabetDictionaryDTO('Q', 'Q', []),
  new AlphabetDictionaryDTO('R', 'S', []),
  new AlphabetDictionaryDTO('T', 'T', []),
  new AlphabetDictionaryDTO('U', 'U', []),
  new AlphabetDictionaryDTO('W', 'W', []),
  new AlphabetDictionaryDTO('X', 'X', []),
  new AlphabetDictionaryDTO('Y', 'Y', []),
  new AlphabetDictionaryDTO('Z', 'Z', []),
]
