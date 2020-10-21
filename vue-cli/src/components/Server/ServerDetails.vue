<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a server</p>
    <p v-else>Server #{{server.id}} selected, status: {{server.status}}</p>
		<hr>
    <button @click="changeStatus">Change to normal</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";
export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    changeStatus() {
      if (this.server && this.server.status) {
        this.server.status = "normal";
      }
    }
  },
  created() {
    serverBus.$on("serverSelected", server => {
      this.server = server;
    });
  }
};
</script>

<style scoped>
div {
  border: 1px solid black;
}
</style>