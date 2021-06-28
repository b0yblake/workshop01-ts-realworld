import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
// import store from '@/store'

//stylesheets
import "./assets/stylesheets/index.scss";

/** Inject the global static configuration into the application, which can be read through this.a, which is more convenient than manual injection by provide and inject*/
const app: ReturnType<typeof createApp> = createApp(App)



/** Load depen needs */
// app.use(store)
app.use(router)
app.mount('#app')
