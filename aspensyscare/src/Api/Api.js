import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { LoginAfterCart } from "../Store/Slices/cartSlice"


export const CreateOrder = async (amount) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}createOrder`, amount)
        .then((res) => res.data)
}
export const CreateSigneture = async (signeture) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}createSigneture`, signeture)
        .then((res) => res.data)
}
export const Adcontact = async (contact) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}addContact`, contact)
        .then((res) => res.data)
}
export const AddAddress = async (address) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}addAddress`, address)
        .then((res) => res.data)
}
export const SignupUser = async (values) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}site_user`, values)
        .then((res) => res.data)
}
export const Placeorder = async (values) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}caseonorder`, values)
        .then((res) => res.data)
}
export const GetCartDetails = async (id) => {
    return await axios.post(`${process.env.REACT_APP_APIURL}cartdetails`, id)
        .then((res) => res.data)
}
// export const AddWishlist = async (wishListData) => {
//     return await axios.post(`${process.env.REACT_APP_APIURL}addwishlist`, wishListData)
//         .then((res) => res.data)
// }
// export const RemoveWishlist = async (values) => {
//     return await axios.post(`${process.env.REACT_APP_APIURL}removewishlist`, values)
//         .then((res) => res.data)
// }
// Api for redux store sclices start 
export const offeredBrands = createAsyncThunk('brand/offerbrands', async () => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}featuredbrand`,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const PushUserWishlist = createAsyncThunk('wishlist/wishlistdetails', async (productdetails) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}addwishlist`, productdetails,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const GetuserWishlist = createAsyncThunk('wishlist/wishlistdetails', async (User_ID) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}getuserwishlist`,User_ID,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const fatchSizes = createAsyncThunk('size/sizedetails', async () => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}size`,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});


export const fetchBanner = createAsyncThunk('banner/fetchbanner', async () => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}fatch_baner`,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}fatch_category`,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const getAddress = createAsyncThunk('user/address', async (id) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}getAddress`, id,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const magnifying = createAsyncThunk('images/magnifying', async (id) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}magnifying`, id,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const productData = createAsyncThunk('product/productdetails', async (id) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}productdetails`, id,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const AllProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}products`,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});
export const fetchUsers = createAsyncThunk('user/fetchUsers', async (login) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}login_user`, login,{cache: {
            methods: ['post']
          }})
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
            .post(`${process.env.REACT_APP_APIURL}usercart`, [productId, names, cartQuantity, itemSize, userId])
            .then((req, res) => {
                console.log(`done`);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const allproducts = useSelector((state) => state.product);
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);
    const dispatch = useDispatch();

    GetCartDetails(sessionStorage.getItem('___user')).then((res) => {
        //console.log(product)

        const { product } = allproducts.products;
        const { details } = products.productdetails;
        const { size } = sizedetails.sizes;
        res.cartItems.map((items) => {
            const findIndex = product !== undefined ? product.findIndex((item) => item.id === items.product_id) : null;
            //console.log(items)
            // cart.push(product[findIndex])
            // localStorage.setItem(`cartItems`, JSON.stringify(cart))
            // get the all details belongs to product Id from product entry tables
            const itemIndex = details !== undefined ? details.filter((item) => item.product_id === items.product_id) : [];
            const Productvariants = [];
            console.log(itemIndex);
            if (itemIndex.length !== 0 && details !== undefined && size !== undefined) {
                itemIndex.map((item, idx) => {
                    const index = size.filter((items) => items.id === item.size_id)
                    const values = {
                        "price": item.price,
                        "size": index[0]['size_value']
                    }
                    Productvariants.push(values)
                })
                const productDetails = Object.assign({ price: product[findIndex].default_price }, product[findIndex]);
                dispatch(LoginAfterCart([productDetails, product[findIndex].default_size, Productvariants]));
            }
            
        })
        //console.log(cart)
    })
};
export const pushUsers = createAsyncThunk('user/login_push_user', async (login) => {
    return await axios
        .post(`${process.env.REACT_APP_APIURL}login_push_user`, login,{cache: {
            methods: ['post']
          }})
        .then((response) => response.data)
});

export const UnsubscribeEmail= async (email)=>{
    return await axios
            .post(`${process.env.REACT_APP_APIURL}unsubscribe`, email,{cache: {
                methods: ['post']
              }})
            .then((response) => response.data)
}
export const recentOrder= async (paymentID)=>{
    return await axios
            .post(`${process.env.REACT_APP_APIURL}currentorder`, paymentID,{cache: {
                methods: ['post']
              }})
            .then((response) => response.data)
}
export const currentUser= createAsyncThunk('user/login_push_user', async (ACCESSTOKEN)=>{
    return await axios
            .post(`${process.env.REACT_APP_APIURL}currentuser`, ACCESSTOKEN,{cache: {
                methods: ['post']
              }})
            .then((response) => response.data)
});
// Api for redux store sclices end
