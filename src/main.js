import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Icons
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

library.add(faPhone)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')