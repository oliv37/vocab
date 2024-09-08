export type WordsCategoryId = 'LEVEL1' | 'LEVEL2' | 'LEVEL3';

export interface WordsCategory {
  id: WordsCategoryId;
  label: string;
  pathParam: string;
  nbWords: number;
  wordsGroups: WordsGroup[];
}

export interface WordsGroup {
  id: string;
  pathParam: string;
  words: Word[];
}

export interface Word {
  id: number;
  value: string;
  translationFr: string;
}

export type WordsGroupCompletionAge =
  | 'LESS_THAN_TWO_DAYS'
  | 'LESS_THAN_FOUR_DAYS'
  | 'LONG_TIME_AGO_OR_NEVER';
