import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RoleExplorer from './components/RoleExplorer.vue'
import JobExplorer from './components/JobExplorer.vue'
import SkillRoadmap from './components/SkillRoadmap.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RoleExplorer', RoleExplorer)
    app.component('JobExplorer', JobExplorer)
    app.component('SkillRoadmap', SkillRoadmap)
  }
} satisfies Theme

