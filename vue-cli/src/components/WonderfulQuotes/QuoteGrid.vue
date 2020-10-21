/* @click.native is being used here as @click event cannot be performed on the 'app-quote' tag so .native modifier is 
 * used to run the click method on the inside html native element. */

<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">{{quote}}</app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style>
</style>

