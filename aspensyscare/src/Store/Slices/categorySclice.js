import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    category: [],
    error: '',
}

export const fetchCategory = createAsyncThunk('category/fetchCategory', async() => {
    return await axios
        .post("/backend_api/fatch_category")
        .then((response) => response.data)
});

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