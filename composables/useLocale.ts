import en from '~/locales/en'
import it from '~/locales/it'

type Locale = 'en' | 'it'

const messages = { en, it }

export const useLocale = () => {
    const locale = useState<Locale>('locale', () => 'en')

    const applyLocale = (lang: Locale) => {
        locale.value = lang
        if (process.client) localStorage.setItem('locale', lang)
    }

    const initLocale = () => {
        if (!process.client) return
        const stored = localStorage.getItem('locale') as Locale | null
        const browser: Locale = navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en'
        applyLocale(stored ?? browser)
    }

    const toggle = () => applyLocale(locale.value === 'en' ? 'it' : 'en')

    const t = (key: string, params?: Record<string, string | number>): any => {
        const keys = key.split('.')
        let value: any = messages[locale.value]
        for (const k of keys) value = value?.[k]
        if (value === undefined) return key
        if (typeof value === 'string' && params) {
            return value.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`))
        }
        return value
    }

    return { locale, t, toggle, initLocale }
}
