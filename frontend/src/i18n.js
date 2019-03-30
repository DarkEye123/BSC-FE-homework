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
          'Write Here': 'Write Here',
          Loading: 'Loading',
          'New Note': 'New Note',
          'Delete Note': 'Delete Note',
          Confirm: 'Confirm',
          Note: 'Note',
          'How to Log In': 'How to Log In',
          'To log into the app two users were made': 'To log into the app two users were made',
          USER: 'USER',
          PASSWORD: 'PASSWORD',
          'How to manipulate notes': 'How to manipulate notes',
          Delete: 'Delete',
          'Notes are draggable. To delete a note simply drag in over trash icon.':
            'Notes are draggable. To delete a note simply drag in over trash icon.',
          Create: 'Create',
          'Click on the green button and fill the text.': 'Click on the green button and fill the text.',
          Update: 'Update',
          'Double click on the chosen note and edit the text.': 'Double click on the chosen note and edit the text.',
          Beware: 'Beware',
          'Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.':
            'Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.',
          'Please be sure to not use them, otherwise strange behavior may occur.':
            'Please be sure to not use them, otherwise strange behavior may occur.',
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
          'Write Here': 'Píšte sem',
          Loading: 'Nahrávam',
          'New Note': 'Nová poznámka',
          'Delete Note': 'Zmaž poznámku',
          Confirm: 'Potvrď',
          Note: 'Poznámka',
          'How to Log In': 'Ako sa prihlásiť',
          'To log into the app two users were made': 'Pre účely aplikácie boli vytvorený dvaja používatelia',
          USER: 'POUŽÍVATEĽ',
          PASSWORD: 'HESLO',
          'How to manipulate notes': 'Ako narábať s poznámkami',
          Deletion: 'Mazanie',
          'Notes are draggable. To delete a note simply drag in over trash icon.':
            'Poznámky sa dajú posúvať. Pre zmazanie poznámky ju jednoducho pretiahnite do koša.',
          Creation: 'Tvorba',
          'Click on the green button and fill the text.': 'Zmačknite zelené tlačítko a vyplnte text.',
          Update: 'Aktualizácia',
          'Double click on the chosen note and edit the text.': 'Kliknite dva razy na vybranú poznámku a vyplnte text.',
          Beware: 'Upozornenie',
          'Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.':
            'Niektoré pluginy slúžiace na kontrolu pravopisu (napr. Grammarly), môžu spôsobovať problémy.',
          'Please be sure to not use them, otherwise strange behavior may occur.':
            'Aby ste predišli divnému chovaniu aplikácie, uistite sa, že ich nepoužívate.',
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
