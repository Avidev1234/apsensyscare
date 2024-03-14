import {  createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "../../Api/Api";

const initialState = {
    loading: false,
    category: [],
    error: '',
}



const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.category = action.payload
        })
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false
            state.category = []
            state.error = action.error.message
        })
    },
})
export default categorySlice.reducer
// export const { addUser } = bannerSlice.actions;