import { TranslationGlossary } from '../common/translation.model';

export interface KeyWord {
  keyWord: string;
  translations: Array<TranslationGlossary>;
}