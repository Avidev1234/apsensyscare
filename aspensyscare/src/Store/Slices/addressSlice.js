import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    address: [],
    error: '',
}

export const addAddress= createAsyncThunk('user/address', async() => {
    return await axios
        .post("/getAddress")
        .then((response) => response.data)
});

const addressSlice = createSlice({
    name: 'banner',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addAddress.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.banner = action.payload
        })
        builder.addCase(addAddress.rejected, (state, action) => {
            state.loading = false
            state.banner = []
            state.error = action.error.message
        })
    },
})
export default addressSlice.reducer
