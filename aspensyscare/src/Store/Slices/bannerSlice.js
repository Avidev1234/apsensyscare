import {  createSlice } from "@reduxjs/toolkit";
import { fetchBanner } from "../../Api/Api";

const initialState = {
    loading: false,
    banner: [],
    error: '',
}



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