import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sitemap = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const Redirect = (text) => {
    if (text === "privacy") {
      navigate("/privacy-policy");
    } else if (text === "contact") {
      navigate("/contact-us");
    } else if (text === "about") {
      navigate("/about-us");
    } else if (text === "career") {
      navigate("/career");
    } else if (text === "sitemap") {
      navigate("/sitemap");
    } else if (text === "payment-return") {
      navigate("/payment-return-cancellation");
    } else if (text === "terms&condition") {
      navigate("/terms-condition");
    } else if (text === "shipping") {
      navigate("/shipping");
    } else if (text === "home") {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto pb-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Apsensyscare Sitemap
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3
              className="text-2xl text-black font-bold cursor-pointer underline mb-4 pl-5 text-left"
              onClick={() => navigate("/category/home-care/c/1?categoryId=1")}
            >
              Home Care
            </h3>
            <ul className="pl-5 text-left">
              <li>
                <a
                  href="https://apsensyscare.com/product/1/1/sanitus-toilet-cleaner"
                  className="text-blue-600 hover:underline"
                >
                  SANITUS Toilet Cleaner
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner"
                  className="text-blue-600 hover:underline"
                >
                  NEXPRO Citrus Floor Cleaner
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/1/5/nexpro-floral-floor-cleaner"
                  className="text-blue-600 hover:underline"
                >
                  NEXPRO Floral Floor Cleaner
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/1/6/nexpro-jasmine-floor-cleaner"
                  className="text-blue-600 hover:underline"
                >
                  NEXPRO Jasmine Floor Cleaner
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/1/15/nexpro-glass-and-multi-surface-cleaner"
                  className="text-blue-600 hover:underline"
                >
                  NEXPRO Glass and Multi Surface Cleaner
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/1/25/nexpro-phenyl"
                  className="text-blue-600 hover:underline"
                >
                  NEXPRO All In One Phenyl White
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3
              className="text-2xl text-black font-bold cursor-pointer underline mb-4 pl-5 text-left"
              onClick={() =>
                navigate("/category/kitchen-care/c/2?categoryId=2")
              }
            >
              Kitchen Care
            </h3>
            <ul className="pl-5 text-left">
              <li>
                <a
                  href="https://apsensyscare.com/product/2/17/stainpro-lemon-dish-wash-gel"
                  className="text-blue-600 hover:underline"
                >
                  STAINPRO Lemon Dish Wash Gel
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm ">
            <h3
              className="text-2xl text-black font-bold cursor-pointer underline mb-4 pl-5 text-left"
              onClick={() => navigate("/category/skin-care/c/5?categoryId=5")}
            >
              Skin Care
            </h3>
            <ul className="pl-5 text-left">
              <li>
                <a
                  href="https://apsensyscare.com/product/5/11/hopelife-lemon-grass-sanitizer-gel"
                  className="text-blue-600 hover:underline"
                >
                  HOPELIFE Lemon Grass Sanitizer Gel
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/5/13/hopelife-sandal-wood-sanitizer-gel"
                  className="text-blue-600 hover:underline"
                >
                  HOPELIFE Sandal Wood Sanitizer Gel
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/5/14/hopelife-green-apple-sanitizer-liquid"
                  className="text-blue-600 hover:underline"
                >
                  HOPELIFE Green Apple Sanitizer Liquid
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/5/19/hopelife-green-apple-hand-wash"
                  className="text-blue-600 hover:underline"
                >
                  HOPELIFE Green Apple Hand Wash
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/5/20/hopelife-sandal-wood-hand-wash"
                  className="text-blue-600 hover:underline"
                >
                  HOPELIFE Sandal Wood Hand Wash
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/5/21/hopelife-aqua-mint-hand-wash"
                  className="text-blue-600 hover:underline"
                >
                  HOPELIFE Aqua Mint Hand Wash
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3
              className="text-2xl text-black font-bold cursor-pointer underline mb-4 pl-5 text-left"
              onClick={() => navigate("/category/body-care/c/7?categoryId=7")}
            >
              Body Care
            </h3>
            <ul className="pl-5 text-left">
              <li>
                <a
                  href="https://apsensyscare.com/product/7/22/clearsoft-alovera-with-neem-body-wash"
                  className="text-blue-600 hover:underline"
                >
                  CLEARSOFT Alovera With Neem Body Wash
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/7/23/clearsoft-lemon-oil-with-cool-mint-body-wash"
                  className="text-blue-600 hover:underline"
                >
                  CLEARSOFT Lemon Oil With Cool Mint Body Wash
                </a>
              </li>
              <li>
                <a
                  href="https://apsensyscare.com/product/7/24/clearsoft-frangi-pani-with-glycerine-body-wash"
                  className="text-blue-600 hover:underline"
                >
                  CLEARSOFT Frangi Pani With Glycerine Body Wash
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3
              className="text-2xl text-black font-bold cursor-pointer underline mb-4 pl-5 text-left"
              onClick={() => Redirect("about")}
            >
              About
            </h3>
            <div className="w-full flex flex-col  pl-5">
              <p
                className="font-[400] leading-[25px] text-[16px] cursor-pointer text-blue-600 hover:underline py-1"
                onClick={() => Redirect("contact")}
              >
                Contacts Us
              </p>
              <p
                className="font-[400] leading-[25px] text-[16px] cursor-pointer text-blue-600 hover:underline"
                onClick={() => Redirect("career")}
              >
                Careers
              </p>
            </div>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3
              className="text-2xl text-black font-bold cursor-pointer underline mb-4 pl-5 text-left"
              onClick={() => Redirect("terms&condition")}
            >
              Consumer Policy
            </h3>
            <div className="w-full flex flex-col  pl-5">
              <p
                className="font-[400] leading-[25px] text-[16px] cursor-pointer text-blue-600 hover:underline py-1"
                onClick={() => Redirect("payment-return")}
              >
                Payment Return & Cancellation
              </p>
              <p
                className="font-[400] leading-[25px] text-[16px] cursor-pointer text-blue-600 hover:underline"
                onClick={() => Redirect("privacy")}
              >
                Privacy Policy
              </p>
              <p
                className="font-[400] leading-[25px] text-[16px] cursor-pointer text-blue-600 hover:underline"
                onClick={() => Redirect("shipping")}
              >
                Shipping Policy
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
