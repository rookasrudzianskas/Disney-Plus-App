import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// setting up the redux store
export default configureStore({
    reducer: {},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})
