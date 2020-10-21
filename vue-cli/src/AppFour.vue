<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="colorSelected='appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="colorSelected='appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="colorSelected='appRed'">Load Red Template</button>
        <hr />
        <component :is="colorSelected">I am colored component</component>
        <!-- <appBlue><p slot="blue">I am Blue colored component</p></appBlue>
          <appGreen><p slot="green">I am Green colored component</p></appGreen>
        <appRed><p slot="red">I am Red colored component</p></appRed> -->
        
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Colors/Blue.vue";
import Green from "./components/Colors/Green.vue";
import Red from "./components/Colors/Red.vue";

export default {
  data: function() {
    return {
      colorSelected: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
