/* If we need to pass the props then we need to bind it before passing otherwise it would be assumed as a constant.
 * We can't pass like this index="index"  */

 
/* :index="index" */

<template>
  <div class="container">
    <server-status-heading></server-status-heading>
    <hr />
    <div class="row">
      <server-status-list></server-status-list>
      <server-details></server-details>
    </div>
    <hr />
    <server-status-footer></server-status-footer>
  </div>
</template>

<script>
import ServerStatusHeading from "./components/Shared/ServerStatusHeading.vue";
import ServerStatusList from "./components/Server/ServerStatusList.vue";
import ServerStatusFooter from "./components/Shared/ServerStatusFooter.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
export default {
  /* data: function(){
    return{
      index: {
        number: 0
      }
    }
  }, */
  components: {
    /* It is more common to use selectors separated by dash as it resembles the html tags. Moreover we can use camel-case
     * tags also without any problem. Selectors used in any form are case-insensitive.
     * Moreover we can define a selector separated by dash and use that in camel-case tags in the template.   */

    "server-status-heading": ServerStatusHeading,
    "server-status-list": ServerStatusList,
    "server-status-footer": ServerStatusFooter,
    "server-details": ServerDetails
  }
};
</script>

<style>
</style>

