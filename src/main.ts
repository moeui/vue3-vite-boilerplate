import 'vite-plugin-svg-icons/register'

import { createApp } from 'vue'

import App from './App.vue'
import svgIcon from './components/SvgIcon/index.vue'
import router from './router'
import { key, store } from './store'

createApp(App).use(router).use(store, key).component('svg-icon', svgIcon).mount('#app')
