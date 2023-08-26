import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getJokeByQuery } from "./JokeRequest";
import { IJoke, IState } from "../../models/types";

const initialState: IState = {
    jokes: [],
    isLoading: false,
    error: ""
};

export const jokeSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getJokeByQuery.fulfilled, (state, action: PayloadAction<IJoke[]>) => {
            state.jokes = action.payload
            state.isLoading = false
            state.error = ""
        })
            .addCase(getJokeByQuery.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getJokeByQuery.rejected, (state) => {
                state.isLoading = false
                state.error = "Возникла ошибка при получении данных, попробуйте еще раз!"
            })
    }
});

export default jokeSlice.reducer
