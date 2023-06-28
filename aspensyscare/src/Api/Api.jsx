import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useSelector } from "react-redux"


export const CreateOrder = async (amount) => {
    return await axios.post("/createOrder", amount)
        .then((res) => res.data)
}
export const CreateSigneture = async (signeture) => {
    return await axios.post("/createSigneture", signeture)
        .then((res) => res.data)
}
export const Adcontact = async (contact) => {
    return await axios.post("/addContact", contact)
        .then((res) => res.data)
}
export const AddAddress = async (address) => {
    return await axios.post("/addAddress", address)
        .then((res) => res.data)
}
export const SignupUser = async (values) => {
    return await axios.post("/site_user", values)
        .then((res) => res.data)
}
export const Placeorder = async (values) => {
    return await axios.post("/caseonorder", values)
        .then((res) => res.data)
}
export const GetCartDetails = async (id) => {
    return await axios.post("/cartdetails", id)
        .then((res) => res.data)
}
// export const AddWishlist = async (wishListData) => {
//     return await axios.post("/addwishlist", wishListData)
//         .then((res) => res.data)
// }
// export const RemoveWishlist = async (values) => {
//     return await axios.post("/removewishlist", values)
//         .then((res) => res.data)
// }
// Api for redux store sclices start 
export const offeredBrands = createAsyncThunk('brand/offerbrands', async () => {
    return await axios
        .post("/featuredbrand")
        .then((response) => response.data)
});
export const PushUserWishlist = async (productdetails) => {
    return await axios
        .post("/addwishlist", productdetails)
        .then((response) => response.data)
};
export const GetuserWishlist = createAsyncThunk('wishlist/wishlistdetails', async () => {
    return await axios
        .post("/getuserwishlist")
        .then((response) => response.data)
});
export const fatchSizes = createAsyncThunk('size/sizedetails', async () => {
    return await axios
        .post("/size")
        .then((response) => response.data)
});
export const fetchBanner = createAsyncThunk('banner/fetchbanner', async () => {
    return await axios
        .post("/fatch_baner")
        .then((response) => response.data)
});
export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
    return await axios
        .post("/fatch_category")
        .then((response) => response.data)
});
export const getAddress = createAsyncThunk('user/address', async (id) => {
    return await axios
        .post("/getAddress", id)
        .then((response) => response.data)
});
export const magnifying = createAsyncThunk('images/magnifying', async (id) => {
    return await axios
        .post("/magnifying", id)
        .then((response) => response.data)
});
export const productData = createAsyncThunk('product/productdetails', async (id) => {
    return await axios
        .post("/productdetails", id)
        .then((response) => response.data)
});
export const AllProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await axios
        .post("/products")
        .then((response) => response.data)
});
export const fetchUsers = createAsyncThunk('user/fetchUsers', async (login) => {
    return await axios
        .post("/login_user", login)
        .then((response) => response.data)
});
export const PushUserCart = async (productdetails, userId) => {

    let productId = productdetails.map((item) => item.id);
    let names = productdetails.map((item) => item.name);
    let cartQuantity = productdetails.map((item) => item.cartQuantity);
    let itemSize = productdetails.map((item) => item.itemSize);
    console.log(productdetails.length)
    console.log(productId)
    if (productdetails.length !== 0) {

        await axios
            .post("/usercart", [productId, names, cartQuantity, itemSize, userId])
            .then((req, res) => {
                console.log("done");
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
export const pushUsers = createAsyncThunk('user/login_push_user', async (login) => {
    return await axios
        .post("/login_push_user", login)
        .then((response) => response.data)
});
// Api for redux store sclices end
