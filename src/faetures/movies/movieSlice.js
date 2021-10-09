import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../common/api/movieApi"


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "batman"
    const response = await movieApi.get(`/search/shows?q=${movieText}`)

    return response.data;
})

export const fetchAsyncMoviesDetail = createAsyncThunk('movies/fetchAsyncMoviesDetail', async (id) => {
    const response = await movieApi.get(`/shows/${id}`)

    return response.data;
})

const initialState = {
    movies: [],
    selectMovie:{}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;

        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetched succsess")
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
        },
        [fetchAsyncMoviesDetail.fulfilled]: (state, { payload }) => {
            console.log("fetched detail succsess")
            return { ...state, selectMovie: payload };
        },



    },

});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getSelectedMovie = (state) => state.movies.selectMovie

export default movieSlice.reducer;