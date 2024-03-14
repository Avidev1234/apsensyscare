import {  createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../Api/Api";

const initialState = {
    loading: false,
    address: localStorage.getItem("___gaust_user_address")
    ? {address:JSON.parse(localStorage.getItem("___gaust_user_address"))}
    : [] ,
    error: '',
}



const getAddressSlice = createSlice({
    name: 'address',
    initialState,
    reducers:{
        clearAddress(state, action) {
            state.address = [];
          },
          AddAddressgaust(state, action){
            console.log(action);
            state.address = action.payload;
          }
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
export const { clearAddress,AddAddressgaust } = getAddressSlice.actions;
export default getAddressSlice.reducer
