import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// setting up the redux store
// initializes the data layer
export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

