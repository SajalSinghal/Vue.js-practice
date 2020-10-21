/* slot tag is used to get the html data or content (bind between the tags of the component) from the parent
 * component and render it in a child component */

/* If we want to distribute slots in a child component then we have to give name to each slot as a attribute in slot tag */


/* If we are not passing name of a slot in slot tag then it is considered as default slot and it would render all the 
 * html tags from the parent component without slot attribute. */

 /* We cannot write the css styles in slot tag. */

 /* If we want to override the slot tag then we need to pass some name which is not present in a parent component along with 
  * the overridden content placed between the slots tag. We can't simply override the slots tag by passing text between slots
  * tag */
<template>
  <div>
    <div class="heading">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subtitle">The Subtitle</slot>
      </span>
    </div>
    <hr />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {}
};
</script>

<style scoped>
div {
  margin: 30px auto;
  text-align: center;
  box-shadow: 1px 1px 2px black;
  border: 1px solid #ccc;
  padding: 30px;
}
/* Styling applies only in the child component while everything else in parent. This styling if put in parent component
i.e. AppThree doesn't apply. */
/* h2 {
  color: red;
} */
.heading {
  font-style: italic;
}
</style>
