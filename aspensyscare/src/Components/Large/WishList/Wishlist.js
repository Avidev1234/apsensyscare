import React, { useEffect } from "react";
import Login from "../../Login/Login";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import RecentViews from "../LandingPage/Carousel/RecentViews";
import { useNavigate } from "react-router-dom";
import ProductCard from "../LandingPage/ProductCard/ProductCardold";

const ProductByCategory = (props) => {
  const { handelLogin, openLogin } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Fetching wishlist product id from wishlist slice
  const Wishlist = useSelector((state) => state.wishlist);
  const { wishlist } = Wishlist;

  // Fetching products regarding category id
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;

  const wishListArray = [];

  wishlist !== undefined &&
    product !== undefined &&
    wishlist.map((items) => {
      product.map((val) => {
        if (items.productId === val.id) wishListArray.push(val);
      });
    });

  if (!sessionStorage.getItem("___user")) {
    return (
      <div className="w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5">
        <Helmet>
          <title>{}</title>
          <meta name="description" content={""} />
        </Helmet>
        <div className="relative">
          <img
            src={`${process.env.REACT_APP_IMAGE}/all_products/login.png`}
            alt=""
            className="w-[1211px] rounded-md shadow-lg"
          />
          <button
            className="py-2 px-2 md:px-4 bg-[#FF983B] text-white text-[14px] rounded-[3px] text-sm md:text-base whitespace-nowrap hover:text-[#FF983B] hover:bg-white border-[#FF983B] absolute top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => handelLogin(true, 0)}
          >
            Login or Sign Up
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col flex-wrap min-h-[100vh] content-start justify-start">
        <Helmet>
          <title>{}</title>
          <meta name="description" content={""} />
        </Helmet>

        <div className="w-full flex justify-center rounded p-3 font-bold">
          <p className="text-bold font-normal font-serif text-4xl">Wishlist</p>
        </div>
        {wishListArray.length !== 0 ? (
          <div className="wishlist-container">
            {wishListArray.map((val, i) => (
              <div key={i} className="product-card">
                <ProductCard val={val} checked={true} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col flex-wrap items-center justify-center">
            <div className="relative">
              <img
                src={`${process.env.REACT_APP_IMAGE}/all_products/wishlist.png`}
                alt="wishlist-image"
                className="w-[1211px] rounded-md shadow-lg"
              />
              <button
                className="py-2 px-2 md:px-4 bg-[#FF983B] text-white text-[14px] rounded-[3px] text-sm md:text-base whitespace-nowrap hover:text-[#FF983B] hover:bg-white border-[#FF983B] absolute top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => navigate("/category")}
              >
                Shop Now
              </button>
            </div>
          </div>
        )}

        <RecentViews />
        {openLogin ? <Login handelLogin={handelLogin} /> : ""}
      </div>
    );
  }
};

export default ProductByCategory;
