import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../Api/Api";

const initialState = {
    loading: false,
    productdetails: [],
    error: '',
}

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