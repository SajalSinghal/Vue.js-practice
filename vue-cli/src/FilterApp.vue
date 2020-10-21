/* A filter is a syntax feature that transforms output in a template. FIlters doesn't transform the data property instead
 * they transform the output. */
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <h2>Filters & Mixins</h2>

        <!-- Filters are represented by pipeline (|) character. Filetrs are chained by pipeline character only. input for
        the next filter is the output of its preceding filter.-->

        <p>{{text | toUpperCase | to-lowercase}}</p>
        <hr />

        <!-- This addition of fruit would not affect the same mixin present in app-list component. This means mixins do
        not have the same place in memory for all Vue instances.-->

        <button class="btn btn-primary" @click="fruits.push('Berries')">Add fruit</button>
        <input type="text" v-model="filteredtext" />

        <!-- If we use a filter in v-for loop, it would affect the optimal performance because of re-rendering of the template.
        It would re-render in case of no update to the DOM. So alternative way of using filters that does not affects the
        performance is using computed property having the method. It would keep in sync which data property is getting updated
        or not-->

        <div v-for="fruit in filteredfruits" :key="fruit">{{fruit}}</div>

        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/Filters&Mixins/List.vue";
import { fruitsMixin } from "./components/Filters&Mixins/FruitsMixin";
export default {
  data() {
    return {
      text: "Some text here"
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  mixins: [fruitsMixin]
};
</script>

<style>
</style>