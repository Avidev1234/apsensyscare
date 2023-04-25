import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    sizes: [],
    error: '',
}

export const fatchSizes = createAsyncThunk('size/sizedetails', async() => {
    return await axios
        .post("/size")
        .then((response) => response.data)
});

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