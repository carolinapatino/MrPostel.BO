import Vue from "vue";
import userService from "../../services/shipmentService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    shipments: [],
  },
  // -----------------------------------------------------------------
  mutations: {
    setShipments(state: {}, shipments: {}) {
      Vue.set(state, "shipments", shipments);
    },
  },
  // -----------------------------------------------------------------
  actions: {
    getShipments: async (context: any) => {
      await userService.getShipments().then((response: any) => {
        context.commit("setShipments", response.data);
      });
    },
  },
};
