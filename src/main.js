import { createApp } from "vue";
import App from "./App.vue";

// Components
import BaseLayout from "./components/layout/BaseLayout.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheHero from "./components/TheHero.vue";
import TheFooter from "./components/TheFooter.vue";

// Styles
import "./styles/main.css";

const app = createApp(App);

app.component("base-layout", BaseLayout);
app.component("the-navbar", TheNavbar);
app.component("the-hero", TheHero);
app.component("the-footer", TheFooter);

app.mount("#app");
