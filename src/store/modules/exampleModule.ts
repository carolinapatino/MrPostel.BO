import Vue from "vue";

//Aqui se importan los servicios

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    // Aqui van los atributos
  },
  // -----------------------------------------------------------------
  getters: {
    // getters and computed props
  },
  // -----------------------------------------------------------------
  mutations: {
    // Aqui se setean los atributos del state
  },
  // -----------------------------------------------------------------
  actions: {
    // métodos que llamen a un servicio para obtener información y a un mutation para setearla en el state
  },
};

//this.$store.dispatch("example/nombre_action").then(() => {}); para llamar a un action
