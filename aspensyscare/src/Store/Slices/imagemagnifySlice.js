
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    images: [],
    error: '',
}

export const magnifying = createAsyncThunk('images/magnifying', async(id) => {
    return await axios
        .post("/magnifying",id)
        .then((response) => response.data)
});

const magnifyingImages = createSlice({
    name: 'images',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(magnifying.pending, (state) => {
            state.loading = true
        })
        builder.addCase(magnifying.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.images = action.payload
        })
        builder.addCase(magnifying.rejected, (state, action) => {
            state.loading = false
            state.images = []
            state.error = action.error.message
        })
    },
})
export default magnifyingImages.reducer

// export const { addUser } = bannerSlice.actions;