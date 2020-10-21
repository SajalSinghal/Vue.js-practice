/* When our application becomes very large we may end up with same action, mutation or getter name but these names
 * should be unique as these all actions, mutations and getters finally merge into one file or an object in the store.
 * This type file contains all the actions, mutations and getters type as a Global constant which we use to identify
 * our unique things. */

//GETTTERS
export const DOUBLE_COUNTER = 'COUNTER/DOUBLE_COUNTER';
export const CLICK_COUNTER = 'COUNTER/CLICK_COUNTER';
