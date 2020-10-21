import Home from './components/Router/Home.vue'
//import User from './components/Router/user/User.vue'
// import UserStart from './components/Router/user/UserStart.vue'
// import UserDetail from './components/Router/user/UserDetail.vue'
// import UserEdit from './components/Router/user/UserEdit.vue'
import Header from './components/Router/Header.vue'

/* ****************************************** LOADING ROUTES LAZILY *********************************************** */

/* If we want to load the routes lazily then we need to import them lazily. This can be achieved by different syntax 
 * of importing the components. */

/* This following syntax will make separate build file(can be seen in network tab in the browser when comoponent loads
 * for the first time). Every route will be loaded in separate build file. But if we want to combine them in a same bundle
 * but different from the common bundle then we need to include third parameter which should be same for all the lazy 
 * required route imports in ensure method. */

const User = resolve => {
    require.ensure(['./components/Router/user/User.vue'], () => {
        resolve(require('./components/Router/user/User.vue'))
    }, 'user')
}

const UserStart = resolve => {
    require.ensure(['./components/Router/user/UserStart.vue'], () => {
        resolve(require('./components/Router/user/UserStart.vue'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/Router/user/UserDetail.vue'], () => {
        resolve(require('./components/Router/user/UserDetail.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/Router/user/UserEdit.vue'], () => {
        resolve(require('./components/Router/user/UserEdit.vue'))
    }, 'user')
}

/* ***************************************************************************************************************** */

/* Forming the routes array which contains the objects of path and the component to display */

/* We can pass the props in the routes 
 * As of vue-router version 2.2, you can also bind your route params to props of the target components. This eliminates 
 * the need of watching $route. There are three ways of using this feature, You can basically either pass a static value, 
 * bind a dynamic value to props or use a function to also convert your dynamic value. */

/* If we just pass props: true in routes object then in routed component, we can get route.params in the form of props */

export const routes = [

    /* For mulitple router-views we need to pass components in route object */

    {
        path: '',
        //component: Home,
        name: 'home',
        components: {
            /* default is a component we can see along with Header */

            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user',
        //component: User,
        components: {
            default: User,
            'header-bottom': Header
        },
        //props: { name: 'Sajal' }, 
        children: [
            { path: '', component: UserStart },
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    /* Here beforeEnter is a guard which is used at the page level or a component level. It just guards 
                     * the user from reaching this route */

                    console.log("beforeEnter in routes");
                    next();
                }
            },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    /* If we want to redirect the user to some specific page in case of some entered path then we can use redirect property. 
     * It should be used in the last as pages wih exact path should come first. */

    {
        path: '/redirect-me',
        redirect: '/user'
    },
    /* The routes which are not present in our application should be handled by wild cards or by setting up
     * "Catch All" routes. */
    {
        /* Our '*' route catches all the random entered routes */

        path: '*',
        redirect: '/'
    }
]

/* For nested routes we need to include children property in a parent route(user) object */