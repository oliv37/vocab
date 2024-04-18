import { ResolveFn } from '@angular/router';
import { LangCode } from '../shared/constants/lang.constants';
import { Word } from './word.model';
import { findWordsInCategory } from './word.utils';

export const wordsInCategoryResolver: ResolveFn<Word[]> = async (route) => {
  const langCode = route.parent?.parent?.paramMap.get('langCode') as LangCode;
  const categoryNumber = Number(route.parent?.paramMap.get('categoryNumber'));
  return await findWordsInCategory(langCode, categoryNumber);
};
