import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/userSlice";
import  bannerSlice  from "./Slices/bannerSlice";
const store = configureStore({
    reducer: {
        users: userSlice,
        banner:bannerSlice,
    },
});

export default store;