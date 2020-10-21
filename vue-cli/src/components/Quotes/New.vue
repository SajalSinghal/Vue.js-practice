<template>
  <div>
    <h1>New component</h1>
    <button @click="count++">Increase</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  destroyed() {
    console.log("component is destroyed!");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>

<style scoped>
</style>
