import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { getAddress } from "../../Api/Api";

const initialState = {
    loading: false,
    address: [],
    error: '',
}



const getAddressSlice = createSlice({
    name: 'address',
    initialState,
    reducers:{
        clearAddress(state, action) {
            state.address = [];
          },
    },
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
export const { clearAddress } = getAddressSlice.actions;
export default getAddressSlice.reducer
