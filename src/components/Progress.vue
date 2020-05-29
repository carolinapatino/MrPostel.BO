<template>
  <div class="pa-4 elevation-2 white">
    <h4 class="black--text text-center">{{ title }}</h4>
    <span class="d-flex align-center justify-center">
      <v-icon size="50" color="rgb(103, 176, 49)" class="mr-1">{{
        icon
      }}</v-icon>
      <b class="display-1 mb-1 ml-5">{{ value }}</b>
    </span>
    <v-progress-linear
      class="mt-2"
      :value="(value * 100) / total"
      background-color="black"
      background-opacity="0.2"
      color="rgb(149, 193, 74)"
    ></v-progress-linear>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Progress extends Vue {
  @Prop()
  title!: string;
  @Prop()
  value!: number;
  @Prop()
  total!: number;
  @Prop()
  icon!: string;
}
</script>

<style lang="scss"></style>
