import React from "react";
import { useNavigate } from "react-router-dom";
import RecentViews from "../LandingPage/Carousel/RecentViews";
import Login from "../../Login/Login";

const Loginbeforecart = (props) => {
  const isLoggedIn = sessionStorage.getItem("___user");
  const navigate = useNavigate();
  const { handelLogin, openLogin } = props;

  return (
    <div className=" p-6 mt-[30px]">
    <div className="flex flex-col items-center justify-center gap-6 ">
    <h3 className="text-3xl w-full font-medium  flex justify-start  ml-[200px] ">Shopping Cart</h3>
      {/* Conditional rendering based on isLoggedIn */}
      {!isLoggedIn ? (
        <div className=" w-[88%] flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
          <div className="bg-white p-4 shadow-md flex justify-center rounded-md md:w-full">
            <div className="flex items-center gap-10">
              <img
                src={`${process.env.REACT_APP_IMAGE}/all_products/carousel-100-100/sanitus-toilet-cleaner-1.png`}
                alt="Product Image"
                className="w-32 h-32 rounded object-cover "
              />
              <div className="text-center">
                <p className="text-gray-800 text-xl font-bold flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Added to Cart
                </p>
                <p className="text-green-600 text-xl">Product Name</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md md:w-1/5 h-[160px]">
            <div className="flex flex-col gap-4 items-center">
              <button
                className="bg-yellow-400 text-black px-4 py-2 rounded"
                onClick={() => handelLogin(true, 0)}
              >
                Proceed to Buy
              </button>
              <button
                className="border-2 border-gray-600 w-[140px] px-4 py-2 rounded"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={`${process.env.REACT_APP_IMAGE}/all_products/YOUR-CART-IS-EMPTY.png`}
          alt="Your Cart Is Empty"
          className="rounded-md shadow-lg"
        />
      )}
    </div>
    <RecentViews />
    {openLogin ? <Login handelLogin={handelLogin} /> : ""}
  </div>
  
  );
};

export default Loginbeforecart;
