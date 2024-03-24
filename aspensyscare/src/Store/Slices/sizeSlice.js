import {  createSlice } from "@reduxjs/toolkit";
import { fatchSizes } from "../../Api/Api";

const initialState = {
    loading: false,
    sizes: [],
    error: '',
}

const sizeSlice = createSlice({
    name: 'productdetails',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fatchSizes.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fatchSizes.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.sizes = action.payload
        })
        builder.addCase(fatchSizes.rejected, (state, action) => {
            state.loading = false
            state.sizes = []
            state.error = action.error.message
        })
    },
})
export default sizeSlice.reducer
// export const { addUser } = userSlice.actions;