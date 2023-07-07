import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/LandingPage/Home/Home';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/WishList/Wishlist';
import Login from './Components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/layouts/Navbar/Navbar';
import Privecy from './Components/Policy/Privecy';
import ContactUS from './Components/ContactUS/ContactUS';
import AboutUs from './Components/AboutUS/AboutUs';
import PaymentReturn from './Components/Policy/PaymentReturn';
import TermsCondition from './Components/Policy/TermsCondition';
import Shipping from './Components/Policy/Shipping';
import ThankYou from './Others/ThankYou';
import OrderFailed from './Others/OrderFailed';
import { AllProducts, GetCartDetails, GetuserWishlist, fatchSizes, fetchBanner, fetchCategory, getAddress, offeredBrands, productData, pushUsers } from './Api/Api';
import Footer from './Components/layouts/Footer/Footer';
import ProductByCategory from './Components/CategoryPage/ProductByCategory';
import AllPopularProducts from './Components/Product/AllPopularProducts';
import { LoginAfterCart } from './Store/Slices/cartSlice';
const Log = createContext(null);
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchCategory());
        dispatch(fetchBanner());
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
  const [login, setLogin] = useState(false);

  const handelLogin = (text) => {
    setOpenLogin(text);
    setLogin(true);
  }
  const allproducts = useSelector((state) => state.product);
  const products = useSelector((state) => state.productdetails);
  const sizedetails = useSelector((state) => state.size);
  if (sessionStorage.getItem('___user')) {
    const { product } = allproducts.products;
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;
    dispatch(getAddress(sessionStorage.getItem('___user')))
    dispatch(pushUsers(sessionStorage.getItem('___user')))
    dispatch(GetuserWishlist(sessionStorage.getItem('___user')));
    GetCartDetails(sessionStorage.getItem('___user')).then((res) => {
      //console.log(product)
      let cart = []
      res.cartItems.map((items) => {
        const findIndex = product !== undefined ? product.findIndex((item) => item.id === items.product_id) : null;
        //console.log(items)
        // cart.push(product[findIndex])
        // localStorage.setItem("cartItems", JSON.stringify(cart))
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
      console.log(cart)
    })

  }

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
              
              <Route path='/products' element={<AllPopularProducts />} />
              <Route path='/category/:url/c/:id' element={<ProductByCategory />} />
              <Route path='/cart' element={<Cart handelLogin={handelLogin} openLogin={openLogin} />} />
              <Route path='/cart/:id' element={<Cart handelLogin={handelLogin} openLogin={openLogin} />} />
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
          <Footer />
        </Log.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { Log };