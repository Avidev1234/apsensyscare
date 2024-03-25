import React, { useEffect } from 'react'

const TermsCondition = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', marginBottom: '20px' }}>
            <div style={{ width: '90%' }}>
                <h1 className="text-3xl font-bold text-center py-4" style={{ textAlign: 'center' }}>Terms and Conditions</h1>
                <p>The provisions of applicable laws, such as the consumer protection (e-commerce) rules 2020, which require publishing the rules and regulations, privacy policy, and terms and conditions for access or usage, are followed in the publication of this document. The information technology act of 2000 ("IT Act") and any rules issued thereunder, where appropriate, as well as the provisions relating to electronic records in various statutes as amended by the IT Act, specifically recognize this document as an electronic record.  </p>
                <p>
                    It is important that you carefully read these terms and conditions ("T&C"). You, along with anyone else who visits the website or orders a product from Apsensys Care (hereinafter referred to as  “company” or “us” or “we” or “Apsensys Care”), agree to be bound by all of the terms and conditions listed below by accessing, browsing, using, or otherwise making use of https://apsensyscare.com/ , its mobile version or mobile application.
                </p>
                <p>

                    The company retains the right to update or modify the T&C at any time by posting an updated or modified T&C on the Website, with or without previous notice. As soon as they are posted on this website, the modified T&C take effect.  </p>
                <p>
                    Apsensys Care reserves the right to amend or revise the T&C at any time. The amended T&C will be effective immediately after it is uploaded on this Website.
                </p>
                <p>
                    You may use the website only for authorized purposes.  If, in our sole judgement, we determine that a user has violated the terms of service or fair usage policy by their actions, we have the right to block that user and permanently disable their account.
                </p>
                <h2 className="text-3xl font-bold py-4">Website</h2>
                <ul class="list-decimal px-10">
                    <li>Your Account: You are only allowed to open and maintain one user account. You hereby accept responsibility for any activities that take place under your account and agree to keep your account and password secure as well as to restrict access to your computer. You hereby declare that any information you supply will not be treated as confidential or proprietary and will not violate any rights of a third party. Each account is not assignable and cannot be traded, sold, combined, or shared with any other person.</li>
                    <li>	Content: The website not only provides the products but also information and promotional resources. The information and content that are published on the website are not always created by the company; rather, they are frequently compiled from outside sources. The company expressly disclaims any and all liability in relation to the same and does not support any such information or content. Apsensys Care disclaims all liability and responsibility for any loss or harm that may arise from your access to or reliance on any such information or content. The content on this website is protected by Indian intellectual property laws to the extent that it was created by the company. Any unauthorized use of the material may violate copyright, trademark, and/or other laws. You accept that the content on this website is being used solely for your personal, non-commercial needs.</li>
                    <li>	Use of Website: Apsensys Care is not liable for any damage resulting from use of the website by anyone. You won't engage in any dubious activity on the website. You agree to: (a) use the website in accordance with all applicable local, state, national, and international laws and regulations, including those relating to intellectual property; (b) refrain from interfering with or otherwise interfering with another user's use of the website; (c) refrain from selling any content found on the website; (d) refrain from sending "spam," chain letters, junk mail, or any other form of unwanted communication; and (e) refrain from defamation.</li>
                    <li>	License: Without the company's or the relevant third party's express written consent (where third party content is involved), you are not permitted to copy, reproduce, transmit, distribute, or make derivative works of such content or information.</li>
                    <li>	Posting: By publishing, saving, or transmitting any content on the website, you hereby grant the company a perpetual, worldwide, non-exclusive, royalty-free, assignable right and licence to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit, and assign such content in any manner and throughout all known and hereafter developed media, subject to the company's privacy policy.</li>
                    <li>	Site security: It is against the law to breach or attempt to breach the website's security.</li>

                </ul>
                <h2 className="text-3xl font-bold py-4">Products </h2>
                <ul class="list-decimal px-10">
                    <li>Terms of offer: You accept the terms and conditions in this T&C by placing an order for products through the website. The products listed on the website, together with any samples we may give you, are solely intended for private use. Unless otherwise agreed, you may not sell or resell any of the products. In the event that we determine, in our sole discretion, that the provision of any products to you may result in a breach of our T&C, we retain the right to cancel or reduce the quantity of those products without prior notice.</li>
                    <li>Customer Solicitation: You are communicating with the company electronically when you access the website, place an order, or transmit any kind of information, and you consent to receiving communications (such as transactional, promotional, and/or commercial messages) from the company on a regular basis and as needed. Email, SMS, phone calls, putting notices on the website, and any other kind of communication are all ways in which we may contact you. However, at any point of time, you have the right to withdraw your consent.</li>
                    <li>	Property Rights: The company, its affiliates, partners, or licensors are the sole owners of all brand names that the company owns or has been granted a licence to use. These brand names are all protected by Indian law, including laws covering any kinds of intellectual property that may be relevant. Trade secrets and exclusive ownership of the products belong to the company. You may not, in whole or in part, or in any other way, copy, reproduce, modify, duplicate, republish, resell, or re-distribute any product made and/or disseminated by the company.</li>
                    <li>	Payment Method: The following methods of payment are available for the products that are offered on the website: Credit Cards, Debit Cards, Net Banking, Wallets, UPI, QR, PayPal and reward points. The Cash on Delivery option is also available.</li>
                    <li>	Pricing: Prices and availability of the products, offers, and services offered on the website are subject to change at the company's sole discretion without prior notice. Although delivery fees are not included in the prices listed on the website, they are inclusive of goods and sales tax ("GST").</li>
                    <li>	Delivery: Delivery may occur in several shipments for orders including several products. Typically, it takes 5-7 business days from the date of the order for delivery to occur. The anticipated shipping and delivery times will be shown on the order details page after the order has been placed. There can be some unforeseen delays that are out of our control because the estimated delivery periods are only estimates.</li>

                </ul>
                <h2 className="text-3xl font-bold py-4">Warranties</h2>
                <p>It is entirely at your own risk if you use the website or any of the products. The website and the products are offered on an ‘as is’ and ‘as available’ basis. Regarding the products or website content, as well as any reliance on or use of the website material or products, the company expressly disclaims any and all implied warranties, including but not limited to those of merchantability, fitness for a specific purpose, and non-infringement.</p>

                <p className=''>Contact us: If you have any queries about the products or the website, kindly get in touch with us.</p>
                <p>Email: hr@apsensyscare.com</p>

                <p>Phone Number: +91 9568256595</p>

                <p>Time: Monday-Friday (From 12:00 Pm to 9:00pm)
                </p>
            </div>
        </div>
    )
}

export default TermsCondition