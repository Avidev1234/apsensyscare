import React, { useEffect } from 'react'
import Login from "../../Login/Login";
// import ProductCard from '../LandingPage/ProductCard/ProductCardold'
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import RecentViews from '../LandingPage/Carousel/RecentViews';
import { useNavigate } from "react-router-dom";

const ProductByCategory = (props) => {
  const {  handelLogin, openLogin } = props;

    const navigate = useNavigate();
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // fatching wishlist product id from wishlist sclice
    const Wishlist = useSelector((state) => state.wishlist);
    const { wishlist } = Wishlist;
    // fatching products regarding category id
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    //console.log((wishlist));
    const length = wishlist !== undefined ? wishlist.length : 0
    let temp = 0;
    //console.log(length) 

    const wishListArray = []

    wishlist !== undefined && Products.products.product !== undefined &&
        wishlist.map((items) => {
            product.map((val) => {
                if (items.productId === val.id)
                    wishListArray.push(val)
            })
        })
    //console.log("wishListArray")
    if (!sessionStorage.getItem('___user')) {
        return (
            <div className='w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5'>
                <Helmet>
                    <title>{ }</title>
                    <meta name="description" content={""} />
                </Helmet>
                {/* <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-10'>
                    <img src='./Image/Poster/empty-wishlist-ACS2.jpg' alt='' />
                    <button className='px-5 py-1 bg-white border-2 border-[blue]'>Login</button>
                </div> */}
                <div className="relative">
             <img
        src={`${process.env.REACT_APP_IMAGE}/all_products/login.png`}
        alt=""
        className=" w-[1211px] rounded-md shadow-lg"
        />
           <button
             className="py-2 px-2 md:px-4 bg-[#FF983B] text-white text-[14px] rounded-[3px] text-sm md:text-base whitespace-nowrap hover:text-[#FF983B] hover:bg-white border-[#FF983B] absolute top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
             onClick={() =>handelLogin(true, 0)
               
      }
           >
             Login or Sign Up 
           </button>       
  </div>
            </div>
        )
    } else {
        return (
            <div className='w-full flex flex-col flex-wrap min-h-[100vh] content-start	justify-start '>
                <Helmet>
                    <title>{ }</title>
                    <meta name="description" content={""} />
                </Helmet>

                <div className='w-full flex justify-center  rounded p-3 font-bold'>
                    <p className='text-bold font-normal font-serif text-4xl'>Wishlist</p>
                </div>
                <div className="w-full flex flex-col flex-wrap items-center justify-center">
  <div className="w-full flex justify-center">
    {/* <img src="./Image/Poster/empty-cart-page.jpg" alt="" /> */}
  </div>
  <div className="relative">
    <img
      src={`${process.env.REACT_APP_IMAGE}/all_products//wishlist.png`}
      alt=""
      className=" w-[1211px] rounded-md shadow-lg"
    />
    <button
      className="py-2 px-2 md:px-4 bg-[#FF983B] text-white text-[14px] rounded-[3px] text-sm md:text-base whitespace-nowrap hover:text-[#FF983B] hover:bg-white border-[#FF983B] absolute top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={() =>navigate('/category')
      }
    >
      Shop Now
    </button>
  </div>
</div>


                {/* <div className='w-full flex flex-row flex-wrap content-start justify-start  gap-4'>
                    {wishListArray.length !== 0 ? (
                        wishListArray.map((val, i) => {
                            return (
                                <ProductCard val={val} checked={true} />
                            )
                        })
                    ) :
                        <div className='w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center bg-[#d2efff]'>
                            <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-10'>
                                <img src='./Image/Poster/empty-wishlist-ACS2.jpg' alt='' />
                                <button className='px-5 py-1 bg-white border-2 border-[blue]'>Shop now</button>
                            </div>
                        </div>
                    }
                </div> */}
                <RecentViews />
                {openLogin ? <Login handelLogin={handelLogin} /> : ""}
            </div>
        )
    }
}

export default ProductByCategory