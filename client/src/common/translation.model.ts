export interface TranslationGlossary {
  language: string;
  translationMap: Map<string,string>;
}

export interface TranslationList {
  translations: TranslationGlossary[]
}


const translations : Record<string,string> = {};
translations['key'] = 'value';


// var someExample = <TranslationGlossary[]> [
//   {language: 'nl', translation: ['somestuff'] = 'stff', }
// ]