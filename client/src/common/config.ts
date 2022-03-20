const PERSON_ID = '621bea0a8e1e0383c524f0ce';
const BACKEND_URL = process.env.REACT_APP_BACK_END_URL;
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY ?? '';
const IS_RECAPTCHA_DISABLED = process.env.REACT_APP_IS_RECAPTCHA_DISABLED ?? null;

interface LanguageSet {
  code: string, // iso 639 1 code
  iso_639_2_code: string,
  culture: string,
}

const LANGUAGES : LanguageSet[] = [
  { code: 'nl', iso_639_2_code: 'nld', culture: 'nl-BE'},
  { code: 'en', iso_639_2_code: 'eng', culture: 'en-GB'}
];





export { BACKEND_URL, PERSON_ID, LANGUAGES, RECAPTCHA_SITE_KEY, IS_RECAPTCHA_DISABLED };