import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Help: 'Help',
          Notes: 'Notes',
          Logout: 'Logout',
          Password: 'Password',
          'Sign In': 'Sign In',
          'Signing In': 'Signing In',
          Email: 'Email',
        },
        BETrans: {
          "passwords don't match (ಠ_ಠ)": "passwords don't match (ಠ_ಠ)",
          "user doesn't exist t(-.-t)": "user doesn't exist t(-.-t)",
          Problem: 'Problem',
        },
      },
      sk: {
        translations: {
          Help: 'Pomoc',
          Notes: 'Poznámky',
          Logout: 'Odhlásiť',
          Password: 'Heslo',
          'Sign In': 'Prihlásiť sa',
          'Signing In': 'Prihlasujem',
          Email: 'Email',
        },
        BETrans: {
          "passwords don't match (ಠ_ಠ)": 'heslo nesedí (ಠ_ಠ)',
          "user doesn't exist t(-.-t)": 'užívateľ neexistuje t(-.-t)',
          Problem: 'Problém',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
