import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    address: [],
    error: '',
}

export const getAddress= createAsyncThunk('user/address', async(id) => {
    return await axios
        .post("/getAddress",id)
        .then((response) => response.data)
});

const getAddressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAddress.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAddress.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.address = action.payload
        })
        builder.addCase(getAddress.rejected, (state, action) => {
            state.loading = false
            state.address = []
            state.error = action.error.message
        })
    },
})
export default getAddressSlice.reducer
