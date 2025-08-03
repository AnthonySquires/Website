import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import en from './assets/locales/en.json';

const resources = {
    en,
};

// Note: this is the default react-i18next init as seen here: https://react.i18next.com/guides/quick-start
i18n
    .use(initReactI18next)
    .init({
        resources,
        // I don't know any other languages but IMO splitting all display strings to
        // separate files from the code makes it much more maintainable especially if
        // at any point in the future 
        lng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        fallbackNS: 'common',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;