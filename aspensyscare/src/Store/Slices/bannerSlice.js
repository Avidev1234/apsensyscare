import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    banner: [],
    error: '',
}

export const fetchBanner = createAsyncThunk('banner/fetchbanner', async() => {
    return await axios
        .post("/fatch_baner")
        .then((response) => response.data)
});

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBanner.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBanner.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.banner = action.payload
        })
        builder.addCase(fetchBanner.rejected, (state, action) => {
            state.loading = false
            state.banner = []
            state.error = action.error.message
        })
    },
})
export default bannerSlice.reducer
// export const { addUser } = bannerSlice.actions;