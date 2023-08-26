import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponse } from "../../models/types";

export const getJokeByQuery = createAsyncThunk("joke/fetchJokes", async (query: string) => {
    const response: IResponse = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then(res => res.json())

    return response.result.filter((item) => item.value.length <= 200).sort((a, b) => b.value.length - a.value.length).slice(0, 15)
});
