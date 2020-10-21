/* A filter is a syntax feature that transforms output in a template. FIlters doesn't transform the data property instead
 * they transform the output. */
<template>
  <div>
    <input type="text" v-model="filteredtext" />

    <!-- If we use a filter in v-for loop, it would affect the optimal performance because of re-rendering of the template.
        It would re-render in case of no update to the DOM. So alternative way of using filters that does not affects the
        performance is using computed property having the method. It would keep in sync which data property is getting updated
    or not-->

    <div v-for="fruit in filteredfruits" :key="fruit">{{fruit}}</div>
  </div>
</template>

<script>
/* To avoid the duplicacy of code when same filter or computed function is used locally in different files, we can take the
 * help of mixins so that code can be centralised in one mixin file. */

import { fruitsMixin } from "./FruitsMixin";
export default {
  /* mixins is the property which contains all the mixins in an array form. */

  mixins: [fruitsMixin],
  created() {
    console.log("created hook in list component");
  }
};
</script>

<style>
</style>