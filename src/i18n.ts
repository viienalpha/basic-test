// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_en from './locales/en'


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: common_en
    }
  },
  lng: localStorage?.getItem('locale') || 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false
  }
})

export default i18n
