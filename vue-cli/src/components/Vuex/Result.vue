<template>
  <p>Result is {{counter}}</p>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../../store/types'
export default {
  //props: ["counter"],

  computed: {
   // counter() {
     // return this.$store.state.counter*2;

    /* getting the data from the getters */

   // return this.$store.getters.doubleCounter;

   ...mapGetters({
       counter: types.DOUBLE_COUNTER
   })
    
    //}
  }
};
</script>