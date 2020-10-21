<template>
  <div class="component">
    <h1>You may view the user details there</h1>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
    <p>User Age: {{userAge}}</p>
    <button @click="resetName">Reset name</button>
    <button @click="resetfn">Reset from parent</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  /* We can catch the props from parent component in props object in constructor. Props is an array of properties like
   * props: ["index", and so on].
   * If we need to validate the props we can check its type also along with it is required or not for this component.
   * Moreover we can assign its default value also incase it is not required.
   * If the props are of multi type then we can pass in a array form like this: index: [Number, String].
   * If it is single type then we can pass it directly like this- index: Number
   * If the props type is an Object and default value is also present then default must be a function returning the
   * default props.
   * moreover if we are using props in a methods we can simply access them with the help of this keyword. */
  /* 
     props: {
        index: Object 
        or
        index:   {
            type: Object,
            default: function(){
                return {
                    index:{
                        number: 1
                    }
                }
            },
            required: true
        }
    } 
     */
  props: {
    name: String,
    resetfn: Function,
    userAge: Number
  },
  methods: {
    switchName: function() {
      return this.name
        .split(" ")
        .reverse()
        .join(" ");
    },
    resetName: function() {
      this.name = "Sajal Singhal";
      /* If we are updating props in child component and if we need to update the same props in parent component also then
       * we have to emit an event from child component with the help of $emit which accepts first argument as event name and
       * second argument is the props that we need to update.   */
      this.$emit("nameWasReset", this.name);
    }
  },
  /* Here we are listening the event by $on from the starting of the vue instance(component) creation so that event gets update
   * immediately. Second argument of $on is to pass the data which would be passed from other siblings component.   */
  created() {
    eventBus.$on("ageWasEditted", age => (this.userAge = age));
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>