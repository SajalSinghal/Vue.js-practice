/* ********************** 
 * Custom axios instance 
 * ******************* */

/* Custom axios instances are used when we don't want axios sets the defaults at the global level but we want different
 * defaults for different parts(or modules) of the application. */

import axios from 'axios'

const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/"
})

// setting the headers for our custom axios instance
// instance.defaults.headers.common["SOMETHING"] = 'something'

export default instance;