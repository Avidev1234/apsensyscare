import React, { useEffect, useState } from 'react'
import "../../../App.css";
import { useNavigate, useParams } from 'react-router-dom';
import { orderhistorydetails } from '../../../Api/Api';

function Track() {
  const { id } = useParams();

  const [orderDetails, setOrderDetails] = useState({})
  const [userDetails, setUserDetails] = useState({})
  const [order_lineDetails, setorder_lineDetails] = useState([])
  const [addressDetails, setAddressDetails] = useState({})
  const [updateproduct, setUpdateproduct] = useState({
    order_id: "",
    status: ""
  })



  useEffect(() => {
    orderhistorydetails({ order_id: id }).then((res) => {
      setOrderDetails(res.shoporder[0])
      setUserDetails(res.user[0])
      setorder_lineDetails(res.order_line)
      setAddressDetails(res.address[0])
    })
  }, [id])
  const navigate = useNavigate();
  // console.log("setAddressDetails", addressDetails);
  // console.log("orderDetails", orderDetails);
  // console.log("order_lineDetails", order_lineDetails);
  return (
    <div className="container mx-auto p-8">
      <h3 className="text-2xl font-bold mb-4">Arriving today</h3>
      <div className="mx-auto  mb-8 product-Image ">
        {order_lineDetails.map((item, index) => (
          <div key={index}>
            <img src={`https://apsensyscare.com/assets/all_products/${item.product_image}`} alt="" />

          </div>


        ))
        }
      </div>


      <div className="w-full h-0.5 bg-gray-200 mb-8 product-line"></div>
      {/* <div className="w-1/2 h-2 bg-gray-200 rounded-full mt-10 mx-auto relative" id="progressBarContainer">
      <div id="progressBar" className="h-full bg-indigo-800 rounded-full transition-all duration-500">
        <div id="progressBarFill"></div>
      </div>
    
      <div className="absolute top-1/2 transform -translate-y-1/2 left-1/4 -translate-x-1/2 w-6 h-6 bg-indigo-800 rounded-full">
        <div className=" set text-center text-sm font-bold text-gray-700 mt-8">Ready to dispatch</div>
      </div>
    
      <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-800 rounded-full">
        <div className=" set text-center  text-sm font-bold  text-gray-700 mt-8">In Transit</div>
      </div>
    
      <div className="absolute top-1/2 transform -translate-y-1/2 left-3/4 -translate-x-1/2 w-6 h-6 bg-indigo-800 rounded-full">
        <div className=" set text-center font-bold text-sm inline-block text-gray-700 mt-8">Out for Delivery</div>
      </div>
    
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-3 w-6 h-6 bg-indigo-800 rounded-full">
        <div className=" set text-center text-sm font-bold mt-8">Ordered recieved</div>
      </div>
    
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-3 w-6 h-6 bg-indigo-800 rounded-full">
        <div className=" set text-center text-sm font-bold text-gray-700 mt-8">Delivered</div>
      </div>
    </div> */}

      {/* <script>
      var progressBar = document.getElementById("progressBar");
      var progressBarFill = document.getElementById("progressBarFill");
      var progressBarContainer = document.getElementById(
        "progressBarContainer"
      );

      progressBarContainer.addEventListener("click", function (e) {
        var mouseX =
          e.clientX - progressBarContainer.getBoundingClientRect().left;
        var width = (mouseX / progressBarContainer.offsetWidth) * 100;
        progressBar.style.width = width + "%";
        progressBarFill.style.width = width + "%";
      });
    </script> */}

      <div className="h-full w-full py-16">
        <div className="container mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div
          className="w-full md:w-1/3 border-gray-300 border-4 p-3 mb-4 md:mb-0 mobile-border"
        >
          <p className="font-bold text-xl">Shipped From</p>
          <p className="mt-2">
            Apsensys Care Solution Pvt Ltd.,
            No: 105, Apsensys Business Tower, Service Road, Hormavu, Bengaluru, Karnataka 560043. <br />
            sales@apsensyscare.com.  <br /> <strong>FOR ANY HELP, YOU MAY CALL US AT +91 7996997979</strong>
          </p>
          <hr className="mobile-line" />
        </div>
        <div
          className="w-full md:w-1/3 border-gray-300 border-4 p-3 mx-0 md:mx-10 mb-4 md:mb-0 mobile-border"
        >
          <p className="font-bold text-xl">Shipping Address</p>
          <br />
          <strong>

            <p class="text-sm md:text-base">

              {addressDetails.name},{addressDetails.contact},<br />
              {addressDetails.house_flat_office},<br />{addressDetails.area_landmark},<br />{addressDetails.city},{addressDetails.state},{addressDetails.pincode}
            </p>
          </strong>

          <hr className="mobile-line" />
        </div>
        <div className="w-full md:w-1/3 border-gray-300 border-4 p-4 mobile-border order-info">
          <p className="font-bold text-xl">Order Info</p>
          <p className="mt-2">
            <a onClick={() => navigate('/history-details')}>See Your Orders Details here</a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Track