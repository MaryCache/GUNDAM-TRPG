import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'
import './style.css'

export default {
    ...DefaultTheme,
    enhanceApp({ router }: { router: any }) {
        // Enable View Transitions API
        if (typeof document !== 'undefined' && (document as any).startViewTransition) {
            router.onBeforeRouteChange = (to: any) => {
                const transition = (document as any).startViewTransition(() => {
                    // This promise resolves when the DOM update is complete
                })
            }
        }
    }
}
