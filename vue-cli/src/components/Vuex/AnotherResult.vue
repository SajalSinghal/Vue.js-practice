<template>
  <div>
    <p>Result is {{doubleCounter}}</p>
    <p>Number of clicks {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../../store/types";
export default {
  //props: ["counter"],

  computed:
    /* If there are multiple getters to use here then it makes our code repeated or duplicated, so to import the getters we
     * can use mapGetters which vuex provides. */

    // counter() {
    //   //return this.$store.state.counter*2;

    //   /* Getting the data from the getters */
    //   return this.$store.getters.doubleCounter;
    // },
    // clicks() {
    //   return this.$store.getters.stringCounter;
    // }

    /* mapGetters is also an object which used to fetch all the getters in it. But if we want to use our own property in
     * computed method then we need to find a different solution. As computed and mapGetters are both the Objects, Object inside
     * Object is not valid so We can use spread operator of ES6 and tell the javascript that fetch all the getters from the
     * store and place it in computed property in key-value form.  */

    // mapGetters(["doubleCounter", "stringCounter"])

    {
      /* We can also pass an object and map the Getters to different names */

      ...mapGetters({
        doubleCounter: types.DOUBLE_COUNTER,
        stringCounter: types.CLICK_COUNTER
      })
      // our own computed property
    }
};
</script>