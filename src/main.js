import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/tailwind.css'
import './assets/global.css'
import store from "@/store"
/*setup library icon*/
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/*setup layout*/
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import SettingLayout from '@/layouts/SettingLayout.vue'
const app=createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.component('DefaultLayout', DefaultLayout)
app.component('LoginLayout', LoginLayout)
app.component('MainLayout', MainLayout)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('SettingLayout',SettingLayout)
