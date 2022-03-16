import { TranslationGlossary, TranslationList } from '../common/translation.model';
import { KeyWord } from '../Keywords/keywords.model';
import { Project } from './project.model';


export interface TranslateableModel {
  translations: TranslationGlossary[];
}

export interface ExpierenceModel extends TranslateableModel {
  // startDate: Date;
  // endDate?: Date;
  // keywords: KeyWord[];
  // projects: Project[];
  description: string;
  company: string;
}


// const boondoggle = <Experience>{
//   startDate: new Date(),
//   keywords: [{ keyWord: 'c++' }, { keyWord: 'c#' }],
//   description: 'doing stuff',
//   company: 'Boondoggle',
//   keywords: null,
//   projects: null,
//   translations: [{keyWords: }]
// };


// translateit(x => x.startDate, boondoggle);

// // by default select x.startDate, otherwise select x.translations.nl.element[startdate]

// function translateit(arg0: (x: any) => any, boondoggle: Experience) {
//   arg0.apply(boondoggle);
// }
