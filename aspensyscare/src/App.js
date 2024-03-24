import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import LandingPage from './Components/Large/LandingPage/LandingPage';
import Home from './Components/Large/LandingPage/Home/Home';
import Smallhome from './Components/Small/LandingPage/Home/Homesmall';
import 'react-toastify/dist/ReactToastify.css';
import { AllProducts, GetuserWishlist, currentUser, fatchSizes, fetchBanner, fetchCategory, getAddress, offeredBrands, productData } from './Api/Api';
import Navbar from './Components/Large/layouts/Navbar/Navbar';
import Footer from './Components/Large/layouts/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'js-cookie'
import { Privecy, ContactUS, AboutUs, PaymentReturn, TermsCondition, Shipping, Sitemap, Jobs, OrderFailed, ThankYou, Login, Wishlist, Smallwishlist, Cart, Product, ProductVariant, ProductByCategory, PaymentLoading, Unsubscribe, Kitchencare, ProductByCategorySmall } from './Routing';
// import Smallfooter from './Components/Small/layouts/Footer/Smallfooter';

const Log = createContext(null);
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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
      dispatch(currentUser({refesstoken:Cookies.get('u__r_t_____')}))
    }

  }else{
    dispatch(currentUser({refesstoken:Cookies.get('u__r_t_____')}))
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
                <Route path='/' element={<LandingPage />}>
                  <Route index element={<Smallhome />} />
                  <Route path='/login' element={<React.Suspense fallback="Loading..."><Login /></React.Suspense>} />
                  {/* <Route path='/products' element={<AllPopularProducts />} /> */}
                  <Route path='/category/:url/c/:id' element={<React.Suspense fallback="Loading..."><ProductByCategorySmall /></React.Suspense>} />
                  <Route path='/cart' element={<React.Suspense fallback="Loading..."><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/cart/:id' element={<React.Suspense fallback="Loading..."><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/product/:category/:product_id/:productname' element={<React.Suspense fallback="Loading..."><Product /></React.Suspense>} />
                  <Route path='/product/type' element={<React.Suspense fallback="Loading..."><ProductVariant /></React.Suspense>} />
                  <Route path='/payment/status' element={<React.Suspense fallback="Loading..."><PaymentLoading /></React.Suspense>} />
                  <Route path='/thankyou' element={<React.Suspense fallback="Loading..."><ThankYou /></React.Suspense>} />
                  <Route path='/thankyou' element={<React.Suspense fallback="Loading..."><ThankYou /></React.Suspense>} />
                  <Route path='/order-failed' element={<React.Suspense fallback="Loading..."><OrderFailed /></React.Suspense>} />
                  <Route path='/career' element={<React.Suspense fallback="Loading..."><Jobs /></React.Suspense>} />
                  <Route path='/sitemap' element={<React.Suspense fallback="Loading..."><Sitemap /></React.Suspense>} />
                  <Route path='/wishlist' element={<React.Suspense fallback="Loading..."><Smallwishlist /></React.Suspense>} />
                  <Route path='/privacy-policy' element={<React.Suspense fallback="Loading..."><Privecy /></React.Suspense>} />
                  <Route path='/contact-us' element={<React.Suspense fallback="Loading..."><ContactUS /></React.Suspense>} />
                  <Route path='/about-us' element={<React.Suspense fallback="Loading..."><AboutUs /></React.Suspense>} />
                  <Route path='/payment-return-cancellation' element={<React.Suspense fallback="Loading..."><PaymentReturn /></React.Suspense>} />
                  <Route path='/terms-condition' element={<React.Suspense fallback="Loading..."><TermsCondition /></React.Suspense>} />
                  <Route path='/shipping' element={<React.Suspense fallback="Loading..."><Shipping /></React.Suspense>} />
                  <Route path='/unsubscribe-me' element={<React.Suspense fallback="Loading..."><Unsubscribe /></React.Suspense>} />
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
                <Route path='/' element={<LandingPage />}>
                  <Route index element={<Home />} />
                  <Route path='/login' element={<React.Suspense fallback="Loading..."><Login /></React.Suspense>} />
                  {/* <Route path='/products' element={<AllPopularProducts />} /> */}
                  <Route path='/category/:url/c/:id' element={<React.Suspense fallback="Loading..."><ProductByCategory /></React.Suspense>} />
                  <Route path='/cart' element={<React.Suspense fallback="Loading..."><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/cart/:id' element={<React.Suspense fallback="Loading..."><Cart handelLogin={handelLogin} openLogin={openLogin} /></React.Suspense>} />
                  <Route path='/product/:category/:product_id/:productname' element={<React.Suspense fallback="Loading..."><Product /></React.Suspense>} />
                  <Route path='/product/type' element={<React.Suspense fallback="Loading..."><ProductVariant /></React.Suspense>} />
                  <Route path='/payment/status' element={<React.Suspense fallback="Loading..."><PaymentLoading /></React.Suspense>} />

                  <Route path='/thankyou' element={<React.Suspense fallback="Loading..."><ThankYou /></React.Suspense>} />
                  <Route path='/order-failed' element={<React.Suspense fallback="Loading..."><OrderFailed /></React.Suspense>} />
                  <Route path='/career' element={<React.Suspense fallback="Loading..."><Jobs /></React.Suspense>} />
                  <Route path='/sitemap' element={<React.Suspense fallback="Loading..."><Sitemap /></React.Suspense>} />
                  <Route path='/wishlist' element={<React.Suspense fallback="Loading..."><Wishlist /></React.Suspense>} />
                  <Route path='/privacy-policy' element={<React.Suspense fallback="Loading..."><Privecy /></React.Suspense>} />
                  <Route path='/contact-us' element={<React.Suspense fallback="Loading..."><ContactUS /></React.Suspense>} />
                  <Route path='/about-us' element={<React.Suspense fallback="Loading..."><AboutUs /></React.Suspense>} />
                  <Route path='/payment-return-cancellation' element={<React.Suspense fallback="Loading..."><PaymentReturn /></React.Suspense>} />
                  <Route path='/terms-condition' element={<React.Suspense fallback="Loading..."><TermsCondition /></React.Suspense>} />
                  <Route path='/shipping' element={<React.Suspense fallback="Loading..."><Shipping /></React.Suspense>} />
                  <Route path='/unsubscribe-me' element={<React.Suspense fallback="Loading..."><Unsubscribe /></React.Suspense>} />
                </Route>
              </Routes>
              <Footer />
            </Log.Provider>
          </BrowserRouter>

      }
    </>
  );
}

export default App;
export { Log };