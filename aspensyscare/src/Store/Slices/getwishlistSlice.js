import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// import axios from "axios";
import { toast } from "react-toastify";
import { PushUserCart, PushUserWishlist } from "../../Api/Api";

const initialState = {
    wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
    user: '',
    wishlistTotalQuantity: 0,
};
const getwishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action) {
            console.log(action.payload)
            const existingIndex = state.wishlist.findIndex(
                (item) => item.productId === action.payload.productid
            );
            console.log(existingIndex)
            if (existingIndex < 0) {
                state.wishlist.push({ productId: action.payload.productid });
                state.user = (action.payload.userId);
                toast.success("Product added to wishlist", {
                    position: "bottom-left",
                });
                localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
                PushUserWishlist(action.payload)
            }
        },

        removeFromWishlist(state, action) {
            state.wishlist.map((wishlist) => {
                console.log(wishlist.productId, action.payload)
                if (wishlist.productId === action.payload) {
                    const nextCartItems = state.wishlist.filter(
                        (item) => item.productId !== wishlist.productId
                    );
                    console.log(nextCartItems);
                    state.wishlist = nextCartItems;

                    toast.error("Product removed from wishlist", {
                        position: "bottom-left",
                    });
                }
                localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
                return state;
            });
        },

        clearWishlist(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            //toast.error("Cart cleared", { position: "bottom-left" });
        },
        updateWishlist(state, action) {
            state.cartItems.map((cartItem) => {
                state.cartItems[action.payload.id].price = action.payload.size_price.price;
                state.cartItems[action.payload.id].itemSize = action.payload.size_price.size;
                return state;
            });
        }
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, updateWishlist } =
getwishlistSlice.actions;

export default getwishlistSlice.reducer;