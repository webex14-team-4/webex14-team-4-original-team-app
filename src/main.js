import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./firebase.js" // これを追加
import "./algorithm-visualizer_setup.js"

createApp(App).use(router).mount("#app")
