<template>
  <div>
    <h3>Some User Details</h3>
    <!-- here no need to watch route object as every time we are creating a component by clicking the list item in 
    the UserStart component-->

    <p>User loaded has id: {{$route.params.id}}</p>

    <!-- making router-link more dynamic by binding 'to' to dynamic path -->
    <!-- <router-link tag="button" class="btn btn-primary" :to="'/user/' + $route.params.id + '/edit'">Edit User</router-link> -->

    <!-- Elegant way of passing dynamic routes is by passing object and getting it in routes object through name attribute -->
    <router-link tag="button" class="btn btn-primary" :to="link">Edit User</router-link>

    <!-- Sending data above through query parameters -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        /* Passing hash fragment(or appending #data) in the route so that we can go to a part of the page having id 'data' */
        hash: "#data"
      }
    };
  },

  /*  beforeRouteEnter is a guard which is used in the component to protect it from reaching it. Here Vue instance
   *  properties cannot be accessible as Vue instance doesn't create by this time. beforeRouteEnter is a lifecycle hook
   *  of the router. */

  beforeRouteEnter(to, from, next) {
    /* We can check any condition to reach the page while using next() which can continue or abrupt the routing of this page */
    // if (false) {
    //   next();
    // } else {
    //   next(false);
    // }
    console.log("beforeRouteEnter");
    next();
  }
};
</script>