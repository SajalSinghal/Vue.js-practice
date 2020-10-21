<template>
  <div>
      <!-- We need to pass the object only if there are multiple parameters to pass in the mutation  -->

    <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increase</button>
    <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrease</button>
  </div>
</template>

<script>
//import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    // ...mapMutations(["increment", "decrement"])

    /* If we are using actions for committing our mutations then we have to use mapActions instead of mapMutations. */

    ...mapActions(["asyncIncrement", "asyncDecrement"])

    // increment() {
    //   //this.$emit("updated", 1);

    //   /* store can be accessed by $store. $ is used as this is not our property, coming from Vue functionality. */

    //   //this.$store.state.counter++;

    //   /* If we are using mutations for setting data in a store then we have to commit our mutation as a string.
    //    * Vue.js searches for the same method which we pass as a string. */

    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   //this.$emit("updated", -1);

    //   //this.$store.state.counter--;

    //   this.$store.commit("decrement");
    // }
  }
};
</script>