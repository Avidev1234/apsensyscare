import styled from '@emotion/styled';
import React, { useEffect } from 'react'
const HBanner = styled('div')`
width:100%;
height:550px;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items: flex-end;
@media (max-width: 768px) {
    height:230px;
  }
`
const Shipping = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', marginBottom: '20px' }}>
      <div style={{ width: '90%' }}>
        <HBanner>
          <img style={{ width: '100%', height: '500px', cursor: 'pointer' }} src='./Image/Poster/Shippng-banner01.jpg' alt='shipping-img' />
        </HBanner>
        <h1 className="text-3xl font-bold text-center py-4" style={{ textAlign: 'center' }}>Shipping Policy</h1>
        <p>
          Our products are delivered to all major pin codes across the country. You can confirm the same and delivery period by entering your pin code on any product page(minimum being 4 days and maximum duration being 15 days). We strictly deliver orders within the timeframe for a given pin code. Our delivery timelines are measured in working days excluding Sundays and public holidays. Customer will be informed in case of a dely. Fast/express delivery is applicable to some selected pin codes only. If express delivery is available for a pin code, it will be displayed during checkout, and an additional delivery fee is applicable for express deliveries.
        </p>
        <h2 className="text-3xl font-bold py-4">Returns Due To Non-Availability of Customer:</h2>
        <p>
          We always ensure our delivery is timely and safe. To help us with the same, kindly provide complete details of the shipping address including flat number, building number, street name, locality and nearest landmark. Please make sure the provided pincode is correct.
        </p>
        <p>
          In case the attempted delivery is not successful due to non-availability of the customer, the delivery will be reattempted the next day. In the event that product is not delivered in the second attempt, the product will be cancelled, sent back to its origin, and the refund will be processed as per our Refunds Policy. If you would still like to receive the product, we kindly request you to place the order again.
        </p>
        <h2 className="text-3xl font-bold py-4">Shipping Cost:</h2>
        <p>
          We offer free shipping on standard delivery orders worth Rs 599 or more. In case the order value is less than Rs 599, a shipping charge will be charged in respect to the pin code. Also, In the case of fast/express delivery, we offer free shipping for orders worth Rs 599 or more. In case the order value is less than Rs 599, a shipping charge will be charged in respect to the pin code.
        </p>
        <h2 className="text-3xl font-bold py-4">Cash on Delivery (COD): </h2>
        <p>
          Currently we do not have COD option. Our future plan is to deploy this option for a selected number of pin codes.
        </p>
        <h2 className="text-3xl font-bold py-4">Other Costs:</h2>
        <p>
          The prices and shipping charges mentioned on the website at the time of placing the order/transaction are final. We do not have any kind of hidden charges.
        </p>
        <h2 className="text-3xl font-bold py-4">FAQ</h2>
        <p>
          <ul className="list-decimal px-10">
            <li>
              How much time will it take to ship the product?
              <ul>
                <li>
                  Ans: Delivery time depends on the pin code.  You can check the same by entering the pin code during checkout.
                </li>
              </ul>
            </li>
            <li>
              If the product will be dispatched on the same day?
              <ul>
                <li>
                  Ans: Dispatch of a certain product depends on its availability with the seller.
                </li>
              </ul>
            </li>
            <li>
              What would the out of stock item process be like?
              <ul>
                <li>
                  Ans: If a purchased item shows ‘out of stock’, refund will be initiated immediately and credited within 7 working days.
                </li>
              </ul>
            </li>
            <li>
              After how much time you won’t take the return
              <ul>
                <li>
                  Ans: Customer must return the product within 7 days of delivery. Please check our Return Policy for more instructions
                </li>
              </ul>
            </li>
          </ul>
        </p>
        <h2 className="text-3xl font-bold py-4">Contact Us:</h2>
        <p>
          If you want to report a violation of the terms of use or this policy or if you have any questions or require assistance, <br/>
          Please contact: +91 7022478825
        </p>
        <p>
          Email: Support@apsensyscare.com
        </p>
      </div>
    </div>
  )
}

export default Shipping