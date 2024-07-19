import React, { useEffect, useState } from "react";
import "../../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { orderhistorydetails } from "../../../Api/Api";

function Track() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [orderLineDetails, setOrderLineDetails] = useState([]);
  const [addressDetails, setAddressDetails] = useState({});
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [animateProgress, setAnimateProgress] = useState(false);

  const statusMap = {
    "payment_pending": 0,
    "ordered_received": 0,
    "dispatch": 25,
    "in_transit": 50,
    "out_for_delivery": 75,
    "delivered": 100,
  };

  const progressSteps = [
    { step: "Ordered received", percentage: 0 },
    { step: "Ready to Dispatch", percentage: 25 },
    { step: "In Transit", percentage: 50 },
    { step: "Out for Delivery", percentage: 75 },
    { step: "Delivered", percentage: 99 },
  ];

  useEffect(() => {
    orderhistorydetails({ order_id: id }).then((res) => {
      setOrderDetails(res.shoporder[0]);
      setUserDetails(res.user[0]);
      setOrderLineDetails(res.order_line);
      setAddressDetails(res.address[0]);

      const orderStatus = res.shoporder[0]?.order_status?.trim().toLowerCase();
      const targetPercentage = statusMap[orderStatus] || 0;

      // Start animation
      setAnimateProgress(true);
      setTimeout(() => {
        setProgressPercentage(targetPercentage);
      }, 100); // Small delay to allow the CSS transition to apply
    });
  }, [id]);

  console.log("orderDetails", orderDetails);

  const renderProgressBar = () => (
    <div className="w-1/2 mx-auto mt-10">
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className={`absolute h-full bg-green-700 rounded-full ${
            animateProgress ? "transition-all duration-1000 delay-500" : ""
          }`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
        {progressSteps.map((step, index) => (
          <div
            key={index}
            style={{ left: `${step.percentage}%` }}
            className={`absolute top-1/2 top-[17px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${
              progressPercentage >= step.percentage
                ? "text-green-600"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center ${
                progressPercentage >= step.percentage
                  ? "bg-green-600"
                  : "bg-gray-200"
              } rounded-full`}
            >
              {progressPercentage >= step.percentage && (
                <span className="text-white font-bold">✓</span>
              )}
            </div>
            <div className="mt-2 text-center text-sm font-bold">
              {step.step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-8">
      {/* <h3 className="text-2xl font-bold mb-4">{orderDetails.order_status}</h3> */}
      <div className="mx-auto mb-8 product-Image">
        {orderLineDetails.map((item, index) => (
          <div key={index}>
            <img
              src={`https://apsensyscare.com/assets/all_products/${item.product_image}`}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="w-full h-0.5 bg-gray-200 mb-8 product-line"></div>

      {orderDetails.order_status && (
        <>
          {orderDetails.order_status.toLowerCase() === "Payment Pending" ? (
            <div className="text-center text-sm font-bold text-red-700 mt-8">
              Order status is 'payment pending'. Progress bar is not displayed.
            </div>
          ) : (
            renderProgressBar()
          )}
        </>
      )}

      <div className="h-full w-full py-16">
        <div className="container mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 border-gray-300 border-4 p-3 mb-4 md:mb-0 mobile-border">
          <p className="font-bold text-center text-xl">Shipped From</p>
          <p className="mt-2 text-center p-3">
            Apsensys Care Solution Pvt Ltd., No: 105, Apsensys Business Tower,
            Service Road, Hormavu, Bengaluru, Karnataka 560043. <br />
            sales@apsensyscare.com. <br />{" "}
            <strong>FOR ANY HELP, YOU MAY CALL US AT +91 7996997979</strong>
          </p>
          <hr className="mobile-line" />
        </div>
        <div className="w-full md:w-1/3 border-gray-300 border-4 p-3 mx-0 md:mx-10 mb-4 md:mb-0 mobile-border">
          <p className="font-bold text-center text-xl">Shipping Address</p>
          <br />
          <strong>
            <p className="w-full text-sm md:text-base text-center ">
              {addressDetails.name},{addressDetails.contact},<br />
              {addressDetails.house_flat_office},<br />
              {addressDetails.area_landmark},<br />
              {addressDetails.city},{addressDetails.state},
              {addressDetails.pincode}
            </p>
          </strong>
          <hr className="mobile-line" />
        </div>
        <div className="w-full md:w-1/3 border-gray-300 border-4 p-3  mobile-border order-info">
          <p className="font-bold text-center text-xl">Order Info</p>
          <p className="mt-2 text-center ">
            {orderLineDetails.map((order, index) => (
              <div key={index}>
                <p>{order.name}</p>
                <button
                  className="text-blue-500"
                  onClick={() => navigate(`/history-details/${order.order_id}`)}
                >
                  View
                </button>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Track;
