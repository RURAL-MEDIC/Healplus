import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en/common.json';
import pnTranslations from './locales/pn/common.json';

const resources = {
  en: {
    translation: enTranslations
  },
  pn: {
    translation: pnTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;