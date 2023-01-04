import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Watermark } from "@/utils/watermark"
Vue.config.productionTip = false;
Vue.prototype.$watermark = new Watermark({
  content: '全局',
  width: 100,
  height: 80,
  color: 'red',
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
