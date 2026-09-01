import { createApp } from "vue";
import router from "./router/router.js";
import { createPinia } from "pinia";
import userConfig from "./config/userConfig.js";
import App from "./views/Home.vue";
// import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
