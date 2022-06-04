import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("hoge", {
  data: () => ({
    count: 10,
  }),
  template: `<p>hoge! {{count}}</p>`,
});
app.mount("#app");
