
import { createSlice } from "@reduxjs/toolkit";
import { offeredBrands } from "../../Api/Api";

const initialState = {
    loading: false,
    brands: [],
    error: '',
}




const BrandsSlice = createSlice({
    name: 'brands',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(offeredBrands.pending, (state) => {
            state.loading = true
        })
        builder.addCase(offeredBrands.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.brands = action.payload
        })
        builder.addCase(offeredBrands.rejected, (state, action) => {
            state.loading = false
            state.brands = []
            state.error = action.error.message
        })
    },
})
export default BrandsSlice.reducer
// export const { addUser } = bannerSlice.actions;