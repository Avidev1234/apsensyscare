import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllProducts, GetuserWishlist, currentUser, fatchSizes, fetchBanner, fetchCategory, getAddress, offeredBrands, productData } from './Api/Api';
import Navbar from './Components/Large/layouts/Navbar/Navbar';
import Footer from './Components/Large/layouts/Footer/Footer';
// import Wishlist from './Components/Small/WishList/Wishlist';
// import Sidebar from './Components/Large/layouts/Sidebar/Sidebar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'js-cookie'
import { LandingPage, Home, SmallHome, Privecy, ContactUS, AboutUs, PaymentReturn, TermsCondition, Shipping, Sitemap, Jobs, OrderFailed, ThankYou, Wishlist, Smallwishlist, Cart, Product, ProductVariant, ProductByCategory, PaymentLoading, Unsubscribe, ProductByCategorySmall, AllCategory,History,Orderhistory,Forgotpassword,Otpverification,Track ,HistoryDetails,Invoice } from './Routing';
import ProfileManager from './Components/Large/layouts/Navbar/ProfileManager';
import Ratingpage from './Components/Large/Product/Ratingpage';
import YourAddress from './Components/Large/layouts/Navbar/YourAddress'; 
import Loginbeforecart from './Components/Large/Cart/Loginbeforecart';
// import Gotocart from './Components/Large/Cart/Gotocart';
// import Orderhistory from './Components/Large/History/Orderhistory';
// import Smallfooter from './Components/Small/layouts/Footer/Smallfooter';

