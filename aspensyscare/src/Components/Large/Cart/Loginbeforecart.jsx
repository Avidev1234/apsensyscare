import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RecentViews from "../LandingPage/Carousel/RecentViews";
import Login from "../../Login/Login";
import "./Cart.css";

function Loginbeforecart(props) {
  const navigate = useNavigate();
  const { handelLogin, openLogin } = props;
  const location = useLocation();

  // Access product object from location state
  const product = location.state && location.state.product;
  console.log("cartbeforeloginproduct", product);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold ml-[85px]">Shopping Cart</h3>
      <div className="flex items-center justify-center gap-6">
        <div className=" style flex styles  flex-col justify-center bg-white p-4 first rounded-md w-[66%] ">
          <div className="flex items-center gap-20 justify-center">
            {/* Render product details */}
            <img
              src={`https://apsensyscare.com/assets/all_products/${product.product_image}`} // Example: Replace with actual image source
              alt="Product Image"
              className="w-auto h-44 rounded transition duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="text-center">
              <p className="text-gray-800 text-xl font-bold gap-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <circle cx="12" cy="12" r="12" fill="green" />
                  <path
                    d="M10 16l-4-4 1.5-1.5L10 13l6-6L17.5 8l-7 7z"
                    fill="white"
                    transform="translate(1, 1)"
                  />
                </svg>
                Added to Cart
              </p>
              <p className="text-green-600 text-xl">{product.brand_name}</p>
              {/* <p className="text-green-600 text-">{product.short_name}</p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col style justify-center styles w-[20%] items-center  bg-white p-4 h-[208px]  second rounded-md">
          <div className="flex flex-col length gap-4">
            <button
              className="bg-yellow-400 text-black px-4 py-2 w-[250px] rounded transition duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-105"
              onClick={() => handelLogin(true, 0)}
            >
              Proceed to Buy
            </button>
            <button
              className="transparent border-[1px] border-grey-600 text-gray-700 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-grey-300 hover:text-black hover:scale-105"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <RecentViews />
        {openLogin ? <Login handelLogin={handelLogin} /> : ""}
      </div>
    </div>
  );
}

export default Loginbeforecart;
