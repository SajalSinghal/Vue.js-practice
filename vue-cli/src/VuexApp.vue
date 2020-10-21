<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>

        <!-- removing props(:counter="counter") from app-result component as we are using Vuex now for getting data -->
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr />

        <!-- removing event listener from app-counter(@updated="counter += $event") as we are using Vuex now for storing
        data-->
        <app-counter></app-counter>
        <br />
        <app-another-counter></app-another-counter>

        <hr />
        <!-- Two way binding using vmodel and vuex -->

        <input type="text" v-model="value" />

        <!-- Two way data binding using our custom v-model and vuex -->

        <!-- <input type="text" :value="value" @input="updateValue" /> -->
        <p>value: {{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Vuex/Counter.vue";
import AnotherCounter from "./components/Vuex/AnotherCounter.vue";
import Result from "./components/Vuex/Result.vue";
import AnotherResult from "./components/Vuex/AnotherResult.vue";
export default {
  computed: {
    // value() {
    //   return this.$store.getters.value;
    // },
    value: {
      /* Using getters and setters for value property. setter is used very rarely in computed property. */

      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  methods: {
    // updateValue(event) {
    //   this.$store.dispatch("updateValue", event.target.value);
    // }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
};
</script>