<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <hr />
        <div class="form-group">
          <label for="name">Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" class="form-control" v-model="node" />
        <br />
        <button class="btn btn-primary" @click="retrieve">Retrieve</button>
        <br />
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, index) in users"
            :key="index"
          >{{u.username}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    submit() {
      /* sending data to firebase database */
      //   this.$http
      //     .post("", this.user)
      //     .then(
      //       response => {
      //         console.log("response", response);
      //       },
      //       error => {
      //         console.log("error", error);
      //       }
      //     );

      /* save is a action for POST method */

      //this.resource.save({}, this.user);

      this.resource.saveAlt(this.user);
    },
    retrieve() {
      /* Getting data from the server or firebase database */

      //   this.$http
      //     .get("")
      //     .then(response => {
      //       /* We cannot directly print the data as it is a asynchronous process. Although it provides the promise but
      //        * to get the data actually we need return response in json form from here. */

      //       return response.json();
      //     })
      //     /* Using .then function would provide the data really */

      //     .then(data => {
      //       /* Converting data object into Array */

      //       const objArray = [];
      //       for (let key in data) {
      //         objArray.push(data[key]);
      //       }
      //       this.users = objArray;
      //     });

      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })

        .then(data => {
          const objArray = [];
          for (let key in data) {
            objArray.push(data[key]);
          }
          this.users = objArray;
        });
    }
  },
  created() {
    /*   $resource is coming from the core of Vue.js. Moreover it's not only provides http related functionalities but also
     *   provides functionality of making our resources. Resources are alternatives of normal http requests. */

    /* Creation of resource should happen in created lifecycle hook of Vue instance */

    /* Creating object of our own custom actions */
    const customActions = {
      saveAlt: {
        method: "POST",
        url: "alternative.json"
      },
      getData: {
        method: "GET"
      }
    };

    /* Making template url dynamic */
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>