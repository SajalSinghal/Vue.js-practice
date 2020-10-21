import Vue from 'vue'
import Vuex from 'vuex'

/* The module or any file which we are exporting as a default then that file should not be imported with in curly
 * braces in another file but it should be imported in curly braces when we are exporting it as a non-default. */

import counter from './modules/counter'

/* We are importing all our actions, mutations and getters in the object form and using them in a store. */

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

/* Vuex is used to store usually large application data in a store. As because of many components(layers) handling
 * or getting data becomes very difficult or bus gets crowded pretty quickly(if using bus as a global emitter), Vuex
 * is introduced to solve this complications. */

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        /* ********************************** Shifting this code to counter module ********************************** */
        //  counter: 0,

        /* ********************************************************************************************************* */
        value: 0
    },

    getters,
    mutations,
    actions,

    /* ************************************************************************************************************** */

    /* Because of complex calculations in multiple components sometimes data we get from the store doesn't get update so to 
     * avoid this situation we can use getters that get the data from the store. Now we can modify or do our calculations
     * on the data before fetching it in our components. */

    //  getters: {

    /* ********************************** Shifting this code to counter module ********************************** */
    // doubleCounter: state => {
    //     return state.counter * 2;
    // },
    // stringCounter: state => {
    //     return state.counter + ' Clicks';
    // },

    /* ********************************************************************************************************* */

    /* ********************************** Shifting this code to getters.js file ********************************** */

    // value: state => {
    //     return state.value;
    // }

    /* ********************************************************************************************************* */
    //   },

    /* ************************************************************************************************************** */

    /* If we want to change the state in the store for the complex applications then it would create a problem in updating
     * state across our components. So we can use mutations like getters which would update state in a store by centralising 
     * them. */
    //  mutations: {

    /* ********************************** Shifting this code to counter module ********************************** */
    // increment: (state, payload) => {
    //     state.counter += payload;
    // },
    // decrement: (state, payload) => {
    //     state.counter -= payload;
    // },

    /* ********************************************************************************************************** */

    /* ********************************** Shifting this code to mutations.js file ********************************** */

    // updateValue: (state, payload) => {
    //     state.value = payload;
    // }

    /* ********************************************************************************************************** */
    //  },


    /* As mutations don't work efficiently with asychronous events we need to include actions where we can commit out 
     * mutations and then that action can commit our mutation in the store. */

    /* Actions should be used for both asychronous or synchronous events of mutations as we can place all the commits
     * of our mutations in actions at one place. It just saves us from directly committing our mutations in the store. */

    /* ************************************************************************************************************** */

    //  actions: {

    /* Vuex provides context to our component through which we can access commit method for committing mutations.
     * context exactly isn't a store but it provides some functionality like getters. */
    //  increment: context =>{
    //      context.commit('increment');
    //  },

    /* We can directly use commit from context by ES6 syntax. */
    /* Getting payload from mutations in actions */

    /* ********************************** Shifting this code to counter module ********************************** */
    // increment: ({ commit }, payload) => {
    //     commit('increment', payload);
    // },
    // decrement: ({ commit }, payload) => {
    //     commit('decrement', payload);
    // },
    // asyncIncrement: ({ commit }, payload) => {
    //     setTimeout(() => {
    //         commit('increment', payload.by);
    //     }, payload.duration)
    // },
    // asyncDecrement: ({ commit }, payload) => {
    //     setTimeout(() => {
    //         commit('decrement', payload.by);
    //     }, payload.duration)
    // },

    /* ********************************************************************************************************** */

    /* ********************************** Shifting this code to actions.js file ********************************** */
    // updateValue({ commit }, payload) {
    //     commit('updateValue', payload);
    // }

    /* ********************************************************************************************************** */

    //  },

    /* ************************************************************************************************************** */

    /* We can divide the store into multipe modules each related to a state. Each module contains the actions, mutations,
     * getters and state related to a particular property or state. This breaking the store into multiple modules makes
     * the large applications more systematic. */

    /* We use modules for specialised parts of the application like users, blogs etc. If we want to keep some generalised
     * properties of the application into store only then we can centralise their actions in one place, getters in one place
     * and mutations in one place. This will simplify our application structure in terms of vuex. */

    modules: {
        counter
    }

    /* Modules can now be auto-namespaced by using the new namespaced: true option. The getters, actions and mutations
     * inside a namespaced module will automatically be prefixed with a namespaced inferred from the module's registration
     * path. For example: const store = new Vuex.Store({
                                            modules: {
                                                foo: {
                                                    namespaced: true,
                                                    // ...
                                                }
                                            }
                                        })  
     * The foo module will automatically get assigned the namespace foo/. */

});