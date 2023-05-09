import './App.css';
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

  }, [])
  // console.log(`session value is${item_value}`)

  const Log= createContext();
  const [openLogin, setOpenLogin] = useState(false)
  const [login, setLogin] = useState(false);

  const handelLogin = (text) => {
    setOpenLogin(text);
    setLogin(true);
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
              <Route path='/product' element={<Product />} />
              <Route path='/category' element={<Category />} />
              <Route path='/cart' element={<Cart  handelLogin={handelLogin} openLogin={openLogin}/>} />
              <Route path='/cart/:id' element={<Cart  handelLogin={handelLogin} openLogin={openLogin}/>} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/login' element={<Login />} />
            </Route>
          </Routes>
        </Log.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;