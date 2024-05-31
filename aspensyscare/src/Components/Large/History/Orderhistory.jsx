import React, { useEffect, useState } from 'react'
import { fetchorderDetails } from '../../../Api/Api'
import { useParams } from 'react-router-dom';
export default function Orderhistory() {
    const [order_lineDetails, setorder_lineDetails] = useState([])
  const [orderDetails, setOrderDetails] = useState({})

    const { id } = useParams();
    useEffect(() => {
        fetchorderDetails({ order_id: id }).then((res) => {
            setOrderDetails(res.shoporder[0])
            setorder_lineDetails(res.order_line)
        })
    }, [id]) 
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-4">Your Order History</h2>

            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    {order_lineDetails.map((product) => (
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-wrap mb-4">
                                <div className="w-1/2 p-2">
                                    <img
                                       src={`https://apsensyscare.com/assets/all_products/${product.product_image}`}
                                        alt="Product Image 1"
                                        
                                    />
                                </div>
                                
                            </div>
                            <h2 className="text-lg font-semibold mb-2">{orderDetails?.order_id}</h2>
                            {/* <p className="text-gray-600 mb-4">Date: May 15, 2024</p> */}
                            <p className="text-gray-600 mb-2">Products details:</p>
                            <ul className="text-sm mb-4">
                                <li>{product.name}</li>
                                <li>{product.department}</li>
                            </ul>
                            <p className="text-gray-600 font-semibold">{product.ordered_price}.00</p>
                        </div>
                    ))}
                </div>
                {/* <div className="w-full flex items-center justify-center bg-t">
                    <div className="grid w-full grid-cols-12 px-4 md:px-18 gap-5">
                        <div className="col-span-12">
                            <p className="text-gray-800 text-3xl font-semibold">
                                You might be interested in
                            </p>
                        </div>
                        <a className="col-span-6 md:col-span-3 flex flex-col items-center justify-center border border-gray-300" href="">
                           

                            <div className="bg-gray-200 max-h-56 w-full flex items-center justify-center image-container">
                                <img src="https://apsensyscare.com/assets/all_products/sanitus-toilet-cleaner.png" className="max-h-56 p-4" />
                            </div>
                            <div className="bg-white h-72 text-black w-full p-3">
                                <p className="text-xl md:text-3xl pt-5">sanitus</p>
                                <p className="text-xs md:text-lg font-light pt-3 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus vero. Cupi</p>
                            </div>
                        </a>
                        <a className="col-span-6 md:col-span-3 flex flex-col items-center justify-center border border-gray-300" href="">
                          

                            <div className="bg-gray-200 max-h-56 w-full flex items-center justify-center image-container">
                                <img src="https://apsensyscare.com/assets/all_products/sanitus-toilet-cleaner.png" className="max-h-56 p-4" />
                            </div>
                            <div className="bg-white h-72 text-black w-full p-3">
                                <p className="text-xl md:text-3xl pt-5">sanitus</p>
                                <p className="text-xs md:text-lg font-light pt-3 pb-10">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus vero. Cupi
                                </p>
                            </div>
                        </a>
                        <a className="col-span-6 md:col-span-3 flex flex-col items-center justify-center border border-gray-300" href="">
                           

                            <div className="bg-gray-200 max-h-56 w-full p-4 md:p-98 flex items-center justify-center image-container">
                                <img src="https://apsensyscare.com/assets/all_products/sanitus-toilet-cleaner.png" className="max-h-56 p-4" />
                            </div>
                            <div className="bg-white h-72 text-black w-full p-3">
                                <p className="text-xl md:text-3xl pt-5">nexpro</p>
                                <p className="text-xs md:text-lg font-light pt-3 pb-10">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus vero. Cupi
                                </p>
                            </div>
                        </a>
                        <a className="col-span-6 md:col-span-3 flex flex-col items-center justify-center border border-gray-300" href="">
                           

                            <div className="bg-gray-200 max-h-56 w-full flex items-center justify-center image-container">
                                <img src="https://apsensyscare.com/assets/all_products/sanitus-toilet-cleaner.png" className="max-h-56 p-4" />
                            </div>
                            <div className="bg-white h-72 text-black w-full p-3">
                                <p className="text-xl md:text-3xl pt-5">nexpro</p>
                                <p className="text-xs md:text-lg font-light pt-3 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus vero. Cupi</p>
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
