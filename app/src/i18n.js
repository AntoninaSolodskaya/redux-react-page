import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        Recipes: 'Recipes',
        home: 'Home',
        members: 'Members',
        blog: 'Blog',
        submit: 'Submit a Recipe',
        login: 'Log in',
        register: 'Register',
      },
    },
    es: {
      translations: {
        Recipes: 'Recetas',
        home: 'Casa',
        members: 'Miembros',
        blog: 'Blog',
        submit: 'Enviar una Receta',
        login: 'Iniciar sesión',
        register: 'Registro',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
