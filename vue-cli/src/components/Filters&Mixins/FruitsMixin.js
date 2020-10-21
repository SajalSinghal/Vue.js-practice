/* It is a local mixin which can be used anywhere or in multiple components */

/* As mixins also contains data and computed property here along with in the component's. Vue.js will merge or override
 * mixins properties and merge it with component's property. First mixins properties would execute and then components'
 * properties would excute */

/* Vue.js will share new mixin every time on creation of new Vue instance. If we are manipulating data property from within
 * some component then it would not affect or change data property for same mixin used in other component. So mixins 
 * scope is just related to a component.  */

export const fruitsMixin = {
	data() {
		return {
			fruits: ["Apple", "Banana", "Mango", "Orange"],
			filteredtext: ""
		};
	},
	computed: {
		filteredfruits() {
			return this.fruits.filter(element => {
				return element.match(this.filteredtext);
			});
		}
	},
	/* We can see the sequence of the properties executed among mixins and component by seeing which consoles
	 * are printed first. Final say is of component. */

	created() {
		console.log('fruitsMixin created hook');
	}
}