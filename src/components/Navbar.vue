<template>
  <v-app-bar elevation="1" app color="white">
    <v-img
      class="mx-2 clickable hidden-sm-and-down"
      src="../assets/page-logo.png"
      max-height="40"
      max-width="150"
      contain
      @click="changePage('Home')"
    ></v-img>
    <v-spacer></v-spacer>
    <v-btn
      text
      small
      class="option font-weight-light mx-2"
      @click="changePage('Home')"
    >
      <v-icon>mdi-package-variant</v-icon>
      <p class="hidden-sm-and-down ma-0">Shipments</p>
    </v-btn>
    <v-menu height="40">
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon>mdi-account-multiple-plus-outline</v-icon>
          <p class="hidden-sm-and-down ma-0">Users</p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="changePage('NewUser')">
          <v-list-item-title>New user</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changePage('Users')">
          <v-list-item-title>Registered users</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      text
      small
      class="option font-weight-light mx-2"
      @click="changePage('Configuration')"
    >
      <v-icon>mdi-cog</v-icon>
      <p class="hidden-sm-and-down ma-0">Configuration</p>
    </v-btn>
    <v-menu height="40">
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon>mdi-plus-box-multiple-outline</v-icon>
          <p class="hidden-sm-and-down ma-0">Others</p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="changePage('Offices')">
          <v-list-item-title
            ><v-icon class="mr-1">mdi-office-building</v-icon
            >Offices</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="changePage('Discounts')">
          <v-list-item-title
            ><v-icon class="mr-1">mdi-sale</v-icon>Discounts</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="changePage('Options')">
          <v-list-item-title
            ><v-icon class="mr-1">mdi-format-list-bulleted</v-icon
            >Options</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="changePage('Characteristics')">
          <v-list-item-title
            ><v-icon class="mr-1">mdi-checkbox-multiple-marked-outline</v-icon
            >Characteristics</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      text
      small
      class="option font-weight-light mx-2"
      @click="changePage('LogIn')"
    >
      <v-icon>mdi-exit-to-app</v-icon>
      <p class="hidden-sm-and-down ma-0">Sign Out</p>
    </v-btn>
    <v-spacer class="hidden-md-and-up"></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({ components: {} })
export default class Navbar extends Vue {
  $router: any;
  $store: any;

  // Metodos
  // // Redirección
  changePage(link: string) {
    if (link == "LogIn") {
      localStorage.clear();
    }
    this.$router.push({ name: link });
  }
}
</script>

<style lang="scss" scoped>
.icon,
.option:hover {
  color: rgb(103, 176, 49);
}
.icon:hover {
  text-decoration: underline;
}
.text-option {
  font-size: 0.75rem;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
}
.clickable {
  cursor: pointer;
}
</style>
