/* Animations are used so that user can know and understand your application easily. Transition 
 * is attaching or deattaching elements from the DOM. Thus Animation is appearance or disappearance of the element
 * from the DOM. We can't use multiple elements in transition wrapper tag. If we want to use then there should 
 * be some toggle condition to show only one element. */

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Transitions</h1>
        <hr />
        <select class="form-control" v-model="alertAnimation">
          <option value="fade" default>Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <button class="btn btn-primary" @click="show = !show">Click</button>
        <br />
        <br />

        <!-- We can show the animation or transition with v-show also -->
        <!-- We can bind classes and type also in transition tag by using : -->

        <transition :name="alertAnimation">
          <div class="alert alert-info" v-show="show">This is some info!</div>
          <!-- <div>I am second div in transition group</div> -->
        </transition>

        <!-- Because of mixing animations and transitions We can denote or pass the type in the transition element
        so that animation overrides the transition or vice-versa. Type can be of two i.e. animation and transition-->

        <transition :name="alertAnimation" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is some info!</div>
          <!-- <div>I am second div in transition group</div> -->
        </transition>

        <!-- If we want a animation on page load in parity with emitting events. 
        We can also animate the initial attachment to the dom by including appear property inside transition tag-->

        <!-- To add the different classes(apart from default) from the css animate library we need to use explicitly
        enter-class, enter-active-class, leave-class, leave-active-class in the transition tag directly. We need to remove
        the name property of transition to work our explicitly mentioned classes-->

        <!-- We need to use 'appear' in the transition tag as we want to see styles smoothly explicitly on page load. -->

        <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">This is some info!</div>
          <!-- <div>I am second div in transition group</div> -->
        </transition>

        <!-- For the transitioning of multiple elemnents we have to use key and mode. -->
        <!-- For multiple elements, transition or animations do not work because Vue.js considers them a same element. 
        To make the element unique we must include unique key in each element.
        If we want new element animation to start after old element animation gets completed then we need to use mode
        'out-in'; 'in-out' for vice-versa'-->

        <transition :name="alertAnimation" appear mode="out-in">
          <div class="alert alert-info" v-if="show">This is some info!</div>
          <div class="alert alert-warning" v-else>This is some warning!!</div>
        </transition>

        <hr />
        <p>Javascript related animations and its transition hooks</p>
        <br />
        <button class="btn btn-primary" @click="load = !load">Load / Remove element</button>
        <br />
        <br />

        <!-- These below mentioned are lifecycle hooks of animation when animated element is controlled by javascript.
        Names specify the meaning of each hook. enter-cancelled and leave-cancelled hooks are not called in the normal
        functioning of the animation.-->

        <!-- Vue.js checks for the css if we used it explicitly. if used, it considers the classes along with javascript transition
        css hooks. Therefore we can insert css property to denote if it present or not for the element. :css="false" signifies
        Vue.js has not considered external css classes(enter, enter-active, so on) instead it immediately executes
        transition hooks-->

        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
        </transition>

        <!-- Transition of dynamic components -->
        <hr />
        <button
          class="btn btn-primary"
          @click="selectedComponent = selectedComponent == 'app-success-alert' ? 'app-danger-alert' : 'app-success-alert'"
        >Change Alert</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>

        <hr />
        <button class="btn btn-primary" @click="addItem">Add item</button>
        <br />
        <br />

        <!-- transition-group is used to animate multiple elements(in a list)
          One important difference between transition and transition-group:
          <transition> is not rendered to the dom, <transition-group> does render a new html tag. By default there will be
        a <span>, you can overwrite this by setting <transition-group tag="TAG">.-->

        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              style="cursor: pointer"
              v-for="(number, index) in numbers"
              :key="index"
              @click="removeItem(index)"
            >{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./components/Alerts/DangerAlert.vue";
import SuccessAlert from "./components/Alerts/SuccessAlert.vue";
export default {
  data() {
    return {
      show: false,
      load: true,
      initialWidth: 100,
      numbers: [1, 2, 3, 4, 5],
      alertAnimation: "fade",
      selectedComponent: "app-success-alert"
    };
  },
  methods: {
    /* el is a parameter of all the functions which says about the animation present on a element */
    beforeEnter(el) {
      this.initialWidth = 100;
      el.style.width = this.initialWidth + "px";
      console.log("beforeEnter");
    },
    enter(el, done) {
      console.log("enter");
      /*  We must call done method in order to indicate js animmation has been completed. If we are using these hooks with
       *  css animations then no need to use done() as Vue.js would automatically determine the animation completion */

      let turn = 1;
      const interval = setInterval(() => {
        el.style.width = this.initialWidth + turn * 10 + "px";
        turn++;
        if (turn > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);

      //done();
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled() {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.initialWidth = 300;
      el.style.width = this.initialWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let turn = 1;
      const interval = setInterval(() => {
        el.style.width = this.initialWidth - turn * 10 + "px";
        turn++;
        if (turn > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      //done();
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style>
/* Vue.js will insert these four css classes into the dom as we used the name of transition as a fade */

/* This fade-enter will run only for 1st frame and then class will get disappeared */
.fade-enter {
  opacity: 0;
}

/* This fade-enter-active class will execute when the element is coming into the dom */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity : 1; */
}

/* This fade-leave-active class will execute when element is getting removed from the dom */
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* Alternative way of transitioning the element is using css animation */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>