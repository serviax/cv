import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { useTranslation } from 'react-i18next';


i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'nl',
    fallbackLng: 'en',
    supportedLngs: ['nl','en'],
    interpolation: {escapeValue : false}
  });


export { i18n as default, useTranslation};