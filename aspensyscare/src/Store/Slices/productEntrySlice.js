import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    productdetails: [],
    error: '',
}

export const productData = createAsyncThunk('product/productdetails', async(id) => {
    return await axios
        .post("/productdetails",id)
        .then((response) => response.data)
});

const detailsSlice = createSlice({
    name: 'productdetails',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(productData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(productData.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.productdetails = action.payload
        })
        builder.addCase(productData.rejected, (state, action) => {
            state.loading = false
            state.productdetails = []
            state.error = action.error.message
        })
    },
})
export default detailsSlice.reducer
// export const { addUser } = userSlice.actions;