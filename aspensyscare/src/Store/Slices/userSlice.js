import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { PushUserCart, fetchUsers, pushUsers } from "../../Api/Api";
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
            if (!sessionStorage.getItem("LoginSuccess")) {
                sessionStorage.setItem("LoginSuccess", true);
                sessionStorage.setItem("___user", action.payload.details[0].id);
            }
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
        builder.addCase(pushUsers.fulfilled, (state, action) => {
            state.users.length = 0;
            state.users=action.payload
        })
    },
})
export default userSlice.reducer
// export const { addUser } = userSlice.actions;