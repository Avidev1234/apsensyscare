import React, { useEffect, useState } from 'react';
import "../../../App.css"
import { orderhistory } from '../../../Api/Api';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Deliveredtable() {
    const [deliveredtable, setDeliveredtable] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem('___user');
        if (user) {
            orderhistory({ user_id: user, status: "Delivered" })
                .then((res) => {
                    setDeliveredtable(res);
                    // console.log("Response is", res);
                })
                .catch((error) => {
                    console.error("Error fetching order history:", error);
                });
        }
    }, []);

    if (!sessionStorage.getItem('___user')) {
        return (
            <div className='w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5 bg-[#d2efff]'>
                <Helmet>
                    <title>{ }</title>
                    <meta name="description" content={""} />
                </Helmet>
                <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-10'>
                    <img src='./Image/Poster/empty-wishlist-ACS2.jpg' alt='' />
                    <button className='px-5 py-1 bg-white border-2 border-[blue]'>Login</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-semibold mb-4 order-history">
                    Your Order History
                </h2>
                <div className="flex flex-col ">
                    {deliveredtable.map((order, index) => (
                        <div key={index} className="bg-white shadow-md p-4 order-card">
                            <div className="product-images">
                                <img
                                    src={`https://apsensyscare.com/assets/all_products/${order.product_image}`}
                                    alt={order.short_name}
                                    className="product-image rounded-md"
                                />
                            </div>
                            <div className="product-details">
                                <p className="text-gray-600 mb-2 font-semibold">
                                    Date: <span className="font-bold">{order.order_date}</span>
                                </p>
                                <h2 className="text-lg font-semibold mb-2">Order #{order.order_id}</h2>
                                <p className="text-gray-600 mb-2">Products:</p>
                                <ul className="text-sm mb-4">
                                    <li>
                                        <a
                                            href="#"
                                            className="font-bold text-base text-blue-700 hover:underline"
                                        >{order.short_name}</a>
                                        - Qty: {order.quantity}
                                    </li>
                                </ul>
                                <p className="text-gray-600 font-semibold total-amount">
                                    Total-amount: Rs {order.order_total}
                                </p>
                                {/* <button className="buy"> Buy It Again </button> */}
                            </div>
                            <div className="button-group">
                                <button className="track" onClick={() => navigate(`/track/${order.order_id}`)}>Track</button>
                                {/* <button onClick={() => navigate(`/history-details`)}>Product Details</button> */}
                                <button onClick={() => navigate(`/history-details/${order.order_id}`)}>Product Details</button>
                                {/* <button onClick={() => navigate(`/invoice`)}>Print Slip</button> */}
                                <button onClick={() => navigate(`/invoice/${order.order_id}`)}>Print Slip</button>
                               
                            </div>
                            <a href="your-page.html">
                                <img src="arrow.png" alt="Arrow Icon" className="arrow-icon" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
