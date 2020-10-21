<template>
  <div class="component">
    <h1>You mayedit the user here</h1>
    <p>edit me!</p>
    <p>User age: {{userAge}}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data: function() {
    return {};
  },
  props: {
    userAge: Number
  },
  methods: {
    editAge: function() {
      this.userAge = 25;
      //	this.$emit('ageWasEditted', this.userAge);

      /* Here eventBus is not an instance of UserEdit component. We are emitting a event so that it can be listened in a
       * siblings component.  */
		 // eventBus.$emit("ageWasEditted", this.userAge);

		 /* We can directly call the method from main.js also where it is emitting the method. */
		 eventBus.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>