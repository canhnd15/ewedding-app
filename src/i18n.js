import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTrans from "../public/locales/en.json";
import vnTrans from "../public/locales/vn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTrans },
    vn: { translation: vnTrans },
  },
  lng: "vn", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
