import { configureStore } from "@reduxjs/toolkit"
import userReducer from './reducers/index';
//from this file we are managing the store
export default configureStore({
    reducer: {
        checker : userReducer,
    }
}, window._REDUX_DEVTOOLS_EXTENSIONS && window._REDUX_DEVTOOLS_EXTENSIONS())

