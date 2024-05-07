// locales/i18n.ts
import { createI18n } from 'vue-i18n'
import zh from './zh.ts'
import en from "@/locales/en.ts";
const messages = {
    en,
    zh
}
const i18n = createI18n({
    // legacy: false,
    // globalInjection: true,

    locale: 'zh',
    messages
})

export default i18n
