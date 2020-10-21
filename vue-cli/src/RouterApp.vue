<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr />

        <!-- <app-header></app-header> -->

        <!-- If we want multiple router views or you can say we want to see app-header component's different position in 
        different components then we need to pass name in router-view tag-->

        <router-view name="header-top"></router-view>

        <!-- We use router-view component or tag to route the part of a single page application  -->

        <!-- Animating route transitions -->
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <br />

        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Router/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-active {
  opacity: 0;
  transition: opacity 1s ease;
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
</style>
