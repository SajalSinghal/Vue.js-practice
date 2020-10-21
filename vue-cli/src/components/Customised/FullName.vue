<template>
  <div class="form-group">
    <!-- <div>
      <label for="fullname">Full Name</label>
    </div>-->
    <label for="firstname">First Name</label>
    <input
      type="text"
      id="firstname"
      class="form-control"
      :value="firstName"
      @input="nameChanged(true, $event)"
    />
    <label for="lastname">Last Name</label>
    <input
      type="text"
      id="lastname"
      class="form-control"
      :value="lastName"
      @input="nameChanged(false, $event)"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirstName, event) {
      let name = "";
      if (isFirstName) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value);
    }
  },
  computed: {
    /*  As we would be getting full name from the parent component but we need to differentiate which is the first name and
     *  last name. So we have to split the array with the space and get the values separately. These methods would be called
     *  when the binding of the value attribute is done in the input field */
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style>
</style>