<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <v-row>
          <v-col
            cols="6"
            sm="3"
            v-for="(status, key) in deliveryStatus"
            :key="key"
          >
            <Progress
              :title="status.name"
              :icon="status.icon"
              :value="shipmentsByStatus(status.name)"
              :total="currentShipments.length"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-card elevation="5">
              <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                ref="datatable"
                @current-items="getCurrentShipments"
                :items-per-page="5"
                multi-sort
                :headers="headers"
                :items="shipments"
                :search="search"
                :loading="loading"
                loading-text="Loading... Please wait"
                no-data-text="We didn't find shipments... Sorry"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon
                    class="clickable"
                    color="black"
                    @click="changePage(item.trackingid)"
                    >mdi-clipboard-text-outline</v-icon
                  >
                </template>
                <template v-slot:item.date="{ item }">
                  {{ formatDate(item.date) }}
                </template>
                <template v-slot:item.total="{ item }">
                  {{ item.total + " $" }}
                </template>
              </v-data-table>
            </v-card></v-col
          >
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import moment from "moment";
import Progress from "../components/Progress.vue";

@Component({
  components: { Progress },
  computed: {
    ...mapState("shipment", ["shipments"]),
  },
})
export default class Home extends Vue {
  $router: any;
  loading = true;
  shipments!: [];
  currentShipments: [] = [];
  search = "";
  headers: {}[] = [
    {
      text: "Tracking ID",
      align: "center",
      sortable: false,
      value: "trackingid",
      class: "teal--text subtitle-1",
    },
    {
      text: "User",
      align: "center",
      value: "user",
      class: "teal--text subtitle-1",
    },
    {
      text: "Purpose",
      align: "center",
      value: "purpose",
      sortable: false,
      class: "teal--text subtitle-1",
    },
    {
      text: "Office",
      align: "center",
      value: "office",
      class: "teal--text subtitle-1",
    },
    {
      text: "Status",
      align: "center",
      value: "status",
      class: "teal--text subtitle-1",
    },
    {
      text: "Date",
      align: "center",
      value: "date",
      class: "teal--text subtitle-1",
    },
    {
      text: "Packages",
      align: "center",
      value: "packages",
      class: "teal--text subtitle-1",
    },
    {
      text: "Total",
      align: "center",
      value: "total",
      class: "teal--text subtitle-1",
    },
    {
      text: "Detail",
      align: "center",
      class: "teal--text subtitle-1",
      value: "actions",
      sortable: false,
    },
  ];
  deliveryStatus: {}[] = [
    {
      name: "Out For Delivery",
      icon: "mdi-package-variant-closed",
    },
    {
      name: "In Transit",
      icon: "mdi-car-estate",
    },
    {
      name: "Delivered",
      icon: "mdi-package-variant",
    },
    {
      name: "Total",
      icon: "mdi-package",
    },
  ];

  beforeMount() {
    this.getShipments();
  }

  getShipments() {
    this.$store
      .dispatch("shipment/getShipments")
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD");
  }

  getCurrentShipments() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.currentShipments = this.$refs.datatable.$children[0].filteredItems;
  }

  shipmentsByStatus(status: string) {
    if (status == "Total") {
      return this.currentShipments.length;
    } else {
      return this.currentShipments.filter(
        (shipment: { status: string }) => shipment.status == status
      ).length;
    }
  }

  changePage(trackingId: string) {
    this.$router.push({ name: "DetailShipment", params: { id: trackingId } });
  }
}
</script>

<style lang="scss">
.clickable {
  cursor: pointer;
}
</style>
