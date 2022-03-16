const PERSON_ID = '621bea0a8e1e0383c524f0ce';
const BACKEND_URL = process.env.REACT_APP_BACK_END_URL;


const LANGUAGES = [ 'en', 'nl'];

const ISO_639_1_TO_ISO_639_2 = {
  'nl': 'nld',
  'en': 'eng'
};


export { BACKEND_URL, PERSON_ID, ISO_639_1_TO_ISO_639_2, LANGUAGES };