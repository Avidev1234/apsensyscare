import React, { useRef,useState,useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../../../App.css";
import { orderhistorydetails } from '../../../Api/Api';
import {  useParams } from 'react-router-dom';

function Invoice() {
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
  const componentRef = useRef();
  console.log("setAddressDetails", addressDetails);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'invoice',
  });

  return (
    <div>
      <div
        className="max-w-3xl mx-auto p-6 bg-white rounded shadow-sm my-6"
        id="invoice"
        ref={componentRef}
      >
        <p className="flex justify-center font-bold underline mt-0 text-xl">
          Invoice
        </p>

        <div className="flex justify-between items-center">
          <div>
            <img
              src="LOGO.png"
              alt="company-logo"
              height="130"
              width="150"
              className="mt-8"
            />
          </div>

          <div className="text-right">
            <p>Apsensys Care</p>
            <p className="text-gray-500 text-sm">sales@apsensyscare.com</p>
            <p className="text-gray-500 text-sm mt-1">+91 7996997979</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="font-bold text-gray-800">Bill to :</p>
            <p class="text-sm md:text-base">

              {addressDetails.name},{addressDetails.contact},<br />
              {addressDetails.house_flat_office},<br />{addressDetails.area_landmark},<br />{addressDetails.city},{addressDetails.state},{addressDetails.pincode}<br />{addressDetails.email}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm">
              GSTIN.:
              <span className="text-gray-500 text-sm">29GGGGG1314R9Z6</span>
            </p>
            <p className="text-sm">
              Invoice date: <span className="text-gray-500 text-sm">03/07/2023</span>
              <br />
            </p>
          </div>
        </div>

        <div className="-mx-4 mt-8 flow-root sm:mx-0">
          <table className="min-w-full">
            <colgroup>
              <col className="w-full sm:w-1/2" />
              <col className="sm:w-1/6" />
              <col className="sm:w-1/6" />
              <col className="sm:w-1/6" />
            </colgroup>
            <thead className="border-b border-gray-300 text-gray-900">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Items
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-600 font-bold">Sanitus</div>
                  <div className="mt-1 truncate text-gray-500">
                    Sanitus Disinfectant Toilet Cleaner
                  </div>
                </td>
                <td
                  className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                >
                  500.0
                </td>
                <td
                  className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                >
                  Rs 100.00
                </td>
                <td
                  className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0"
                >
                  Rs 5,000.00
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-600 font-bold">Nexpro</div>
                  <div className="mt-1 truncate text-gray-500">
                    NEXPRO Disinfectant Surface & Floor Cleaner
                  </div>
                </td>
                <td
                  className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                >
                  500.0
                </td>
                <td
                  className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                >
                  Rs 100.00
                </td>
                <td
                  className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0"
                >
                  Rs 5,000.00
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-600 font-bold">Hope life</div>
                  <div className="mt-1 truncate text-gray-500">
                    Hopelife hand wash liquid green apple
                  </div>
                </td>
                <td
                  className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                >
                  50.0
                </td>
                <td
                  className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                >
                  Rs 100.00
                </td>
                <td
                  className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0"
                >
                  Rs 500.00
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan="3"
                  className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Subtotal
                </th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Subtotal
                </th>
                <td
                  className="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0"
                >
                  Rs 10,500.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colSpan="3"
                  className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Tax
                </th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Tax
                </th>
                <td
                  className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0"
                >
                  Rs 1,050.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colSpan="3"
                  className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Discount
                </th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Discount
                </th>
                <td
                  className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0"
                >
                  -Rs 500.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colSpan="3"
                  className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-700 sm:table-cell sm:pl-0"
                >
                  Total
                </th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-700 sm:hidden"
                >
                  Total
                </th>
                <td
                  className="pl-3 pr-6 pt-4 text-right text-sm text-gray-700 sm:pr-0"
                >
                  Rs 11,050.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="px-4 py-2 text-sm text-blue-600 bg-white border border-blue-600 rounded shadow-sm font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handlePrint}
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
}

export default Invoice;
