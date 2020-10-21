<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <h1>Sign up Form</h1>
          <hr />

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->

          <app-full-name v-model="userData.fullName"></app-full-name>

          <div class="form-group">
            <label for="mail">Mail</label>
            <input type="text" class="form-control" id="mail" v-model="userData.mail" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" id="password" v-model="userData.password" />
          </div>
          <div class="form-group">
            <label>Store Data?</label>
            <label>
              <input type="radio" value="Yes" id="yes" v-model="userData.storeData" />Yes
            </label>
            <label>
              <input type="radio" value="No" id="no" v-model="userData.storeData" />No
            </label>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <button class="btn btn-primary" @click.prevent="submitted">Submit</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{userData.fullName}}</p>
            <p>Mail: {{userData.mail}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{userData.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./components/Customised/FullName.vue";
export default {
  data() {
    return {
      userData: {
        fullName: 'Sajal Singhal',
        mail: '',
        password: '',
        storeData: 'No'
      },
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
