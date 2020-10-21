import Vue from 'vue'
import Vuex from 'vuex'

/* importing our custom axios instance so that we can authorise all the requests for sign-up  */
import axios from "./axios-auth";

import globalAxios from 'axios';
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    /* The token we are storing is not just a string. It's basically an encoded javascript object and therefore also  
     * called JSON Web Token(JWT) */
    idToken: null,    // initially JSON Web Token(JWT) is null
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    // Auto logout functionality once authToken get expires
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData');     // or alternatively we can dispatch logout action as dispatch('logout')
      }, expirationTime * 1000)
    },
    signup({ commit, dispatch }, authData) {

      /* Axios is an alternative to vue-resource for the calls. It provides some great features like global request
       * configuration, custom axios instances, intercepting and ejecting the axios calls etc and is more popular.
       * Calling post call through axios library and saving user sign-up data in a firebase database. Axios
       * used to stringify the data automatically in a post call before sending it in the database. */

      axios
        .post("accounts:signUp?key=AIzaSyARMGsLFOVQH5s8Qr55Xuq74rKEGidfs1o", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response);
          commit('authUser', { token: response.data.idToken, userId: response.data.localId });

          const now = new Date();
          /* Forming the date by addition of expirationTime(in seconds) and current time */
          const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);

          /* Setting the token, userId and expirationDate in localStorage so that data doesn't get destroyed when user
           * refreshes the page. */
          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', response.data.localId)

          dispatch('storeUser', authData);
          dispatch('setLogoutTimer', response.data.expiresIn);
        })
        .catch(error => console.log(error));
    },
    login({ commit, dispatch }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyARMGsLFOVQH5s8Qr55Xuq74rKEGidfs1o",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(response => {
          console.log(response);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);

          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', response.data.localId)

          commit('authUser', { token: response.data.idToken, userId: response.data.localId });
          dispatch('setLogoutTimer', response.data.expiresIn)
        })
        .catch(error => console.log(error));
    },

    /* creating autoLogin method for not logging out when user refreshes the page */
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return;   // if token not there in localStorage simply return null i.e no auto login
      }
      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if (now >= expirationDate) {
        return;   // if current time exceeds the expiration time(or date) then simply no auto login
      }
      const userId = localStorage.getItem('userId');

      /* committing to the authUser mutation so that after refreshing the page token and userId sets again in the store. */
      commit('authUser', { token: token, userId: userId })
    },
    logout({ commit }) {
      commit('clearAuthData');

      /* Clearing the local storage items (which we set after signing up or signing in) after getting logged out. */
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('userId')
      router.replace('/signin');   // redirecting to signin page after logging out 
    },
    fetchUser({ commit, state }) {

      if (!state.idToken) {
        return;
      }
      /* Getting the data of the user from the firebase database through get call in the action. */

      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)   // passing autorisation code in query parameters
        .then(response => {
          console.log(response);
          const data = response.data;
          const users = [];

          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log("users:::::>", users);
          commit('storeUser', users[users.length - 1]);
        })
        .catch(error => console.log(error));
    },
    storeUser({ commit, state }, userData) {

      if (!state.idToken) {
        return;
      }
      /* storing the data of the signed up user in the firebase database after authenticating in signup action */
      globalAxios.post("/users.json" + "?auth=" + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }

})