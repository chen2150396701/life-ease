import { createApp } from "vue";
import "./config/mainCSS.css";
import router from "./router/router.js";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import userConfig from "./config/userConfig.js";
import App from "./views/Home.vue";
// import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);
app.use(router);
app.use(pinia);
app.mount("#app");
