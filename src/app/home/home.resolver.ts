import { ResolveFn } from '@angular/router';
import { LangCode, LANGS } from '@shared/lang/lang.constant';
import { HomeLang } from './home.model';
import { countAllWords } from '@word/word.util';

export const resolveHomeLangs: ResolveFn<HomeLang[]> = async () => {
  const homeLangs: HomeLang[] = [];
  let langCode: LangCode;

  for (langCode in LANGS) {
    homeLangs.push({
      langCode,
      langLabel: LANGS[langCode],
      nbWords: await countAllWords(langCode),
    });
  }

  return homeLangs;
};
