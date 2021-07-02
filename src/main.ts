import { createApp } from 'vue'
import App from '@/App.vue'
import Router from '@/router'
// import Store from '@/store'
import Fontawesome from "@/plugins/fontawsome";

//stylesheets
import "./assets/stylesheets/index.scss";

/** Inject the global static configuration into the application, which can be read through this.a, which is more convenient than manual injection by provide and inject*/
const app: ReturnType<typeof createApp> = createApp(App)

/** Load depen needs */
// app.use(Store)
app.use(Router)
app.component('fa', Fontawesome)
app.mount('#app')
