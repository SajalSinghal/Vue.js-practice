<template>
  <div>
    <h3>Edit the User</h3>
    <!-- Getting data from query parameters -->

    <p>Locale value: {{$route.query.locale}}</p>
    <p>Analytics value: {{$route.query.q}}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>

    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },

  /* beforeRouteLeave is another guard or hook of router lifecycle which used to run before leaving any route or page.
   * In beforeRouteLeave we can access the properties of the vue instance because component has been created by this time. */

  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure you want to leave?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>