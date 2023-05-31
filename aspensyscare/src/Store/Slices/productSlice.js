import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { AllProducts } from "../../Api/Api";

const initialState = {
    loading: false,
    products: [],
    error: '',
}



const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(AllProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(AllProducts.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(AllProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    },
})
export default productSlice.reducer

// export const { addUser } = bannerSlice.actions;