import { createSlice } from "@reduxjs/toolkit";

// for the user
// for the user, everything is empty at start
const initialState = {
    name: '',
    email: '',
    photo: '',
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // then the user logs in, remember all the stuff from that object and store in the data layer
        setUserLoginDetails: (state, action) => {
            // sets all the needed data into the state of the user
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
     //log out delete everything
     setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});


export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// we get an access to name, email and photo in any other file in this project
export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state) => state.user.email
export const selectUserPhoto = (state) => state.user.photo


export default userSlice.reducer;
