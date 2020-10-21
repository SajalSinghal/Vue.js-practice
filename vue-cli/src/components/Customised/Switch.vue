/* Switch is the customised input field vue component which takes the v-model parameters(value and input) 
 * from the parent component */
<template>
  <div>
    <div id="on" @click="switched(true)" :class="{active : value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </div>
</template>

<script>
export default {
  /* value is the props coming from the customised tag of the parent component if v-model is being used there */
  props: ["value"],
  methods: {
    switched(isOn) {
      /* Emitting the event so that our customised field performed event can reflect its value in the parent component.
      Its name must be input otherwise it would not work. */
      this.$emit("input", isOn);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  margin: 10px -2px;
  box-sizing: content-box;
  text-align: center;
  cursor: pointer;
  display: inline-block;
}
#on:hover,
#on.active {
  background-color: lightgreen;
}
#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>