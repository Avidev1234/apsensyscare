import * as React from "react";
import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Typography,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RecentViews from "../LandingPage/Carousel/RecentViews";
import { useDispatch, useSelector } from "react-redux";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddAddressModal from "./AddAddressModal";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  updateCart,
} from "../../../Store/Slices/cartSlice";
import { toast } from "react-toastify";
// import { AddWishlist, CreateOrder, CreateSigneture, Placeorder } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../../Store/Slices/getwishlistSlice";
import emailjs from '@emailjs/browser';
import { CreateOrder } from "../../../Api/Api";
import { GenerateEmailForGaustOrder } from "./gaustUser";

// import { useLocation } from "react-router-dom";

const stylemodal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Headdingcont = styled.div`
  width: 100%;
`;
const ContainerCart = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;
const Amountcont = styled.div`
  width: 25%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AmountDetailscont = styled.div`
  width: 80%;
  display: flex;
  height: max-content;
  flex-direction: column;
  border-radius: 16px;
  padding: 10px;
  background-color: #d9d9d9;
`;
const AmountDetailsrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const Detailescont = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const SizeButtom = styled(Button)`
  line-height: 1.5;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  background-color: green;
  padding: 6px 6px;
  min-width: 50px;
  font-size: 12px;
`;

const Cart = (props) => {
  const { handelLogin } = props;
  // const productId = useLocation();
  const dispatch = useDispatch();
  const [expandedItem, setExpandedItem] = useState("panel1");
  const [expandedAddress, setExpandedAddress] = useState();
  const [expandedPay, setExpandedPay] = useState();
  const [orderType, setOrderType] = useState("online");
  const [error, setError] = useState(false);
  const [order_address, setOredr_address] = useState(null);
  const [gaust_address, setgaust_address] = useState((localStorage.getItem("___gaust_user_address")) !== null ? JSON.parse(localStorage.getItem("___gaust_user_address")) : []);


  const cart = useSelector((state) => state.cart);
  // const sizes = useSelector((state) => state.size);
  // const size = sizes.sizes.size;
  const addressess = useSelector((state) => state.address);
  const address = addressess.address.address;
  // this comment will be used when we send user data to database while order
  const userdetails = useSelector((state) => state.users);
  const user = userdetails.users.details;
  const userName = user !== undefined ? user[0].f_name + " " + user[0].l_name : ""
  const userPhone = user !== undefined ? user[0].phone_number : ""
  const userID = user !== undefined ? user[0].userId : ""
  // const userEmail = user !== undefined ? user[0].email_address : ""
  const handleOpen = (panel) => (event, isExpanded) => {
    // //console.log(panel)
    // //console.log(isExpanded)
    // setExpanded(isExpanded ? panel : false);
    if (panel === "panel1") {
      setExpandedPay(false);
      setExpandedAddress(false);
      setExpandedItem(panel);
    }
    if (panel === "panel2") {
      setExpandedPay(false);
      setExpandedItem(false);
      setExpandedAddress(panel);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    if (panel === "panel3") {
      if (address !== undefined || order_address !== null) {
        setExpandedItem(false);
        setExpandedAddress(false);
        setExpandedPay(panel);
        if (order_address === null) {
          setOredr_address((address[0]));
        }
      } else {
        toast.error("please add Address", { position: "top-center" });
      }
      
    }
  };
  // console.log(order_address, address);
  const handleChange = (panel) => (event, isExpanded) => {
    // //console.log(panel)
    // //console.log(isExpanded)
    // setExpanded(isExpanded ? panel : false);
    if (panel === "panel1") {
      setExpandedPay(false);
      setExpandedAddress(false);
      setExpandedItem(panel);
    }
    if (panel === "panel2") {
      setExpandedPay(false);
      setExpandedItem(false);
      setExpandedAddress(panel);
    }
  };
  // address work start



  const handleRadioChange = (event) => {
    setOrderType(event.target.value);
    setError(false);
  };

  ////console.log("i am radio :- ", orderType)
  const takeValue = (e) => {
    ////console.log("address value", e.target.value);
    setOredr_address(JSON.parse(e.target.value));
  };
  const navigate = useNavigate();
  const handlegaust_address = (props) => {
    setgaust_address(props)
    ////console.log(gaust_address)
  }
  const handelOrder = async (cart) => {
    ////console.log("hello indide handelOrder", localStorage.getItem("___gaust_user_address"))
    // console.log(cart);
    if (sessionStorage.getItem("___user") === null) {
      handelLogin(true)
      return;
    }
   
    if (sessionStorage.getItem("___user") !== null) {
      const amount = cart.cartTotalAmount
      const OrderItems = {
        TotalAmount: cart.cartTotalAmount,
        OrderId: 'ASCORDER' + Date.now(),
        merchantTransactionId: 'ASC' + Date.now() + "TR",
        cartTotalQuantity: cart.cartTotalQuantity,
        userAddress: order_address.id,
      }
      let products = []
      cart.cartItems.map((val) => {
        products.push({
          id: val.id,
          brand: val.brand_name,
          name: val.name,
          size: val.itemSize,
          price: val.price,
          quantity: val.cartQuantity
        })
      })
      OrderItems.products = products
      const message = products.map((val) => {
        return `<tr>
      <td style="border: 1px solid #ddd;">${val.brand}</td>
      <td style="border: 1px solid #ddd;">${val.name}</td>
      <td style="border: 1px solid #ddd;">${val.size}</td>
      <td style="border: 1px solid #ddd;">${val.price}</td>
      <td style="border: 1px solid #ddd;">${val.quantity}</td>
    </tr>`
      });
      ////console.log((message.join("")))
      const message_table = `<table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;"><tr><th style="background-color:green;border: 1px solid #ddd;">Brand</th><th style="background-color:green;border: 1px solid #ddd;">Name</th><th style="background-color:green;border: 1px solid #ddd;">Size</th><th style="background-color:green;border: 1px solid #ddd;">Price</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Quantity</th></tr>${message.join("")}</table>`

      // program to generate random strings
      // const result = `ACS${Math.random().toString(36).substring(2, 9).toUpperCase()}${sessionStorage.getItem('___user')}`;
      ////console.log(result);
      if (orderType === 'case') {
        ////console.log(products)
        const orderItem = {
          user_id: '',
          order_d: '',
          products: products,
          address_id: order_address,
          payment_method: 'case',
          total_order: cart.cartTotalQuantity,
          order_status: 'ordered',
          total_amount: message_table
        }


        // emailjs.send('service_f7pqddb', 'template_042k23w', orderItem, 'JxfsKGnGvM2sBgEyn')
        //   .then((result) => {
        //     //console.log("message send")
        //   }, (error) => {
        //     // show the user an error
        //     //console.log("message not send")
        //   });
        ////console.log(orderItem)
        // Placeorder(cart).then((res) => {
        //   //console.log(res)
        // })
      } else if (orderType === 'online') {
        // console.log(userID)
        const data = {
          name: userName,
          phone: userPhone,
          order: OrderItems,
          merchantUserId: userID,
          amount: amount,
        }
        CreateOrder(data).then((res) => {
          // console.log(res)
          if (res.url !== undefined) {
            console.log('Entered')
            window.location = res.url
          } else {
            console.log("somthing went wrong");
          }
        })
      }
    } else if (localStorage.getItem("___gaust_user_address") !== null) {
      // //console.log(cart)
      GenerateEmailForGaustOrder(cart, gaust_address)
        .then((res) => {
          emailjs.send('service_cykcjmj', 'template_ju49o12', res, 'DRezFycYbf9fhBISj')
            .then(() => {
              toast.info("order placed", {
                position: "bottom-left",
              });

              dispatch(clearCart())
              navigate("/thankyou")
            }, (error) => {
              // show the user an error
              ////console.log("message not send")
            });
        })
        .catch((err) => {
          console.log("somthing went Wrong")
        })
      ////console.log(orderItem)
      // Placeorder(cart).then((res) => {
      //   //console.log(res)
      // })
    };
  }
  ////console.log(gaust_address)
  useEffect(() => {
    dispatch(getTotals());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [cart, dispatch]);
  // //console.log(cart)
  const handleAddToCart = (product) => {
    // //console.log(product)
    const temp = "";
    dispatch(addToCart([product, temp]));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  // work for model oppening and desplay sizes for products
  const [openmod, setOpen] = React.useState(false);
  const [productSizes, setproductSizes] = useState({ index: '', Size: [] })
  const handleOpendilog = (cartItems, index) => {
    setproductSizes({ index: index, Size: cartItems.sizes })
    setOpen(true)
  };
  const handleClosedilog = () => setOpen(false);
  const changePriceAndSize = (id, currentsize_price) => {
    const product_id_size_price = {
      id: id,
      size_price: currentsize_price
    }
    dispatch(updateCart(product_id_size_price))
    handleClosedilog()
  }
  const ModelView = () => {
    return (
      <Modal
        open={openmod}
        onClose={handleClosedilog}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylemodal}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Select a Size
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {productSizes.Size.map((items, idx) => {
              const currentsize_price = items;
              //console.log(currentsize_price)
              return (
                <SizeButtom
                  variant="contained"
                  onClick={() => changePriceAndSize(productSizes.index, currentsize_price)}
                  style={{
                    backgroundColor: "green",
                    margin: "1rem",
                  }}
                  key={idx.toString()}
                >
                  {
                    items.size < 1000 ? `${items.size} ml` : `${(items.size / 1000)} L`
                  }
                </SizeButtom>
              );
            })}
          </Typography>
        </Box>
      </Modal>
    )
  }
  // moving to wishlist 
  const moveToWishList = (product) => {
    //console.log(product)
    const wishListData = {
      productid: product.id,
      userId: sessionStorage.getItem('___user')
    }
    dispatch(addToWishlist(wishListData))
    dispatch(removeFromCart(product));
    // AddWishlist(wishListData).then((res)=>{
    //   //console.log("res")
    //   dispatch(removeFromCart(product));
    // })
  }
  return (
    <Container>
      <Headdingcont>
        <Typography
          variant="h2"
          style={{ fontSize: "18px", padding: "10px", fontWeight: 600 }}
        >
          Your Cart
        </Typography>
      </Headdingcont>
      {cart.cartItems.length === 0 ? (
        <div className='w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center bg-[#f8f9fd]'>
          <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-10'>
            <img src='./Image/Poster/empty-cart-page.jpg' alt='' />
            <button className='px-5 py-1 bg-white border-2 border-[blue]'>Shop now</button>
          </div>
        </div>
      ) : (
        <ContainerCart>
          <Detailescont>
            <Accordion expanded={expandedItem === "panel1"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "90%", flexShrink: 0 }}>
                  Your Cart
                </Typography>
              </AccordionSummary>
              {/* selected cart products*/}
              <AccordionDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "raw",
                    alignItems: "flex-end",
                    borderBottom: "2px solid #d9d9d9",
                  }}
                >
                  <Typography
                    style={{
                      width: "45%",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    items
                  </Typography>
                  <Typography
                    style={{
                      width: "20%",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    size
                  </Typography>
                  <Typography
                    style={{
                      width: "20%",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    quantity
                  </Typography>
                  <Typography
                    style={{
                      width: "15%",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    price
                  </Typography>
                </div>

                {cart.cartItems &&
                  cart.cartItems.map((cartItem, idx) => (
                    <div key={idx.toString()}
                      style={{
                        width: "95%",
                        display: "flex",
                        flexDirection: "raw",
                        flexWrap: "nowrap",
                        alignItems: "center",
                        borderBottom: "2px solid #d9d9d9",
                      }}
                    >
                      {/* ----------------------item box start------------------ */}
                      <div
                        style={{
                          width: "45%",
                          display: "flex",
                          flexDirection: "raw",
                          alignItems: "flex-start",
                          padding: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <img
                            width="auto"
                            style={{ backgroundColor: "#bfdbfe", borderRadius: '8px' }}
                            height={100}
                            alt={cartItem.name}
                            src={`${process.env.REACT_APP_IMAGE}/all_products/${cartItem.product_image}`}
                          />
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "raw",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              variant="subtitle2"
                              style={{
                                fontSize: "12px",
                                color: "red",
                                cursor: "pointer",
                              }}
                              onClick={() => handleRemoveFromCart(cartItem)}
                            >
                              remove
                            </p>
                            <p
                              onClick={() => { moveToWishList(cartItem) }}
                              variant="subtitle2"
                              style={{
                                fontSize: "12px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                            >
                              move to wishlist
                            </p>
                          </div>
                        </div>
                        <p
                          variant="h2"
                          style={{
                            padding: "5px",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {cartItem.name}({cartItem.itemSize}ml)
                        </p>
                      </div>
                      {/* ----------------------item box end------------------ */}
                      {/* ----------------------size box start------------------ */}
                      <div
                        style={{
                          width: "20%",
                          padding: "5px",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <SizeButtom
                            onClick={() => handleOpendilog(cartItem, idx)}
                            variant="contained"
                            style={{ backgroundColor: "green", width: '100px', display: "flex", justifyContent: 'space-around' }}
                          >
                            {
                              cartItem.itemSize < 1000 ? `${cartItem.itemSize} ml` : `${(cartItem.itemSize / 1000)} L`
                            }
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill ml-[15px]" viewBox="0 0 16 16">
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          </SizeButtom>
                        </div>
                        <ModelView cartItem={cartItem} />
                      </div>
                      {/* ----------------------size box end------------------ */}
                      {/* ----------------------Quantity box start------------------ */}
                      <div
                        style={{
                          width: "20%",
                          padding: "5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <RemoveCircleRoundedIcon
                          style={{ fontSize: "18px", cursor: "pointer" }}
                          onClick={() => handleDecreaseCart(cartItem)}
                        />
                        <div
                          style={{
                            width: "30px",
                            height: "max-content",
                            textAlign: "center",
                          }}
                        >
                          {cartItem.cartQuantity}
                        </div>
                        <AddCircleRoundedIcon
                          style={{ fontSize: "18px", cursor: "pointer" }}
                          onClick={() => handleAddToCart(cartItem)}
                        />
                      </div>
                      {/* ----------------------Quantity box end------------------ */}
                      {/* ----------------------Price box start------------------ */}
                      <div
                        style={{
                          width: "15%",
                          padding: "5px",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
                        <Typography
                          variant="h2"
                          style={{ fontSize: "14px", fontWeight: 600 }}
                        >
                          {cartItem.price}
                        </Typography>
                      </div>
                      {/* ----------------------Price box end------------------ */}
                    </div>
                  ))}
                <Button
                  variant="contained"
                  onClick={handleOpen("panel2")}
                  style={{ backgroundColor: "green", marginTop: "10px" }}
                >
                  Select Address
                </Button>
              </AccordionDetails>
            </Accordion>
            {/* onChange={handleOpen('panel2')}  select address*/}
            <Accordion expanded={expandedAddress === "panel2"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "90%", flexShrink: 0 }}>
                  Delivery Address
                </Typography>
                {expandedAddress === "panel2" ? (
                  <Typography
                    variant="subtitle"
                    sx={{ fontSize: "14px", color: "blueviolet", zIndex: 9 }}
                    onClick={handleChange("panel1")}
                  >
                    change
                  </Typography>
                ) : (
                  ""
                )}
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* <form onSubmit={handleSubmit}> */}
                  <FormControl
                    sx={{ m: 3 }}
                    error={error}
                    variant="standard"
                    onChange={(e) => takeValue(e)}
                  >{
                      address !== undefined && sessionStorage.getItem("___user") ?
                        address.map((items, idx) => {
                          return (
                            <div key={idx.toString()}
                              style={{
                                width: "70%",
                                height: "65px",
                                overFlow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: "1rem",
                              }}
                            >
                              {idx === 0 ?
                                <input
                                  type="radio"
                                  id={`${items.id}`}
                                  name="address"
                                  value={`${JSON.stringify(items)}`}
                                  className="h-10 radio radio-primary"
                                  checked
                                /> :
                                <input
                                  type="radio"
                                  id={`${items.id}`}
                                  name="address"
                                  value={`${JSON.stringify(items)}`}
                                  className="h-10 radio radio-primary"
                                />
                              }
                              <label htmlFor={`${items.id}`}
                                style={{ display: "flex", flexDirection: "column" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                  }}
                                >
                                  <Typography
                                    variant="h2"
                                    style={{ fontSize: "14px", fontWeight: 600 }}
                                  >
                                    {items.name}
                                  </Typography>
                                  <Typography
                                    variant="body"
                                    style={{
                                      height: "fit-content",
                                      fontSize: "12px",
                                      backgroundColor: "#d9d9d9",
                                      padding: "0 4px",
                                      borderRadius: "5px",
                                    }}
                                  >
                                    Home
                                  </Typography>
                                  <Typography variant="body" style={{}}>
                                    {items.contact}
                                  </Typography>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                  <Typography
                                    variant="h2"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: 600,
                                      color: "gray",
                                    }}
                                  >
                                    {items.house_flat_office} {items.area_landmark} {items.city} {items.state} {items.pincode}
                                  </Typography>
                                </div>
                              </label>
                            </div>
                          )
                        })
                        : gaust_address !== null ? gaust_address.map((items, idx) => {
                          return (
                            <div key={idx.toString()}
                              style={{
                                width: "70%",
                                height: "65px",
                                overFlow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: "1rem",
                              }}
                            >
                              {idx === 0 ?
                                <input
                                  type="radio"
                                  id={`${items.id}`}
                                  name="address"
                                  value={`${JSON.stringify(items)}`}
                                  className="h-10 radio radio-primary"
                                  checked
                                /> :
                                <input
                                  type="radio"
                                  id={`${items.id}`}
                                  name="address"
                                  value={`${JSON.stringify(items)}`}
                                  className="h-10 radio radio-primary"

                                />
                              }
                              <label htmlFor={`${items.id}`}
                                style={{ display: "flex", flexDirection: "column" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                  }}
                                >
                                  <Typography
                                    variant="h2"
                                    style={{ fontSize: "14px", fontWeight: 600 }}
                                  >
                                    {items.name}
                                  </Typography>
                                  <Typography
                                    variant="body"
                                    style={{
                                      height: "fit-content",
                                      fontSize: "12px",
                                      backgroundColor: "#d9d9d9",
                                      padding: "0 4px",
                                      borderRadius: "5px",
                                    }}
                                  >
                                    Home
                                  </Typography>
                                  <Typography variant="body" style={{}}>
                                    {items.contact}
                                  </Typography>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                  <Typography
                                    variant="h2"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: 600,
                                      color: "gray",
                                    }}
                                  >
                                    {items.house_flat_office} {items.area_landmark} {items.city} {items.state} {items.pincode}
                                  </Typography>
                                </div>
                              </label>
                            </div>
                          )
                        }) : null
                    }
                  </FormControl>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <AddAddressModal handelLogin={handelLogin} handlegaust_address={handlegaust_address} />
                    <Button
                      variant="contained"
                      //onClick={() => { handelOrder(cart) }}
                      onClick={handleOpen("panel3")}
                      style={{
                        width: "max-content",
                        cursor: "pointer",
                        display: "flex",
                        fontSize: "12px",
                        color: "white",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: ".2rem",
                        backgroundColor: "green",
                      }}
                    >
                      Pay
                    </Button>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* select payment */}
            <Accordion expanded={expandedPay === "panel3"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "90%", flexShrink: 0 }}>
                  Payment
                </Typography>
                {expandedPay === "panel3" ? (
                  <Typography
                    variant="subtitle"
                    sx={{ fontSize: "14px", color: "blueviolet", zIndex: 9 }}
                    onClick={handleChange("panel2")}
                  >
                    change
                  </Typography>
                ) : (
                  ""
                )}
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <FormControl
                    sx={{ m: 3 }}
                    error={error}
                    variant="standard"
                    style={{ width: "100%" }}
                  >
                    <RadioGroup
                      aria-labelledby="demo-error-radios"
                      name="quiz"
                      value={orderType}
                      onChange={handleRadioChange}
                      style={{ width: "100%" }}
                    >

                      <FormControlLabel
                        value="online"
                        control={<Radio />}
                        label="Pay Online"
                      />
                      <FormControlLabel
                        value="case"
                        control={<Radio />}
                        label="Case On Delivery"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Button
                    sx={{ mt: 1, mr: 1 }}
                    type="buttom"
                    variant="contained"
                    style={{ width: '200px', backgroundColor: "green", marginTop: "10px" }}
                    onClick={() => { handelOrder(cart) }}
                  >
                    {orderType === 'case' ? "Place Order" : 'Pay'}
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </Detailescont>
          <Amountcont>
            <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
              Price details
            </Typography>
            <AmountDetailscont>
              <AmountDetailsrow style={{ borderBottom: "1.4px solid gray" }}>
                <Typography style={{ fontWeight: "600" }}>Price</Typography>
                <Typography>
                  <span
                    style={{
                      minWidth: "70px",
                      height: "max-content",
                      textAlign: "center",
                    }}
                  >
                    <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                    {cart.cartTotalAmount}
                  </span>
                </Typography>
              </AmountDetailsrow>
              {/* <AmountDetailsrow style={{ borderBottom: "1.4px solid gray" }}>
                <Typography style={{ fontWeight: "600" }}>Discount</Typography>
                <Typography
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                  }}
                >
                  <RemoveOutlinedIcon
                    style={{ color: "red", fontSize: "14px" }}
                  />

                  <div
                    style={{
                      width: "70px",
                      height: "max-content",
                      textAlign: "center",
                    }}
                  >
                    <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                    
                  </div>
                </Typography>
              </AmountDetailsrow> */}
              <AmountDetailsrow style={{ borderBottom: "1.4px solid gray" }}>
                <Typography style={{ fontWeight: "600" }}>Delivery</Typography>
                <Typography
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                  }}
                >
                  <AddOutlinedIcon
                    style={{ color: "green", fontSize: "14px" }}
                  />
                  <span
                    style={{
                      width: "70px",
                      height: "max-content",
                      textAlign: "center",
                    }}
                  >
                    <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                    50
                  </span>
                </Typography>
              </AmountDetailsrow>
            </AmountDetailscont>
            <AmountDetailscont>
              <AmountDetailsrow>
                <Typography style={{ fontWeight: "600" }}>Subtotal</Typography>
                <Typography>
                  <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                  {cart.cartTotalAmount + 50}
                </Typography>
              </AmountDetailsrow>
            </AmountDetailscont>
          </Amountcont>
        </ContainerCart>
      )}
      <div style={{ width: "100%" }}>
        <RecentViews />
      </div>
    </Container>
  );
};

export default Cart;
