<template>
  <v-app-bar elevation="1" app color="white">
    <v-img
      class="mx-2 clickable"
      src="../assets/page-logo.png"
      max-height="40"
      max-width="150"
      contain
      @click="changePage('Home')"
    ></v-img>
    <v-spacer></v-spacer>
    <v-responsive
      class="mr-auto mr-md-4 transition-swing"
      max-width="450"
      max-height="38"
      ><v-text-field
        class="hidden-sm-and-down"
        prepend-inner-icon="mdi-magnify"
        clearable
        dense
        rounded
        filled
        single-line
        :label="search"
        v-model="trackingID"
        @keyup.enter="searchShipment()"
      ></v-text-field
    ></v-responsive>
    <v-spacer></v-spacer>
    <v-menu height="40">
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon class="mr-1">mdi-package-variant</v-icon>
          <p class="hidden-sm-and-down ma-0">{{ buttonShipping }}</p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(option, index) in shippingOptions"
          :key="index"
          @click="changePage(option.link)"
        >
          <v-list-item-title>{{ option.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu height="40" v-if="activeUser == null">
      <template v-slot:activator="{ on }">
        <v-icon class="mr-1 hidden-md-and-up" color="black" v-on="on"
          >mdi-account-circle-outline</v-icon
        >
        <p class="text-option font-weight-light my-0 mx-2 hidden-sm-and-down">
          <v-icon class="mr-1" color="black">mdi-account-circle-outline</v-icon>
          <span>
            <a class="icon mr-1" @click="changePage('SignUp')">{{ signUp }}</a>
            /
            <a class="icon ml-1" @click="changePage('LogIn')">{{ logIn }}</a>
          </span>
        </p>
      </template>
      <v-list>
        <v-list-item @click="changePage('SignUp')">
          <v-list-item-title>{{ signUp }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changePage('LogIn')">
          <v-list-item-title>{{ logIn }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu height="40" v-else>
      <template v-slot:activator="{ on }">
        <v-btn text small class="option font-weight-light mx-2" v-on="on">
          <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
          <p class="hidden-sm-and-down ma-0">{{ activeUser }}</p>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="changePage('Profile')">
          <v-list-item-title>{{ buttonProfile }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item @click="changePage('Discounts')">
          <v-list-item-title>{{ buttonDiscounts }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <Translate />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Translate from "../components/Translate.vue";

@Component({ components: { Translate } })
export default class Navbar extends Vue {
  $router: any;
  $store: any;
  // Atributos
  // // Textos fijos
  search = "Search your tracking ID";
  buttonShipping = "Shipping";
  buttonProfile = "Profile";
  buttonDiscounts = "Discounts";
  signUp = "Sign Up";
  logIn = "Log In";
  // // Search
  trackingID = "";
  // // Opciones
  shippingOptions: { name: string; link: string }[] = [
    { name: "Create a Shipping", link: "NewShipment" },
    { name: "My Shipments", link: "Shipments" },
  ];

  // Computed properties
  get activeUser() {
    const userEmail = localStorage.getItem("Email");
    if (userEmail !== null) {
      return userEmail.split("@")[0];
    } else {
      return null;
    }
  }

  // Metodos
  // // Redirección
  changePage(link: string) {
    this.$router.push({ name: link });
  }
  searchShipment() {
    this.$router.push({
      name: "DetailShipment",
      params: { id: this.trackingID },
    });
  }
  // // Traducción
  get translator() {
    return this.$store.state.translate.languageTexts;
  }
  @Watch("translator")
  translate() {
    this.translator
      .filter(
        (term: { context: string; name: string; translation: string }) => {
          return term.context == "navbar" || term.context == "general";
        }
      )
      .forEach(
        (term: { context: string; name: string; translation: string }) => {
          if (term.name == "navbarButtonShipping") {
            this.buttonShipping = term.translation;
          } else if (term.name == "navbarButtonShippingCreate") {
            this.shippingOptions[0].name = term.translation;
          } else if (term.name == "navbarButtonShippingMy") {
            this.shippingOptions[1].name = term.translation;
          } else if (term.name == "generalSearch") {
            this.search = term.translation;
          } else if (term.name == "generalSignUp") {
            this.signUp = term.translation;
          } else if (term.name == "generalLogIn") {
            this.logIn = term.translation;
          }
        }
      );
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
