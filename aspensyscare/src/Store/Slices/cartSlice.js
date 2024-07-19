import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { toast } from "react-toastify";
import { PushUserCart } from "../../Api/Api";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload[0].id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };

        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload[0], cartQuantity: action.payload[0].cartQuantity === undefined ? 1 : action.payload[0].cartQuantity, itemSize: action.payload[1] ,sizes:action.payload[2]};
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      if (sessionStorage.getItem('___user') !== null) {
        //console.log("login user cart")
        if (localStorage.getItem("cartItems") !== null) {
          
          const productdetails = JSON.parse(localStorage.getItem("cartItems"))
          const userId = sessionStorage.getItem('___user')
          PushUserCart(productdetails, userId)
        }
      }
    },
    LoginAfterCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload[0].id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload[0], cartQuantity: action.payload[0].cartQuantity === undefined ? 1 : action.payload[0].cartQuantity, itemSize: action.payload[1] ,sizes:action.payload[2]};
        state.cartItems.push(tempProductItem);
        
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      if (sessionStorage.getItem('___user') !== null) {
        //console.log("login user cart")
        if (localStorage.getItem("cartItems") !== null) {
          const productdetails = JSON.parse(localStorage.getItem("cartItems"))
          const userId = sessionStorage.getItem('___user')
          PushUserCart(productdetails, userId)
        }
      }
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      //toast.error("Cart cleared", { position: "bottom-left" });
    },
    updateCart(state,action){
      state.cartItems.map((cartItem) => {
        state.cartItems[action.payload.id].price =action.payload.size_price.price;
        state.cartItems[action.payload.id].itemSize =action.payload.size_price.size;
        return state;
      });
    }
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart,updateCart,LoginAfterCart } =
  cartSlice.actions;

export default cartSlice.reducer;