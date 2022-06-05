import { createApp } from "vue";
import App from "./App.vue";
import i18nPlugin from "./plugins/i18n";

const app = createApp(App);
app.component("FooterContents", {
  data: () => ({
    year: new Date().getFullYear(),
  }),
  template: `
    <hr/>
    <p style="text-align:center;">
      &copy;hoge {{year}}
    </p>
  `,
});
app.use(i18nPlugin, {
  greetings: { hello: "Bonjour!" },
});
app.mount("#app");
