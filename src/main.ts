import 'vite-plugin-svg-icons/register'
import 'amfe-flexible/index.js'

import { createApp } from 'vue'

import App from './App.vue'
import svgIcon from './components/SvgIcon/index.vue'
import i18n from './locales'
import router from './router'
import { key, store } from './store'

createApp(App).use(router).use(store, key).use(i18n).component('svg-icon', svgIcon).mount('#app')
