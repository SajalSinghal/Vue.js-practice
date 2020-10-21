/* Component template should contain exactly one root element for both global or local components */
<template>
  <div>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from "./components/ServerStatus/ServerStatus.vue";
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>