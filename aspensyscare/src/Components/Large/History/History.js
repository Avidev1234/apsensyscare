import React, { useEffect, useState } from 'react';
import { orderCommand } from '../../../Api/Api';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Deliveredtable() {
    const [deliveredtable, setDeliveredtable] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        orderCommand({ status: "Delivered" })
            .then((res) => {
                setDeliveredtable(res);
                console.log("Response is", res);
            })
            .catch((error) => {
                console.error("Error fetching order history:", error);
            });
    }, []);
    const openOrderDetails = (orderId) => {
        navigate(`/history/orderhistory/${orderId}`)
    }
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
            <div className='w-full flex flex-col'>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr >
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                <span>Date</span>
                            </th>
                            <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-700">
                                Reference
                            </th>
                            {/* <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                Customer
                            </th> */}
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                Address
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                Nb Item
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {deliveredtable.map((dtable) => (
                            <tr key={dtable.id} className='hover cursor-pointer' onClick={() => openOrderDetails(dtable.order_id)}>
                                <td className="whitespace-nowrap px-4 py-4">
                                    <div className="text-sm font-medium text-gray-900">{dtable.order_date}</div>
                                </td>
                                <td className="whitespace-nowrap px-12 py-4">
                                    <div className="text-sm text-gray-900">{dtable.order_id.trim()}</div>
                                </td>
                                {/* <td className="whitespace-nowrap px-4 py-4">
                                    <div className="text-sm text-gray-900">{dtable.name}</div>
                                </td> */}
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                    {`${dtable.house_flat_office}, ${dtable.area_landmark}, ${dtable.city}, ${dtable.state}, ${dtable.pincode}`}
                                </td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                                    {dtable.total_quantity.trim()}
                                </td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                                    {dtable.order_total}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
