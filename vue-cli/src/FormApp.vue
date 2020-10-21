<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>

            <!-- v-model is a combination of v-bind and v-on internally. So to make our input component we have to used these two
            directives to function the input field properly. Value binds what user has entered in the input field to the state
            and input listens the event's value what user is entering.-->

            <!-- <input type="text" id="email" class="form-control" v-model="userData.email" /> -->
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email=$event.target.value"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy.number="userData.password"
            />

            <!-- Because of two way data binding data would be seen immediately what user has entered. So on every button click
            input event is fired. To stop this input event on every button click we need to use lazy modifier on v-model 
            directive. Always what user enters it is considered as string, to convert string data into number format there is
            another modifier called number on a v-model directive.-->

            <p>password: {{userData.password}}</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model="userData.age" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <!-- We should avoid string interpolation between textarea tags as it creates a problem sometimes.-->
          <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <!-- Here we are using the same model for both the checkboxes. This would add all the selected values of checkboxes in
            an array(model name).-->
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail" /> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <!-- To select only one radio button we have to used the same model so that only one value is bind to the state. -->

          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender" /> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <!-- If we are using the v-model directive then selected used in an option would be overridden with v-model default
          state value-->
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option
              v-for="priority in priorities"
              :key="priority"
              :selected="priority=='Low'"
            >{{priority}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Customised input field component tag namely app-switch holding v-model directive -->
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- prevent modifier is being used here on a click method as we don't want to send a request to a server to 
          handle the form data but we want it with the vue.js.-->

          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
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
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Age:{{userData.age}}</p>
            <!-- To save the line breaks(i.e. save spave between multi lines) we need to include
            css style i.e. style="white-space: pre"-->
            <p style="white-space: pre">Message: {{message}}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="item in sendMail" :key="item">{{item}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Priority: {{selectedPriority}}</p>
            <p>Switched: {{dataSwitch}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./components/Customised/Switch.vue";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 24
      },
      message: "Please enter a message!",
      sendMail: [],
      gender: "Male",
      priorities: ["Low", "Medium", "High"],
      selectedPriority: "Medium",
      dataSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style>
</style>
