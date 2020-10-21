<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <user></user>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./components/User/User.vue";

export default {
  components: {
    user: User
  }
};
</script>

<style scoped>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>