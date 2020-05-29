import Vue from "vue";
import Vuex from "vuex";

import shipment from "./modules/shipmentModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shipment,
  },
});
