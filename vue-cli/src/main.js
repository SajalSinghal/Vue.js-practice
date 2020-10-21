import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import AppOne from './AppOne.vue'
//import AppTwo from './AppTwo.vue';
import User from './components/User/User.vue'
import Home from './Home.vue'
import ServerInfo from './components/Server/ServerInfo.vue';
import AppThree from './AppThree.vue'
import AppFour from './AppFour.vue'
import AppFive from './AppFive.vue'
import FormApp from './FormApp.vue'
import FormAssignmentApp from './FormAssignmentApp.vue'
import DirectiveApp from './DirectiveApp.vue'
import DirectiveAssignmentApp from './DirectiveAssignmentApp.vue'
import FilterApp from './FilterApp.vue'
import FiltersMixinsAssignmentApp from './FiltersMixinsAssignmentApp.vue'
import TransitionApp from './TransitionApp.vue'
import QuizApp from './QuizApp.vue'
import HttpApp from './HttpApp.vue'
import RouterApp from './RouterApp.vue'
import { routes } from './routes'
import VuexApp from './VuexApp.vue'
import { store } from './store/store'
import StockTraderApp from './components/StockTrader/App.vue'
import { stockTraderRoutes } from './components/StockTrader/routes'
import stockTraderStore from './components/StockTrader/store/store'
import AxiosApp from './components/AxiosModule/App.vue'
import axiosRouter from './components/AxiosModule/router'
import axiosStore from './components/AxiosModule/store'
import axios from 'axios'

/* *******************
 * Vuelidate 
 * **************** */

Vue.use(Vuelidate);

/* ***************************************************************************************************************** 
 * Router in Vue.js 
 * *****************************************************************************************************************/

/*  Extending Vue core functionality to Vue router */

Vue.use(VueRouter);

/* Using ES6 syntax for registering routes Object(Internally it passes like this Routes: Routes) in VueRouter Object */

/* By using mode value history we can easily rid of '#' appended in our urls on the browser address. Basically '#' is
 * used to differentiate that server would not load our index.html file again and again and just load the scripts after
 * hash for routing in a single page application. */

/* To get rid the # from the urls we need to make ensure that our server returns index.html file in all the circumstances
 * (be it 404). In our local application we could see it works here in a development mode because webpack is configured
 * such that it returns the index.html in a development mode. */

const router = new VueRouter({
  routes,
  mode: 'history',                        //by default mode value is hash

  /* Controlling the scroll behaviour */

  /* scrollBehavior is a function which accepts three values to, from and savedPosition. savedPosition is used to go
   *  to the last position which the user was at. */

  scrollBehavior(to, from, savedPosition) {

    /* By going through the savedPosition. It should be at the first place. */
    if (savedPosition) {
      return savedPosition;
    }

    /* By going through hash when id is present in the element or a selector. */
    if (to.hash) {
      return { selector: to.hash };
    }

    /* By going through router at the coordinated location. It should be the last option when no hash or savedPosiion is present*/
    return { x: 0, y: 700 };
  }
})

/* beforeEach function or guard executes whenever routing happens. It is very generic to control some specific routes. */

router.beforeEach((to, from, next) => {
  console.log("beforeEach method");

  /* We can pass three type of parameters in next function; it can be empty means to continue routing the pages, it can be
   * false to abort the routing of the pages, it can be object in the form of path or name like {path: '', name: ''} */

  next();
})


/* ******************************************************************************************************************
 * HTTP in Vue.js 
 * **************************************************************************************************************** */

/* Here we are extending the functionality of Vue core by using VueResource */
/* 'vue-resource' is a plugin for Vue.js which provides services for making web-requests and handle responses using a 
 *  XMLHttpRequest or jSONP. */

Vue.use(VueResource);

/* COnfiguring Vue resource globally */

/* As this is outside Vue instance we don't need to use $http. $http is used inside Vue instance only. Now
here we asssign the root url which is common for all the urls so we don't need to use this url in our Vue instances.
Instead we can replace this url with empty string in a Vue instance. */

//Vue.http.options.root = "https://vuejs-htttp-9aa53.firebaseio.com/";

/* We can set the headers also */
// Vue.http.options.headers = {}

/* interceptors is an array of functions which we can execute on the request. We can intercept request or response
like below and can modify request or response properties. */

// Vue.http.interceptors.push((request, next) => {
//   if (request.method == 'POST') {
//     /* PUT method overwrites the previous data in a database while POST method appends a new data to the existing one
//      * with the unique identifier (for scripting or descripting strings) */

//     request.method = 'PUT'
//   }
//   /* next method ensures that our request gets completed, it should not break in the middle */

//   /* Because of PUT method we are getting objects without unique key attached to it but our code in Vue instance
//    * need to get the response in the form of POST method. So to convert into that format we can use response object 
//    * here in next method */

