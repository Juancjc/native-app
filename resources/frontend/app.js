// Entry point Vue3 + Bootstrap
import { createApp } from "vue";
import App from "./Layouts/App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { route } from "ziggy-js";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

// Agora você pode usar route('nomedarota') no seu Vue
// Exemplo: console.log(route('home'));
