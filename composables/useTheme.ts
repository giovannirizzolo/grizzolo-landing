export const useTheme = () => {
    const isDark = useState<boolean>('theme:isDark', () => false)

    const applyTheme = (dark: boolean) => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }

    const initTheme = () => {
        if (!process.client) return
        const stored = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const dark = stored !== null ? stored === 'dark' : prefersDark
        isDark.value = dark
        applyTheme(dark)
    }

    const toggle = (event: MouseEvent) => {
        if (!process.client) return
        const next = !isDark.value

        if ('startViewTransition' in document) {
            document.documentElement.style.setProperty('--ripple-x', `${event.clientX}px`)
            document.documentElement.style.setProperty('--ripple-y', `${event.clientY}px`)
            ;(document as any).startViewTransition(() => {
                isDark.value = next
                applyTheme(next)
            })
        } else {
            isDark.value = next
            applyTheme(next)
        }
    }

    return { isDark, toggle, initTheme }
}
