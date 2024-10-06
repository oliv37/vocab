import { WordsCompletionAge } from '../models/words-completion.model';

const ONE_DAY_AGE_IN_MS = 24 * 60 * 60 * 1000;

const WORDS_COMPLETION_MAX_AGE_ASC: [WordsCompletionAge, number][] = [
  ['LESS_THAN_THREE_DAYS', 3 * ONE_DAY_AGE_IN_MS],
  ['LESS_THAN_SIX_DAYS', 6 * ONE_DAY_AGE_IN_MS],
];

export function toWordsGroupCompletionAge(
  completionDateInMs: number | string | null
): WordsCompletionAge {
  if (completionDateInMs == null || isNaN(+completionDateInMs)) {
    return 'LONG_TIME_AGO_OR_NEVER';
  }

  const nowInMs = new Date().getTime();
  const ageInMs = nowInMs - +completionDateInMs;

  return (
    WORDS_COMPLETION_MAX_AGE_ASC.find(
      ([, maxAgeInMs]) => ageInMs < maxAgeInMs
    )?.[0] ?? 'LONG_TIME_AGO_OR_NEVER'
  );
}