const Log = createContext(null);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchBanner());
        dispatch(fetchCategory());
        dispatch(offeredBrands());
        dispatch(AllProducts());
        dispatch(productData());
        dispatch(fatchSizes());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch])
  // console.log(`session value is${item_value}`)


  const [openLogin, setOpenLogin] = useState(false)
  // const [login, setLogin] = useState(false);

  const handelLogin = (text) => {
    setOpenLogin(text);
    // setLogin(true);
  }


  if (sessionStorage.getItem('___user')) {
    dispatch(getAddress({ userid: sessionStorage.getItem('___user') }))
    //dispatch(pushUsers(sessionStorage.getItem('___user')))
    dispatch(GetuserWishlist({ userid: sessionStorage.getItem('___user') }));
  }
  if (sessionStorage.getItem('LoginSuccess') === 'true') {
    if (Cookies.get('u__r_t_____') !== undefined) {
      dispatch(currentUser({ refesstoken: Cookies.get('u__r_t_____') }))
    }

  } else {
    dispatch(currentUser({ refesstoken: Cookies.get('u__r_t_____') }))
  }


  const WishlistData = useSelector((state) => state.wishlist);
  const wishlist = WishlistData.wishlist
  const WishlistProducts = []
  wishlist.length !== 0 && wishlist.map((items) => {
    WishlistProducts.push(items.productId)
  })
  return (
    <>
      {
        window.innerWidth <= 768 ? 
          <BrowserRouter>
            <ToastContainer />
            <Log.Provider value={WishlistProducts}>
              <Navbar handelLogin={handelLogin} openLogin={openLogin} />
              <Routes>
                <Route path='/' element={<React.Suspense fallback={<div class="lorder"></div>}><LandingPage /></React.Suspense>}>
                  <Route index element={<React.Suspense fallback={<div class="lorder"></div>}><SmallHome /></React.Suspense>} />
                  {/* <Route path='/login' element={<React.Suspense fallback={<div class="lorder"></div>}><Login /></React.Suspense>} /> */}
                  {/* <Route path='/products' element={<AllPopularProducts />} /> */}
                  <Route path='/category/:url/c/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><ProductByCategorySmall /></React.Suspense>} />
                  <Route path='/cart' element={<React.Suspense fallback={<div class="lorder"></div>}><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  {/* <Route path='/go-to-cart' element={<React.Suspense fallback={<div class="lorder"></div>}><Gotocart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} /> */}
                  <Route path='/cart/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/product/:category/:product_id/:productname' element={<React.Suspense fallback={<div class="lorder"></div>}><Product /></React.Suspense>} />
                  <Route path='/loginbefore-cart/:category/:product_id/:productname' element={<React.Suspense fallback={<div class="lorder"></div>}><Loginbeforecart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/product/type' element={<React.Suspense fallback={<div class="lorder"></div>}><ProductVariant /></React.Suspense>} />
                  <Route path='/payment/status' element={<React.Suspense fallback={<div class="lorder"></div>}><PaymentLoading /></React.Suspense>} />
                  <Route path='/thankyou' element={<React.Suspense fallback={<div class="lorder"></div>}><ThankYou /></React.Suspense>} />
                  <Route path='/thankyou' element={<React.Suspense fallback={<div class="lorder"></div>}><ThankYou /></React.Suspense>} />
                  <Route path='/order-failed' element={<React.Suspense fallback={<div class="lorder"></div>}><OrderFailed /></React.Suspense>} />
                  <Route path='/career' element={<React.Suspense fallback={<div class="lorder"></div>}><Jobs /></React.Suspense>} />
                  <Route path='/sitemap' element={<React.Suspense fallback={<div class="lorder"></div>}><Sitemap /></React.Suspense>} />
                  <Route path='/wishlist' element={<React.Suspense fallback={<div class="lorder"></div>}><Smallwishlist /></React.Suspense>} />
                  <Route path='/profile' element={<React.Suspense fallback={<div class="lorder"></div>}><ProfileManager handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/history' element={<React.Suspense fallback={<div class="lorder"></div>}><History handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  {/* <Route path='/history/orderhistory/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Orderhistory handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} /> */}
                  <Route path='/privacy-policy' element={<React.Suspense fallback={<div class="lorder"></div>}><Privecy /></React.Suspense>} />
                  <Route path='/track/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Track /></React.Suspense>} />
                  <Route path='/history-details/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><HistoryDetails /></React.Suspense>} />
                  <Route path='/invoice/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Invoice /></React.Suspense>} />
                  <Route path='/contact-us' element={<React.Suspense fallback={<div class="lorder"></div>}><ContactUS /></React.Suspense>} />
                  <Route path='/about-us' element={<React.Suspense fallback={<div class="lorder"></div>}><AboutUs /></React.Suspense>} />
                  <Route path='/payment-return-cancellation' element={<React.Suspense fallback={<div class="lorder"></div>}><PaymentReturn /></React.Suspense>} />
                  <Route path='/terms-condition' element={<React.Suspense fallback={<div class="lorder"></div>}><TermsCondition /></React.Suspense>} />
                  <Route path='/forgot-password' element={<React.Suspense fallback={<div class="lorder"></div>}><TermsCondition /></React.Suspense>} />
                  <Route path='/otp-verification' element={<React.Suspense fallback={<div class="lorder"></div>}><Otpverification /></React.Suspense>} />
                  <Route path='/shipping' element={<React.Suspense fallback={<div class="lorder"></div>}><Shipping /></React.Suspense>} />
                  <Route path='/unsubscribe-me' element={<React.Suspense fallback={<div class="lorder"></div>}><Unsubscribe /></React.Suspense>} />
                  {/* <Route path='/rating' element={<React.Suspense fallback={<div class="lorder"></div>}><Ratingpage/></React.Suspense>} /> */}
                  <Route path='/manageaddress' element={<React.Suspense fallback={<div class="lorder"></div>}><YourAddress handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />

                </Route>
              
              </Routes>
              <Footer />
            </Log.Provider>
          </BrowserRouter>
          :
          <BrowserRouter> 
            <ToastContainer />
            <Log.Provider value={WishlistProducts}>
              <Navbar handelLogin={handelLogin} openLogin={openLogin} />
              <Routes> 
                <Route path='/' element={<React.Suspense fallback={<div class="lorder"></div>}><LandingPage /></React.Suspense>}>
                  <Route index element={<React.Suspense fallback={<div class="lorder"></div>}><Home /></React.Suspense>} />
                  {/* <Route path='/login' element={<React.Suspense fallback={<div class="lorder"></div>}><Login /></React.Suspense>} /> */}
                  {/* <Route path='/products' element={<AllPopularProducts />} /> */}
                  <Route path='/category/:url/c/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><ProductByCategory /></React.Suspense>} />
                  <Route path='/category' element={<React.Suspense fallback={<div class="lorder"></div>}><AllCategory /></React.Suspense>} />
                  <Route path='/cart' element={<React.Suspense fallback={<div class="lorder"></div>}><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  {/* <Route path='/go-to-cart' element={<React.Suspense fallback={<div class="lorder"></div>}><Gotocart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} /> */}
                  <Route path='/cart/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/product/:category/:product_id/:productname' element={<React.Suspense fallback={<div class="lorder"></div>}><Product /></React.Suspense>} />
                  <Route path='/product/type' element={<React.Suspense fallback={<div class="lorder"></div>}><ProductVariant /></React.Suspense>} />
                  <Route path='/payment/status' element={<React.Suspense fallback={<div class="lorder"></div>}><PaymentLoading /></React.Suspense>} />
                  <Route path='/loginbefore-cart/:category/:product_id/:productname' element={<React.Suspense fallback={<div class="lorder"></div>}><Loginbeforecart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/thankyou' element={<React.Suspense fallback={<div class="lorder"></div>}><ThankYou /></React.Suspense>} />
                  <Route path='/order-failed' element={<React.Suspense fallback={<div class="lorder"></div>}><OrderFailed /></React.Suspense>} />
                  <Route path='/career' element={<React.Suspense fallback={<div class="lorder"></div>}><Jobs /></React.Suspense>} />
                  <Route path='/sitemap' element={<React.Suspense fallback={<div class="lorder"></div>}><Sitemap /></React.Suspense>} />
                  <Route path='/wishlist' element={<React.Suspense fallback={<div class="lorder"></div>}><Wishlist handelLogin={handelLogin} openLogin={openLogin}/></React.Suspense>} />
                  <Route path='/forgot-password' element={<React.Suspense fallback={<div class="lorder"></div>}><Forgotpassword /></React.Suspense>} />
                  <Route path='/otp-verification' element={<React.Suspense fallback={<div class="lorder"></div>}><Otpverification /></React.Suspense>} />
                  <Route path='/profile' element={<React.Suspense fallback={<div class="lorder"></div>}><ProfileManager handelLogin={handelLogin} openLogin={openLogin}/></React.Suspense>} />
                  <Route path='/privacy-policy' element={<React.Suspense fallback={<div class="lorder"></div>}><Privecy /></React.Suspense>} />
                  <Route path='/contact-us' element={<React.Suspense fallback={<div class="lorder"></div>}><ContactUS /></React.Suspense>} />
                  <Route path='/history' element={<React.Suspense fallback={<div class="lorder"></div>}><History /></React.Suspense>} />
                  <Route path='/history/orderhistory/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Orderhistory /></React.Suspense>} />
                  <Route path='/track/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Track /></React.Suspense>} />
                  <Route path='/history-details/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><HistoryDetails /></React.Suspense>} />
                  <Route path='/invoice/:id' element={<React.Suspense fallback={<div class="lorder"></div>}><Invoice /></React.Suspense>} />
                  <Route path='/about-us' element={<React.Suspense fallback={<div class="lorder"></div>}><AboutUs /></React.Suspense>} />
                  <Route path='/payment-return-cancellation' element={<React.Suspense fallback={<div class="lorder"></div>}><PaymentReturn /></React.Suspense>} />
                  <Route path='/terms-condition' element={<React.Suspense fallback={<div class="lorder"></div>}><TermsCondition /></React.Suspense>} />
                  <Route path='/shipping' element={<React.Suspense fallback={<div class="lorder"></div>}><Shipping /></React.Suspense>} />
                  <Route path='/unsubscribe-me' element={<React.Suspense fallback={<div class="lorder"></div>}><Unsubscribe /></React.Suspense>} />
                  {/* <Route path='/rating' element={<React.Suspense fallback={<div class="lorder"></div>}><Ratingpage/></React.Suspense>} /> */}
                  <Route path='/manageaddress' element={<React.Suspense fallback={<div class="lorder"></div>}><YourAddress handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />

                </Route>
              </Routes>
              {/* <Sidebar/> */}
              <Footer />
            </Log.Provider>
          </BrowserRouter>

      }
    </>
  );
}

export default App;
export { Log };