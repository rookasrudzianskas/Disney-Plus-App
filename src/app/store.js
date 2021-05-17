import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// setting up the redux store
// initializes the data layer
export default configureStore({
    reducer: {},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

