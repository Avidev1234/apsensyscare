import React, { useEffect } from 'react'

const PaymentReturn = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', marginBottom: '20px' }}>
            <div style={{ width: '90%' }}>
                <h1 className="text-3xl font-bold text-center py-4" style={{ textAlign: 'center' }}>Payment terms and Return, Cancellation refund and exchange</h1>
                <h2 className="text-3xl font-bold py-4">Price and Payment Terms & Conditions</h2>
                <p>Terms of payment are strictly within our sole discretion. It is taken for granted that you represent and confirm that (i) the credit card information you enter during the transaction is true, correct, and complete, (ii) you are completely authorized to use such credit card for the purchase, (iii) charges incurred by you will be honored by your credit card company, and (iv) you will pay charges incurred by you at the posted prices, including all applicable taxes, if any.
                    <br />
                    Product prices posted on this website are subject to change without notice. The price charged for a particular product will be the price in effect at the time the order is placed and will be mentioned in your order confirmation email. Increase in price will only apply to the orders placed after such changes. Posted prices strictly do not include taxes or charges for shipping and handling. All such taxes and charges will be added to your purchase total and confirmation will be sent to your email.

                </p>
                <h2 className="text-3xl font-bold py-4">What circumstances allow me to exchange or return my product?</h2>
                <ul class="list-decimal px-10">
                    <li>The wrong item was shipped</li>
                    <li>Delivered was an expired good</li>
                    <li>Delivered product that has been physically damaged or has had its packaging altered</li>
                    <li>Order not completed; products missing</li>
                </ul>
                <h2 className="text-3xl font-bold py-4">What situations will result in the rejection of return or replacement requests? </h2>
                <ul class="list-decimal px-10">
                    <li>If the product is opened/ used/ altered</li>
                    <li>If the original packaging (mono cartons, labels, etc.) is missing</li>
                    <li>After 7 days from the delivery date, a return or replacement request is generated</li>
                    <li>After two days from the delivery date, the damaged or missing product is reported</li>
                </ul>
                <h2 className="text-3xl font-bold py-4">How will the returns be processed?</h2>
                <p>A pick up for the item is scheduled once you request to return a product. Within 5-7 business days of receiving your return request, one of our courier partners will come pick up the item. Then, a member of our quality control team brings this item back to our warehouse for inspection. A refund is initiated as soon as the product clears quality control.</p>

                <h2 className="text-3xl font-bold py-4">How will I get my money back for the cancelled or returned item?</h2>
                <p>For prepaid orders, money will be returned within 7 business working days to the bank account, credit or debit card, or method of payment. Customers who order cash on delivery must provide the bank information where they want to receive their refunds.</p>
                <h2 className="text-3xl font-bold py-4">How will I get my money back for the cancelled or returned item?</h2>
                <p>If you cancel your order, we will process your refund within 7 business days. In the event of a return, we will issue a refund after the product has been received by our warehouse and after a quality check has been completed. Please be aware that after the return has been picked up, the entire process takes 2 weeks.</p>
                <h2 className="text-3xl font-bold py-4">Can a part of my order be returned?</h2>
                <p>Yes. Within 7 days of delivery, you may return any items that are eligible for return.</p>
                <h2 className="text-3xl font-bold py-4">What You Can Expect From Us</h2>
                <h2 className="text-3xl font-bold py-4">How will I get my money back for the cancelled or returned item?</h2>
                <ul class="list-disc px-10">
                    <li>Step 1:
                        <ul class="list-disc px-10">
                            <li>If you received a defective or expired product, submit a return or replacement request within seven days of the delivery date(s)</li>
                            <li>Send an email to <a href="mailto:support@apsensyscare.com" style={{color:'blue'}}>support@apsensyscare.com</a> with your order and contact information</li>
                            <li>Additionally, you can use the Chat option to submit a request to us</li>
                            <li>Within two days of the date of delivery, file a return or replacement request for any damaged or missing items</li>
                        </ul>
                    </li>
                    <li>Step 2:
                        <ul class="list-disc px-10">
                            <li>Please allow us two working days to review your return request</li>
                        </ul>
                    </li>
                    <li>Step 3:
                        <ul class="list-disc px-10">
                            <li>Following review of your return request, we'll arrange for our courier partner to come pick up the items that were sent to you.</li>
                        </ul>
                    </li>
                    <li>Step 4:
                        <ul class="list-disc px-10">
                            <li>You will need to self-ship the product via any reputable courier partner if our reverse pick up service is not available at your location. We will credit your Paytm wallet or Apsensys Care wallet for the courier fees.</li>
                        </ul>
                    </li>
                    <li>Step 5:
                        <ul class="list-disc px-10">
                            <li>Upon receipt of your product(s), we will compare them to the claim and begin the replacement or refund process as necessary. Attention: Replacements are subject to stock availability.</li>
                        </ul>
                    </li>
                </ul>
                <h2 className="text-3xl font-bold py-4">Cancellation, Refund and Exchange</h2>
                <ul class="list-disc px-10">
                    <li>Status  of an order that has been placed and ‘confirmed’ cannot be changed</li>
                    <li>If you received something different from what you ordered or your order arrived to you in a distorted manner, you can cancel the product, exchange or you are entitled to a 100% refund.</li>
                    <li>Special rules for replacement shall apply if the product is purchased through a special promotional offer or any other special scheme.</li>
                    <li>The replacement process must be started within 24 hours of the user's order receipt. Before requesting a replacement, the product must be in an unused state and be accompanied by a copy of the original receipt or invoice that was issued at the time of the product's sale.</li>
                    <li>Any request for a replacement won't be granted until the product has been examined. The logistics partner will arrange for a pickup of the product from the address provided when the order was placed after the customer service department receives the replacement request. After the product is received, the inspection team needs about 1 working day to confirm the replacement. Upon verification that a replacement for the product is actually necessary, we will work with the user to replace the product in question within 3 working days.</li>
                    <li>We will send you emails and/or SMS updates at every stage of the replacement process. Nevertheless, feel free to contact us at <a href="mailto:support@apsensyscare.com" style={{color:'blue'}}>support@apsensyscare.com</a> if you have any questions before, during, or after the replacement is complete.</li>
                    <li>Under no circumstances will refunds be given; only replacements in relevant circumstances will be made</li>
                </ul>
            </div>
        </div>
    )
}

export default PaymentReturn