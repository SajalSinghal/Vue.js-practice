<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I am an awesome user</p>
    <button @click="changeName">Change my name</button>
    <p>name is: {{name}}</p>
    <p>age is: {{age}}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- Emitted event from child component need to be listened by the event name with the passing of props 
        name = $event so that parent can accept it as an event. Now props will get update in both child and parent
        components simultaneously.-->

        <!-- This is an alternative way of passing props from parent to child which is through callback function -->
        <!-- We can pass a function from parent to child that would update the props in both child and parent components. -->

        <user-detail :name="name" @nameWasReset="name=$event" :resetfn="resetName" :userAge="age"></user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <user-edit :userAge="age" @ageWasEditted="age=$event"></user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Sajal",
      age: 23
    };
  },
  components: {
    "user-detail": UserDetail,
    "user-edit": UserEdit
  },
  props: {},
  methods: {
    changeName: function() {
      return (this.name = "Sajal Singhal & TCS");
    },
    resetName: function() {
      this.name = "Name changed from parent component";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>