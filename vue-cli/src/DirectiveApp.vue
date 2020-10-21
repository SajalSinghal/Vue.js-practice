/* Directives allow you to directly manipulate parts of the DOM or control parts of it */
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-sm-8 col-md-6 col-sm-offset-2 col-sm-offset-3">
        <h1>Some Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some Strong text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-sm-8 col-md-6 col-sm-offset-2 col-sm-offset-3">
        <h1>Some Customised Directives</h1>

        <!-- We have to pass a string value in the v-highlight directive as it finally sets the backgroundColor css property -->
        <!-- If we want to pass some argument for some logic building in a directive then we can pass parameter like this
        directive:parameter-->

        <!-- If we want to implement modifiers on the directive then we can create our own modifiers by using
        .(dot) modifer name. Multiple modifiers can be used by chaining .modifier-->

        <p v-highlight:background.delayed="'lightcoral'">Color this!</p>

        <!-- Using multiple modifiers -->
        <p
          v-local-highlight:background.delayed.blink="{mainColor: 'red', otherColor: 'green', delay: 500}"
        >Color this too!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* If we want to register the directives locally then we have to define them in directives property like for locally
   * defined components. selector or diredtive name has the object containing the hooks of its lifecycle. */

  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let otherColor = binding.value.otherColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor =
                currentColor == otherColor ? mainColor : otherColor;
              //   currentColor == otherColor
              //     ? (currentColor = mainColor)
              //     : (currentColor = otherColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>