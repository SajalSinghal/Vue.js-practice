<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Loaded id: {{id}}</p>
    <!-- <p>Name from the props of router: {{name}}</p> -->
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <hr />

    <!-- To display nested router of user routes -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* $route is provided by Vue.js through which we can access active routes. params is an object in $route.
       * params contains key value pairs passed in routes. Here key is the id. So whenever this component loads
       we can get the key values from the route. */

      /*  But one problem is our header breadcrumbs are in different component so when we pass different id(or load the same
       *  component by routes) from the header in routes, it would not reflect in our own component as it would not recreate
       *  the same component again. So to solve this problem we need to watch routes so that it would update id
       *  paramter by watching it change. */

      id: this.$route.params.id
    };
  },
  props: {
    // name: {
    //   default: "Name",
    //   type: String
    // }
  },
  watch: {
    /* route contains two parameters to and from by which we can get from which page we are coming and going to through routes */
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome() {
      /* Here we are navigating (imperative navigation) to the home page by using $router push method. */
      //   this.$router.push("/");

      /* We can use the name of the route here simply */
      this.$router.push({ name: "home" });
    }
  }
};
</script>