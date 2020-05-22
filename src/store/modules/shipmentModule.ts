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
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].status == null) {
            response.data[i].status = "Out For Delivery";
          }
        }
        context.commit("setShipments", response.data);
      });
    },
  },
};
