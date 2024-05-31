import React, { useEffect, useState } from 'react';
import "../../../App.css"
import { useNavigate, useParams } from 'react-router-dom';
import { orderhistorydetails } from '../../../Api/Api';
import RecentViews from '../LandingPage/Carousel/RecentViews';

function Historydetails() {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState({})
    const [userDetails, setUserDetails] = useState({})
    const [order_lineDetails, setorder_lineDetails] = useState([])
    const [addressDetails, setAddressDetails] = useState({})
    const [updateproduct, setUpdateproduct] = useState({
        order_id: "",
        status: ""
    })
    // console.log("orderDetails", orderDetails);
    // console.log("order_lineDetails", order_lineDetails);

    useEffect(() => {
        orderhistorydetails({ order_id: id }).then((res) => {
            setOrderDetails(res.shoporder[0])
            setUserDetails(res.user[0])
            setorder_lineDetails(res.order_line)
            setAddressDetails(res.address[0])
        })
    }, [id])

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-4 mx-20">Your Order Details</h2>

            <div className="w-[100%] flex flex-wrap mx-16">

                <div className="w-full flex flex-col md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <div className=" bg-white rounded-lg shadow-md p-4 ">
                        

                            <div  className="flex flex-wrap mb-4">
                            {order_lineDetails.map((item, index) => (
                                <div key={index} className="w-1/2 h-42 p-2">
                                    <div className="image-containers flex flex-row">
                                        <img
                                            src={`https://apsensyscare.com/assets/all_products/${item.product_image}`}
                                            alt={item.name}
                                            className="w-1/2 object-cover rounded-md"
                                        />

{/* 
                                        <div className="w-1/2 p-2">
                                    <div className="image-containers">
                                        <img
                                            src={`https://apsensyscare.com/assets/all_products/${item.product_image}`}
                                            alt={item.name}
                                            className="w-1/2 object-cover rounded-md"
                                        />
                                    </div>
                                </div> */}
                                    </div>
                                </div>
                        ))}

                            </div>


                        {/* <p className="text-gray-600 mb-2">Tracking ID: <span className="font-semibold">654654</span></p> */}
                        <h2 className="text-lg font-semibold mb-2">Order #{orderDetails.order_id}</h2>
                        <p className="text-gray-600 mb-4">Date: {orderDetails.order_date}</p>
                        <p className="text-gray-600 mb-2">Products:</p>
                        <ul className="text-sm mb-2">
                            {order_lineDetails.map((item, index) => (
                                <li key={index}>
                                    <span className="font-semibold">{item.brand_name}</span> - Qty: {item.quantity.trim()} - Price: Rs {item.ordered_price.trim()}
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-600 font-semibold">Total: Rs {orderDetails.order_total}</p>
                    </div>
                </div>

          
            </div>
            <RecentViews />
        </div>
    )
}

export default Historydetails;
