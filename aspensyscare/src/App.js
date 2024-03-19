import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/LandingPage/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { AllProducts,  GetuserWishlist, currentUser, fatchSizes, fetchBanner, fetchCategory, getAddress, offeredBrands, productData } from './Api/Api';
import Navbar from './Components/layouts/Navbar/Navbar';
import Footer from './Components/layouts/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'js-cookie'

const Privecy = React.lazy(() => import('./Components/Policy/Privecy'))
const ContactUS = React.lazy(() => import('./Components/ContactUS/ContactUS'))
const AboutUs = React.lazy(() => import('./Components/AboutUS/AboutUs'))
const PaymentReturn = React.lazy(() => import('./Components/Policy/PaymentReturn'))
const TermsCondition = React.lazy(() => import('./Components/Policy/TermsCondition'))
const Shipping = React.lazy(() => import('./Components/Policy/Shipping'))
const Sitemap = React.lazy(() => import('./Others/Sitemap'))
const Jobs = React.lazy(() => import('./Others/Jobs'))
const OrderFailed = React.lazy(() => import('./Others/OrderFailed'))
const ThankYou = React.lazy(() => import('./Others/ThankYou'))

const Login = React.lazy(() => import('./Components/Login/Login'))
const Wishlist = React.lazy(() => import('./Components/WishList/Wishlist'))
const Cart = React.lazy(() => import('./Components/Cart/Cart'))
const Product = React.lazy(() => import('./Components/Product/Product'))
const ProductVariant = React.lazy(() => import('./Components/LandingPage/Controler/ProductVariant'))
const ProductByCategory = React.lazy(() => import('./Components/CategoryPage/ProductByCategory'))
const PaymentLoading=React.lazy(()=>import('./Others/PaymentLoading'))
const Unsubscribe=React.lazy(()=>import('./Others/Unsubscribe'))
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
    dispatch(getAddress({userid:sessionStorage.getItem('___user')}))
    //dispatch(pushUsers(sessionStorage.getItem('___user')))
    dispatch(GetuserWishlist({userid:sessionStorage.getItem('___user')}));
  }
  // setInterval(() => {
  //   if(!Cookies.get('ACCESSTOKEN')){
  //     if(Cookies.get('REFRESSTOKEN')){
  //       dispatch(currentUser(Cookies.get('REFRESSTOKEN')))
  //     }
  //   }
  // }, 1000);
  const WishlistData = useSelector((state) => state.wishlist);
  const wishlist = WishlistData.wishlist
  const WishlistProducts = []
  wishlist.length !== 0 && wishlist.map((items) => {
    WishlistProducts.push(items.productId)
  })
  return (
    <>
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
    </>
  );
}

export default App;
export { Log };