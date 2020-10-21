<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button class="btn btn-primary" v-my-on:click="clicked">My directive Button</button>
        <hr />
        <div
          style="width: 100px; height: 100px; background-color: lightgreen"
          v-my-on:mouseenter="mouseEnter"
          v-my-on:mouseleave="mouseLeft"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "my-on": {
      bind(el, binding, vnode) {
        // el.onclick = function() {
        //   binding.value();
        // };

        /* Getting and differentiating all the events */
        const eventType = binding.arg;
        const fn = binding.value;
        el.addEventListener(eventType, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("I am clicked");
    },
    mouseLeft() {
      console.log("mouse left from box");
    },
    mouseEnter() {
      console.log("mouse entered in box");
    }
  }
};
</script>

<style>
</style>
