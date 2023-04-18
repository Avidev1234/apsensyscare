import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/LandingPage/Home/Home';
import Product from './Components/Product/Product';
import Category from './Components/CategoryPage/Categorypage';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/WishList/Wishlist';
import Login from './Components/Login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}>
            <Route index element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/category' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
