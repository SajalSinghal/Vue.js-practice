<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->

        <hr />
        <p>{{randomText | reverseText}}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <p>{{'Random' | count-length}}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr />
        <p>Exercise 1 & 2 with computed properties</p>
        <p>{{reverseTextComputed}}</p>
        <p>{{countLengthComputed}}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <hr />
        <p>Exercise 2 with mixin</p>
        <p>{{countLength}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { countLengthMixin } from "./components/Filters&Mixins/CountLengthMixin";
export default {
  data() {
    return {
      randomText: "Some Random Text"
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseTextComputed() {
      return this.randomText
        .split("")
        .reverse()
        .join("");
    },
    countLengthComputed() {
      return "Random" + " (" + "Random".length + ")";
    }
  },
  mixins: [countLengthMixin]
};
</script>

<style>
</style>
