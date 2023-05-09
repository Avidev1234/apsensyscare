import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// import { addCart } from "./cartSlice";
var md5 = require('md5');
const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (login) => {
    return await axios
        .post("/login_user", login)
        .then((response) => response.data)
});
const pushUserCart = async (productdetails,userId) => {
    
    let productId = productdetails.map((item) => item.id);
    let names = productdetails.map((item) => item.name);
    let cartQuantity = productdetails.map((item) => item.cartQuantity);
    let itemSize = productdetails.map((item) => item.itemSize);
    await axios
        .post("/usercart", [productId,names,cartQuantity,itemSize,userId])
        .then((req, res) => {
            console.log("done");
        })
        .catch((err) => {
            console.log(err);
        });
};
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
                sessionStorage.setItem("userId", md5(action.payload.details[0].id));
            }
            console.log(localStorage.getItem("cartItems"))
            if (localStorage.getItem("cartItems") !== null) {
                const productdetails = JSON.parse(localStorage.getItem("cartItems"))
                console.log(typeof((productdetails)))
                const userId=action.payload.details[0].id;
                pushUserCart(productdetails,userId)
            }
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})
export default userSlice.reducer
// export const { addUser } = userSlice.actions;