//   /* response.json() would provide modified response in Vue instance. */
//   next(response => {
//     response.json = () => {
//       return {
//         "message": response.body
//       }
//     }
//   });
// })


/* ********************************************************************************************************************
 * EventBus for siblings components
 * ****************************************************************************************************************** */

/* Formed the event bus which takes care of all the props updation in siblings component without updating in parent
 * component. To avoid the duplication of code in every sibling component from where the event is emitted, we can emit
 * from here inside eventBus. */
/* We can pass the data from eventBus that is centralised to a whole application. Here data is an object not a function. */

export const eventBus = new Vue({
  data: {

  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEditted', age)
    }
  }
});

export const serverBus = new Vue();

/* *********************************************************************************************************************** 
 * Global registration of Home component with selector app-server-status
 * ********************************************************************************************************************* */

Vue.component('app-servers', Home);
Vue.component('server-info', ServerInfo);


/* ********************************************************************************************************************** 
 * Global registration of customised directives 
 * ******************************************************************************************************************** */
/* There are five hooks in the lifecycle of directives i.e. bind, inserted, update, componentUpdated, unbind */

Vue.directive('highlight', {
  bind(el, binding, vnode) {

    /* Here el is native html tag on which style property is used for css */
    //el.style.backgroundColor = 'lightgreen'

    /* if we want to set the background-color manually(i.e. input from the user) then we have to used value present
     * in binding parameter */
    //el.style.backgroundColor = binding.value

    /* If we want to catch the parameter we can get it in the form of binding.arg */

    /* Modifiers is an object present in a binding which has all the modifier name. We can find it with key (modifier name) */

    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      }
      else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

/* ***************************************************************************************************************
 * Global registration of filters 
 * ************************************************************************************************************* */

Vue.filter('to-lowercase',
  function (value) {
    return value.toLowerCase();
  }
)

Vue.filter('count-length',
  function (value) {
    return value + " (" + value.length + ")"
  })


/* ***************************************************************************************************************
 * Global registration of mixins.
 * ************************************************************************************************************* */

/* They are present in every vue instance automatically. Always global mixin is executed every
 * time Vue instance is loaded then local mixins and finally components' properties have a say. This can be seen by printing
 * consoles.
 * Global mixins should be used very cautiously as they may affect the performance due to presence in every Vue instance. */

Vue.mixin({
  created() {
    console.log('Global mixin in main.js');
  }
});


/* ************************************************************************************************************************ */

/* **********************************
 * Stock Trader code or elements
 * ******************************* */

const stockTraderRouter = new VueRouter({
  mode: 'history',
  routes: stockTraderRoutes
})

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

Vue.http.options.root = "https://vuejs-stock-trader-22c01.firebaseio.com/"

/* ************************************************************************************************************************ */

/* *********************************************************
 * Setting a global request configuration for axios calls
 * ******************************************************* */

/* axios constains the default object by which we can set the baseURL, authorisation code, headers ans so on for
 * our all requests in the components. Wherever we are using axios it would set for all those calls by defaults object. */

axios.defaults.baseURL = "https://vue-axios-f2ea1.firebaseio.com"
// axios.defaults.headers.common["Authorisation"] = "sshdsfhsdfkjh"  // set authorisation code for all calls
axios.defaults.headers.get['Accepts'] = "application/json"        // set Accepts header for all the get calls


/* Interceptors are those injected functions through which every request and response goes through. They can also be 
 * said as middleware and must return the response if we want request or response do not block. */

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log("request Interceptor", config);
  return config;
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log("response Interceptor", res)
  return res;
})

/* We can also eject or cancel the intercepting of request or response by getting the intercepted id of req or response. */

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

/* ************************************************************************************************************************ */


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// new Vue({
//   el: "#app",
//   render: h => h(AppOne)
// })

// new Vue({
//   el: "#app",
//   render: h => h(User)
// })

// new Vue({
//   el: "#app",
//   render: h => h(AppThree)
// })

// new Vue({
//   el: "#app",
//   render: h => h(AppFour)
// })

// new Vue({
//   el: "#app",
//   render: h => h(AppFive)
// })

// new Vue({
//   el: "#app",
//   render: h => h(FormApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(FormAssignmentApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(DirectiveApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(DirectiveAssignmentApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(FilterApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(FiltersMixinsAssignmentApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(TransitionApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(QuizApp)
// })

// new Vue({
//   el: "#app",
//   render: h => h(HttpApp)
// })

// new Vue({
//   el: "#app",
//   router,
//   render: h => h(RouterApp)
// })

// new Vue({
//   el: "#app",
//   store,
//   render: h => h(VuexApp)
// })

// new Vue({
//   el: "#app",
//   router: stockTraderRouter,
//   store: stockTraderStore,
//   render: h => h(StockTraderApp)
// })

new Vue({
  el: "#app",
  router: axiosRouter,
  store: axiosStore,
  render: h => h(AxiosApp)
})