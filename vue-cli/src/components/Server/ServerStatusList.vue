<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-info v-for="server in servers" :server="server" :key="server.id"></server-info>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "normal" },
        { id: 2, status: "critical" },
        { id: 3, status: "unknown" },
        { id: 4, status: "normal" }
      ]
    };
  }
};
</script>

/* If we use direct style for any template then it would be applied for all the components present in the app. 
 * To avoid this situation we need to include scoped in a particular component's style.
 * If we inspect the style and see in a browser we could see an unique id being appended with data-v which used to bind 
   all the styles separately for a paricular component.   */
<style scoped>
div {
  border: 1px solid red;
}
</style>