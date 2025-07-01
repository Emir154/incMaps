import i18next from "i18next";
import backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18next.use(backend).use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    fallbackLng: "uk",
    debug:true,
    detection: {
        order: ['queryString', 'cookie','localStorage'],
        caches: ["localStorage"],
        lookupLocalStorage: "locale"
    },
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: "/locales/{{lng}}/translation.json"
    }
});
export default i18next;