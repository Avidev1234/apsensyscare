import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/userSlice";
import  bannerSlice  from "./Slices/bannerSlice";
import categorySclice from "./Slices/categorySclice";
import productSlice from "./Slices/productSlice";
import detailsSlice from "./Slices/productEntrySlice";
import sizeSlice from "./Slices/sizeSlice";
import cartSlice from "./Slices/cartSlice";
import imagemagnifySlice from "./Slices/imagemagnifySlice";
import getAddressSlice from "./Slices/getAddressSlice";
import getwishlistSlice from "./Slices/getwishlistSlice";
const store = configureStore({
    reducer: {
        users: userSlice,
        banner:bannerSlice,
        category:categorySclice,
        product:productSlice,
        productdetails:detailsSlice,
        size:sizeSlice,
        cart:cartSlice,
        imagemagnify:imagemagnifySlice,
        address:getAddressSlice,
        wishlist:getwishlistSlice,
    },
});

export default store;