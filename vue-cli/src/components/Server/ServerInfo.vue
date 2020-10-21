<template>
  <div class="list-group">
    <div class="list-group-item" style="cursor: pointer" @click="serverSelected">Server #{{ server.id }}</div>
  </div>
</template>

<script>
import { serverBus } from "../../main";
export default {
  data: function() {
    return {};
  },
  props: ["server"],
  methods: {
    serverSelected() {
      serverBus.$emit("serverSelected", this.server);
    }
  }
};
</script>