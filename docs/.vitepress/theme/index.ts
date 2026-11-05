import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RoleExplorer from './components/RoleExplorer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RoleExplorer', RoleExplorer)
  }
} satisfies Theme
