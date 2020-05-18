<template>
  <v-container fluid>
    <v-row>
      <v-col>Back-office</v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState("shipment", ["shipments"]),
  },
})
export default class Home extends Vue {
  shipments!: [];

  beforeMount() {
    this.getShipments();
  }

  getShipments() {
    this.$store.dispatch("shipment/getShipments");
  }
}
</script>

<style lang="scss"></style>
