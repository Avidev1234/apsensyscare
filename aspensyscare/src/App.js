import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/LandingPage/Home/Home';
import Product from './Components/Product/Product';
import Category from './Components/CategoryPage/Categorypage';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/WishList/Wishlist';
import Login from './Components/Login/Login';
import { useDispatch } from 'react-redux';
import { createContext, useEffect, useState } from 'react';
import { AllProducts } from './Store/Slices/productSlice';
import { productData } from './Store/Slices/productEntrySlice';
import { fatchSizes } from './Store/Slices/sizeSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCategory } from './Store/Slices/categorySclice';
import Navbar from './Components/layouts/Navbar/Navbar';
import { getAddress } from './Store/Slices/getAddressSlice';
import Privecy from './Components/Policy/Privecy';
import ContactUS from './Components/ContactUS/ContactUS';
import AboutUs from './Components/AboutUS/AboutUs';
import PaymentReturn from './Components/Policy/PaymentReturn';
import TermsCondition from './Components/Policy/TermsCondition';
import Shipping from './Components/Policy/Shipping';
import ThankYou from './Others/ThankYou';
import OrderFailed from './Others/OrderFailed';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchCategory());
        dispatch(AllProducts());
        dispatch(productData());
        dispatch(fatchSizes());
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [dispatch])
  // console.log(`session value is${item_value}`)

  const Log= createContext();
  const [openLogin, setOpenLogin] = useState(false)
  const [login, setLogin] = useState(false);

  const handelLogin = (text) => {
    setOpenLogin(text);
    setLogin(true);
  }
  if(sessionStorage.getItem('___user')){
    dispatch(getAddress(sessionStorage.getItem('___user')))
  }
  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        <Log.Provider handelLogin={handelLogin}>
          <Navbar handelLogin={handelLogin} openLogin={openLogin}/>
          <Routes>
            <Route path='/' element={<LandingPage />}>
              <Route index element={<Home />} />
              <Route path='/category' element={<Category />} />
              <Route path='/cart' element={<Cart  handelLogin={handelLogin} openLogin={openLogin}/>} />
              <Route path='/cart/:id' element={<Cart  handelLogin={handelLogin} openLogin={openLogin}/>} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/login' element={<Login />} />
              <Route path='/privacy-policy' element={<Privecy />} />
              <Route path='/contact-us' element={<ContactUS />} />
              <Route path='/about-us' element={<AboutUs />} />  
              <Route path='/payment-return-cancellation' element={<PaymentReturn />} />  
              <Route path='/terms-condition' element={<TermsCondition />} />  
              <Route path='/shipping' element={<Shipping />} /> 
              <Route path='/product/:category/:product_id/:productname' element={<Product />} /> 
              <Route path='/thankyou' element={<ThankYou />} /> 
              <Route path='/order-failed' element={<OrderFailed />} /> 
            </Route>
          </Routes>
        </Log.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;