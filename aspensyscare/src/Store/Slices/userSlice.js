import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

import {  PushUserCart, fetchUsers, currentUser } from "../../Api/Api";
import { setLoginSession } from "../../Function/helper";
const initialState = {
    loading: false,
    users: [],
    error: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.users = action.payload
            Cookies.set('u__r_t_____',action.payload.token)
            setLoginSession(action.payload.details[0].userId)
            
            //console.log(localStorage.getItem("cartItems"))
            if (localStorage.getItem("cartItems") !== null ) {
                const productdetails = JSON.parse(localStorage.getItem("cartItems"))
                //console.log(typeof((productdetails)))
                const userId=sessionStorage.getItem("___user");
                PushUserCart(productdetails,userId)
            }
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        builder.addCase(currentUser.fulfilled, (state, action) => {
            state.users.length = 0;
            state.users=action.payload
        })
        builder.addCase(currentUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})
export default userSlice.reducer
// export const { addUser } = userSlice.actions;