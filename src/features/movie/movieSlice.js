import { createSlice } from "@reduxjs/toolkit";

// for the user
// for the user, everything is empty at start
const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },

});


export const { setMovies } = movieSlice.actions;

// we get an access to name, email and photo in any other file in this project
export const selectRecommend = (state) => state.movie.recommend
export const selectTrending = (state) => state.movie.trending
export const selectNewDisney = (state) => state.movie.newDisney
export const selectOriginal = (state) => state.movie.original


export default movieSlice.reducer;
