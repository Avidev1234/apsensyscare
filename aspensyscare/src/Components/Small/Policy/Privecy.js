import React, { useEffect } from 'react'

const Privecy = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify',marginBottom:'20px'}}>
      <div style={{ width: '90%' }}>
        <h1 className="text-3xl font-bold text-center py-4" style={{textAlign:'center'}}>Privacy Policy</h1>
        Your trust means everything to us and we do recognize the importance of secure transactions and information privacy. This privacy policy describes how Apsensys Care (Apsensys Care, we, our, us) collect, use, share or otherwise process your personal information through website. Your personal information will primarily be stored and processed in India and may have data protection laws that are different from those that apply in the country in which you are located. By visiting our website, providing your information or purchasing our products, you expressly agree to be bound by the terms and conditions of this privacy policy. If you do not agree please do not use or access our platform.
        <h2 className="text-3xl font-bold py-4">Collection of Your Information</h2>
        Your information is stored on our platform as you use it. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are actually required. You always have the option to not provide information by choosing not to use a feature on the Platform. Yes, we may track your product and service preferences and other information that you choose to provide on our platform. We use this information to do in-depth internal research on our users' interests, and behaviour to better understand our customers. We may collect personal information (such as email address, delivery address, name, phone number, and payment instrument details) from you when you set up an account or process a transaction. We retain this information to resolve disputes, provide better customer support, or for internal research and as allowed by law.
        <h2 className="text-3xl font-bold py-4">Use of Your </h2>
        We use your personal information to provide the product and services you request. We also provide you the ability to opt-out of such uses. We use your personal information in enhancing customer experience, resolve disputes, help promote a safe service, measure consumer interest in our products and services, inform you about offers, new products, relevant updates, customize and enhance your buying experience, and detect fraud and other criminal activity. We will occasionally ask you to participate in optional surveys conducted either by us or through a third-party market research agency. These surveys may ask you for personal information, and attributes such as your interests, household or lifestyle information, your purchasing behaviour or history, preferences, and other such information that you may choose to provide.
        <h2 className="text-3xl font-bold py-4">Cookies</h2>
        We use cookies on certain pages to help analyze our web page flow, and promote trust and safety. ‘Cookies’ are small files placed on your hard drive that help us in providing our services. They do not contain any of your personal information. We offer certain features that are only available through the use of a cookie. Cookies can also help us provide information that is targeted to your interests.
        <h2 className="text-3xl font-bold py-4">Sharing of personal information</h2>
        We may share personal information internally within affiliates, related companies and with other third parties for purposes of providing products and services offered by them. These entities and affiliates may share such information with their affiliates, business partners and other third parties for the purpose of providing you their products and services and may market to you as a result of such sharing unless you explicitly opt-out. We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to legal processes.
        <h2 className="text-3xl font-bold py-4">Links to Other Sites</h2>
        Our platform may provide links to other websites or application that may collect personal information about you.
        Security Precautions
        We maintain reasonable electronic and procedural safeguards to protect your information. We offer the use of a secure server whenever you access your account information. We adhere to our security guidelines to protect it against unauthorized access. However, by using the platform, the users accept the inherent security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the platform.
        <h2 className="text-3xl font-bold py-4">Children Information</h2>
        Use of our platform is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872. We do not knowingly solicit or collect personal information from children under the age of 18 years.
        <h2 className="text-3xl font-bold  py-4">Data Retention</h2>
        We may retain data related to you if we believe it may be necessary to prevent fraud or future abuse, to enable Apsensys Care to exercise its legal rights and/or defend against legal claims or if required by law or for other legitimate purposes. We may continue to retain your data in anonymised form for analytical and research purposes.
        <h2 className="text-3xl font-bold  py-4">Your Rights</h2>
        We take every reasonable step to ensure that your personal information that we process is accurate and, where necessary, kept up to date, and any of your personal information that we process that you inform us is inaccurate is erased or rectified. You may access, correct, and update your personal information directly through the functionalities provided on the platform. You have an option to withdraw your consent that you have already provided by writing to us at the contact information provided.
        <h2 className="text-3xl font-bold  py-4">Your Consent</h2>
        By visiting our platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information (including sensitive personal information) on the platform in accordance with this Privacy Policy. If you disclose to us any personal information relating to other people, you represent that you have the authority to do so and to permit us to use the information in accordance with this privacy policy.
        Changes to this Privacy Policy
        Please check our privacy policy periodically for changes. We may update it to reflect changes to our information practices.
      </div>
    </div>
    
  )
}

export default Privecy