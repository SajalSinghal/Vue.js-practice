/* It is not recommended to pass static content(quote="A beautiful Quote!") inside props. Better we can pass html as the props. */
/* We can pass the data of the form of string interpolation from the parent component to child component only. Parent 
 * component is responsible for the compilation of the passed code. */

/* The compilation information still is correct but regarding the styling, the behavior changed: You can now style
 * the content you pass into a slot from inside the parent component.

 * When adding the h1  style to the parent component in the last video, you will now get red text in your final output.
 * This is indeed pretty useful, since it allows you to write wrapper components which only provide a certain frame but 
 * don't interfere with the styling of the data/ content you pass into them. */

/* For a particulat slot to be rendered in a child component we have to pass slot name in slot attribute in html tags.
 * Although slot is not a attribute or a property of a html tag so it is taken care by Vue.  */

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'app-author'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr />
        <p>{{selectedComponent}}</p>
        <!-- <app-quote>
          <h2 slot="title" style="color: red">{{quote}}</h2>
          <p>A beautiful Quote!</p>
        </app-quote>-->
        <keep-alive>
          <component :is="selectedComponent">Default component</component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

/* For dynamic components we have to use component tag (component keyword is reserved) and bind 'is' property to the 
 * string which holds the component tag  */

 /* The component is getting destroyed every time when we are changing with a button. This can be verified either by counting 
  * a counter in a component or by logging in a destroyed method. */

  /* In order to let the components alive we need to bind the dynamic component inside 'keep-alive' tags. it is a
   * reserved keyword or component. Now destroyed method would not be called in its lifecycle. */

   /* For 'keep-alive' components there is no destroyed method but there are two different methods which are activated
    * and deactivated. Activated method would be called when we are approaching the alive component and deactivated method
    * would be called when we are going away from the alive component. These methods would be called again and again 
    * when we are propagating to and fro of the alive component. */

<script>
import Quote from "./components/Quotes/Quote.vue";
import Author from "./components/Quotes/Author.vue";
import New from "./components/Quotes/New.vue";
export default {
  data: function() {
    return {
      quote: "The quote",
      selectedComponent: "app-quote"
    };
  },
  components: {
    "app-quote": Quote,
    "app-author": Author,
    "app-new": New
  }
};
</script>

<style scoped>
</style>
