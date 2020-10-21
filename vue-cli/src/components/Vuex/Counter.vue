<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increase</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrease</button>
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
    /*  If we want to get rid of duplicated code of commiting our different mutations then we can use mapMutations like
     *  mapGetters. */

    /* Syntax so that we can use our methods along with mutations present */

    //...mapMutations(['increment', 'decrement'])

    /* If we are using actions for committing our mutations then we have to use mapActions instead of mapMutations. */

    ...mapActions(["increment", "decrement"]),

    /* mapActions used to do this internally */

    // increment(by){
    //     this.$store.dispatch('increment', by);
    // }

    // increment() {
    //   //this.$emit("updated", 1);

    //   /* store can be accessed by $store. $ is used as this is not our property, coming from Vue functionality. */
    //   //  this.$store.state.counter++;

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