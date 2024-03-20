import React, { useEffect } from "react";
import Slider from "react-slick";

function AboutUs() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="p-10 text-justify">
        <h1 className="text-3xl font-bold text-center py-4">About Us</h1>
        <p className="my-4 text-xl">
          Quality and customers are at the forefront here at Apsensys Care, and
          we are relatively very successful in delivering high-quality daily
          essentials for our consumers. Our expertise in home and hygiene
          essentials ranges across several niches, but one thing that remains
          constant at Apsensys Care is the focus on delivering quality and
          trustworthy products
        </p>
        <p className="my-4 text-xl">
          We work diligently to promote healthy products that have helped us
          achieve higher status among our competitors and serve as an example to
          other up-and-coming entities in the market. With over (50) products in
          our arsenal under major categories like home and hygiene, skincare,
          cosmetics, haircare, and oral care, we are committed to allowing our
          consumers to experience high-quality and reliable products at
          affordable prices.
        </p>
        <h2 className="font-bold text-2xl my-10">Facilities</h2>
        <p className="my-4 text-xl">
          Apsensys Care is well-equipped with world-class infrastructure to
          produce better products consistently. Our team of experts was
          handpicked to craft products of great value for our consumers. The
          intent that is fostered within the team is monumental because of the
          reach we have in the global marketplace. We at Apsensys Care use
          contemporary methods and the latest machinery to keep refining the
          products for the greater good of our consumers.
        </p>
        <h2 className="font-bold text-2xl my-10">Innovation</h2>
        <p className="my-4 text-xl">
          We are always ahead of the rest when it comes to reinventing every
          important part of our business. When the process of innovation starts
          at Apsensys Care, we try to find inspiration from our consumers –
          their demands, values, trends, and likes and dislikes. Listening to
          our consumers has provided us with great insights to promote growth
          and innovation.
        </p>
        <h2 className="font-bold text-2xl my-10">Safety</h2>
        <p className="my-4 text-xl">
          Each and every ingredient goes through rigorous quality checks and our
          main motto is to deliver safe products to consumers. All the
          regulations are followed and safety codes are up to international
          standards at Apsensys Care. Before including any ingredient in our
          product it will be properly evaluated to make sure that it is safe for
          our consumers as well as the environment. If any ingredient fails to
          meet our expectations, our experts will go back to square one and
          start over again until the desired results are met.
        </p>
        <h2 className="font-bold text-2xl my-10">What’s inside?</h2>
        <p className="my-4 text-xl">
          Any questions regarding the ingredient that goes inside your products
          are always welcome. All the information mentioned on the product is
          very reliable and clear with better accessibility. In case you don’t
          find what you are looking for in the product, kindly reach out to us
          so that we can better ourselves and stick to our motto. Users
          generally have mixed opinions on natural and man-made ingredient
          choices. The truth is that every ingredient has its own safety range
          irrespective of origin.
        </p>
      </div>
      <div className="bg-teal-200">
        <div className="grid md:grid-cols-2 p-10 md:p-20 gap-10">
          <div className="bg-white text-center p-10">
            <h3 className="font-bold text-2xl my-5 border-b pb-3">
              Our Vision
            </h3>
            <p>
              To serve as an example to other up-and-coming people and
              hygiene-focused company in the market
            </p>
          </div>
          <div className="bg-white text-center p-10">
            <h3 className="font-bold text-2xl my-5 border-b pb-3">
              Our Mission
            </h3>
            <p>
              To remain committed as a people-focused health & hygiene company
              offering most trusted and environmentally friendly products
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-6 ">
        <h2 className="font-bold text-2xl my-10 text-center">Our Management</h2>
        <div>
          <Slider {...settings}>
            <div>
              <div className="w-full flex flex-col justify-center items-center px-4 py-4 text-center border gap-y-4">
                <div className="w-[200px] h-[200px] rounded-full">
                  <img className="w-[200px] h-[200px] rounded-full" src="/Image/About/pavan.webp" alt="" />
                </div>
                <div className="w-full lg:w-[70%] ">
                  <p className="text-blue-500">CEO</p>
                  <p>
                    Kalla Pavan Kumar is the CEO of Apsensys Care. His leadership is marked by a strategic vision and a deep understanding of the FMCG sector. He has guided the company with measured strategies and a clear direction, ensuring growth and success.
                  </p>
                  <p >
                    Mr. Pavan Kumar has a lot of experience in Search Engine Optimization, networking, infrastructure, server administration, and technical support in the network fields, making him a great fit for a CEO role in an FMCG company. Mr. Pavan Kumar holds a Bachelor's degree in Information Technology from Lenora Engineering College, East Godavari District.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col justify-center items-center px-4 py-4 text-center border gap-y-4">
                <div className="w-[200px] h-[200px] rounded-full">
                  <img className="w-[200px] h-[200px] rounded-full" src="/Image/About/girish.webp" alt="" />
                </div>
                <div className="w-full lg:w-[70%] ">
                  <p className="text-blue-500">COO and CMO</p>
                  <p>
                    Girish M. serves as the Chief Operating Officer and Chief Marketing Officer of Apsensys Care. His remarkable reservoir of patience, exceptional people management skills, and unwavering commitment to perfection make him the driving force behind the seamless day-to-day operations of Apsensys Care.
                  </p>
                  <p >
                    Mr. Girish's interests in networking, technology, and management form the foundation of his expertise as COO and CMO.
                  </p>
                  <p>When he's not working, Mr. Girish enjoys playing cricket, a sport he is passionate about, and traveling to new places.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full flex flex-col justify-center items-center px-4 py-4 text-center border gap-y-4">
                <div className="w-[200px] h-[200px] rounded-full">
                  <img className="w-[200px] h-[200px] rounded-full" src="/Image/About/rahul.webp" alt="" />
                </div>
                <div className="w-full lg:w-[70%] ">
                  <p className="text-blue-500">Production Manager</p>
                  <p>
                    Rahul Tiwari is the Production Manager at Apsensys Care, where he oversees and manages the production of various products such as the Clear Soft range, Nexpro, Sanitus, and more. With his technical skills, do-it-right attitude, and managerial abilities, he ensures efficient manufacturing processes and product quality.
                  </p>
                  <p >
                    Rahul Tiwari has successfully completed a Bachelor of Science degree in Mathematics (Hons) from Veer Kunwar Singh University, Bihar.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col justify-center items-center px-4 py-4 text-center border gap-y-4">
                <div className="w-[200px] h-[200px] rounded-full">
                  <img className="w-[200px] h-[200px] rounded-full" src="/Image/About/nixon.webp" alt="" />
                </div>
                <div className="w-full lg:w-[70%] ">
                  <p className="text-blue-500">Finance and Legal Head</p>
                  <p>
                    Nixon Nambiar, the Finance and Legal Head at Apsensys Care, brings a wealth of experience from various senior management roles. He possesses the necessary skills and expertise to effectively fulfill his responsibilities at the company. Moreover, his passion for management and counseling plays a significant role in driving Apsensys Care towards greater success.
                  </p>
                  <p >
                    Mr. Nambiar has a Master of Business Administration degree. He is passionate about fitness and enjoys long distance running. He also finds solace in literature and practices yoga occasionally.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col justify-center items-center px-4 py-4 text-center border gap-y-4">
                <div className="w-[200px] h-[200px] rounded-full">
                  <img className="w-[200px] h-[200px] rounded-full" src="/Image/About/manish.webp" alt="" />
                </div>
                <div className="w-full lg:w-[70%] ">
                  <p className="text-blue-500">President and Founder</p>
                  <p>
                    Manish Pandey, the President and Founder of Apsensys Care, is a true inspiration. Back in 2007, he was already setting an example for others on how to make the most of their time while working a part-time job and studying in Jharkhand. Manish established Apsensys Media in 2011 through hard work and bootstrapping. He turned a small startup into a thriving business, employing over 100 people. In 2023, he opened the Apsensys Business Towers, fulfilling his dream.
                  </p>
                  <p >
                    Manish Pandey's story is incredible and shows us that, with determination, anything is possible.
                  </p>
                  <p>Manish holds a B.Sc. degree and an MBA, showing his commitment to education. He has a passion for reading, innovation, experiments, and troubleshooting, which highlights his drive to learn and push boundaries. Despite his success, he remains humble and has personally taken charge of housekeeping tasks. Manish's journey is extraordinary and shows what can be achieved through perseverance and passion.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col justify-center items-center px-4 py-4 text-center border gap-y-4">
                <div className="w-[200px] h-[200px] rounded-full">
                  <img className="w-[200px] h-[200px] rounded-full" src="/Image/About/chandrasekar.webp" alt="" />
                </div>
                <div className="w-full lg:w-[70%] ">
                  <p className="text-blue-500">Accounts Manager</p>
                  <p>
                    Chandrashekar D. is the Accounts Manager at Apsensys Care. He is responsible for handling all financial transactions, from distributing employee salaries to releasing funds to clients and contractors. Mr. Chandrashekar plays a vital role in managing all monetary matters at the company.
                  </p>
                  <p >
                    Mr. Chandrashekar has a B.Com. Degree from Indira Gandhi National Open University. He is also actively pursuing professional courses in Chartered Accountancy (CA), Fund Accounting, Certified Financial Planner, and Financial Risk Manager.
                  </p>
                  <p>Mr. Chandrashekar enjoys cricket, swimming, travel, and meditation as pastimes when he is not working.</p>
                </div>
              </div>
            </div>



          </Slider>
        </div>
      </div>
      <div className="container mb-5">
        <h2 className="font-bold text-2xl my-10 text-center">Our Values</h2>
        <img
          className="mx-auto w-[98%] md:w-[80%]"
          src="/Image/About/punch-line-image-ACS.png"
          alt="About"
        />
      </div>
      <div className="container bg-[#b1eea0] p-5 md:p-10">
        <div className="p-5 text-center">
          <h2 className="font-bold text-2xl my-10 border-b border-black pb-4 w-50 md:w-[30%] mx-auto">
            What We Want To Achieve?
          </h2>
          <p className="mb-5 text-justify">
            Air pollution has become increasingly recognized as a key
            contributor to skin damage, early skin aging, and the rising
            incidence of skin-related disorders over the years. This has
            prompted consumers to spend more on numerous beauty items to support
            a consistent personal care routine. As health & hygiene products
            manufacturers, we aim to grow as a brand synonymous to organic and
            ecofriendly products. We want to tailor our products with natural
            ingredients in response to the growing trend toward products with
            organic and herbal ingredients.
          </p>
        </div>
      </div>
      <div className="container bg-[#a0efe6] p-5 md:p-10">
        <div className="p-0 md:p-5 text-justify">
          <h2 className="font-bold text-2xl my-10 border-b border-black pb-4 w-50 md:w-[30%] mx-auto text-center">
            Our strategies for success..!
          </h2>
          <div className="grid md:grid-cols-2 md:gap-10">
            <div className="mb-10">
              <div className="p-4 h-[50%]">
                <h3 className="font-bold text-xl my-5">The Benefits</h3>
                <p>
                  Customers might see short-term or long-term advantages, which
                  they might appreciate more of the longer they use your product
                  or service. We leverage time to develop goods by resolving
                  difficult technical problems. We frequently conduct intense
                  market research on how to better our products. We use
                  structured product management techniques and resources to
                  enhance our understanding.
                </p>
              </div>
              <div className="p-4 h-[50%]">
                <h3 className="font-bold text-xl my-5">Safer and better</h3>
                <p>
                  Using hygiene products correctly is essential if you want to
                  maintain good standards of personal and home hygiene. There
                  are a lot of messages out there about adulteration and the
                  safety of everyday products, but do you know if your product
                  is genuinely harmless? Not all products in the market go
                  through safety tests and have high standards in manufacturing.
                </p>
              </div>
            </div>
            <div className="mb-10">
              <div className="p-4 h-[50%]">
                <h3 className="font-bold text-xl my-5">For the humankind</h3>
                <p>
                  We always keep in mind that we are developing our products for
                  people. When it comes to designing the products, we consider
                  various interlinked factors to make them relevant now and
                  forever.
                </p>
              </div>
              <div className="p-4 h-[50%]">
                <h3 className="font-bold text-xl my-5">
                  Ingredients are handpicked
                </h3>
                <p>
                  We understand that it is not easy to switch from conventional
                  products to non-toxic hygiene products. If it is not under
                  your budget to redecorate your entire shelf, take things
                  slowly, one product at a time. If you are not sure about what
                  to buy, just look for Apsensys Care. Our products are
                  developed with handpicked ingredients that are easily
                  recognizable, certified, and are natural alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-2 md:p-10">
        <div className="p-5 text-center">
          <h2 className="font-bold text-2xl my-10 pb-4 w-[30%] mx-auto">
            Careers
          </h2>
          <div className="border p-5 shadow-lg">
            To Apply, mail us your resume at{" "}
            <a className="text-red-500" href="mailto:career@apsensyscare.com">
              career@apsensyscare.com
            </a>
          </div>
        </div>
      </div>
      <div className="container p-5 md:p-10">
        <div className="p-5 text-center">
          <h2 className="font-bold text-2xl my-10 border-b border-black pb-4 w-50 md:w-[30%] mx-auto text-center">
            Authenticity
          </h2>
          <p className="mb-5 text-justify">
            We have developed systems and processes to ensure that the products
            sold on our platform are authentic, and build trust among our
            consumers and brands. For our beauty and personal care offering, our
            business is predominantly inventory led. This approach ensures
            sourcing directly from brands or their authorized distributors in
            India. It allows us to guarantee authenticity of products bought by
            our consumers, an important consideration for consumers of such
            products. We also conduct quality checks at our warehouses
            periodically on our beauty and personal care products. For our
            fashion offering, we operate a managed marketplace and ensure that
            the sellers we onboard are authorized resellers only. We have also
            developed systems to monitor and address consumer complaints towards
            our ongoing commitment to authenticity.
          </p>
        </div>
      </div>
      <a
        class="mx-auto mb-20 flex items-center justify-center w-[50%] md:w-[10%] text-center rounded border border-[#a0efe6] bg-[#a0efe6] px-6 py-3 font-medium text-black hover:bg-transparent hover:text-[#a0efe6] focus:outline-none focus:ring active:text-[#a0efe6]"
        href="/download"
      >
        Know more
      </a>
      <div className="container bg-black text-white p-5 md:p-10">
        <div className="p-5">
          <h2 className="font-bold text-2xl my-10 border-b border-white pb-4 w-50 md:w-[30%] mx-auto text-center">
            What we are?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="mb-10">
              <div className="p-4 h-[50%]">
                <div className="flex items-center">
                  <img
                    src="/Image/About/thumb.png"
                    alt="thumb"
                    className="h-8 w-8 object-contain"
                  />
                  <h3 className="font-bold text-xl my-5 text-[#ff0000] ml-3">
                    THE BEAUTY DESTINATION OF INDIA
                  </h3>
                </div>
                <p>
                  With a network of over 170+ stores across Bengaluru, Chennai,
                  Hyderabad, Cochin, Mumbai, Pune, Kolkata, Bhubaneswar,
                  Mangalore, Manipal and Coimbatore, we are one of the leading
                  cosmetics and personal care products retailer in the country.
                  We are also available online on the Health & Glow app and
                  website.
                </p>
              </div>
            </div>
            <div className="mb-10">
              <div className="p-4 h-[50%]">
                <div className="flex items-center">
                  <img
                    src="/Image/About/hand.png"
                    alt="hand"
                    className="h-8 w-8 object-contain"
                  />
                  <h3 className="font-bold text-xl my-5 text-[#ff0000] ml-3">
                    TEAM OF PROFESSIONALS
                  </h3>
                </div>
                <p>
                  The vast network and the quality of our service would be
                  unmanageable without our dedicated team which takes care of
                  each of your requirements. Our beauty advisors are
                  knowledgeable and experts in their field, and are always eager
                  to help you with your beauty needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-2xl my-10 border-b border-white pb-4 w-50 md:w-[30%] mx-auto text-center">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row md:items-center">
          <img src="/Image/About/image8.png" alt="image8" className="w-full md:w-[25%]" />
          <div className="mt-3 md:ml-5 w-full md:w-[70%]">
            <h2 className="font-bold text-[#ff0000] text-xl">IN-STORE</h2>
            <p className="my-5 md:my-10 font-semibold">
              Large Retail Chain Across Top Cities
            </p>
            <p>
              We host an unmatched and ever-increasing assortment of skin care,
              hair care, makeup, and wellness products for both men and women.
              With more than 800 brands, 10,000+ products, and the promise of
              being 100% authentic, we seek to exceed the expectations of our
              diverse customers.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-20 justify-end mb-10 items-end md:items-center">
          <div className="mb-3 md:mr-5 text-end w-full md:w-[70%]">
            <h2 className="font-bold text-[#ff0000] text-xl">ONLINE</h2>
            <p className="my-5 md:my-10 font-semibold">
              Large Retail Chain Across Top Cities
            </p>
            <p>
              We ensure to enhance your shopping experience with a user-friendly
              shopping platform available as a website and app. It allows you to
              browse a wide range of products from the top brands and buy the
              best fit from your comfort zone
            </p>
          </div>
          <img src="/Image/About/image9.png" alt="image9" className="w-full md:w-[25%]" />
        </div>
      </div>
      <div className="container py-5 md:py-10 px-10 md:px-20">
        <div className="border border-black flex flex-col md:flex-row justify-around items-center">
          <img
            src="/Image/About/free-delivery.png"
            alt="Free Delivery"
            className="h-[100px] object-contain"
          />
          <img
            src="/Image/About/cod.png"
            alt="Cash on Delivery"
            className="h-[50px] object-contain"
          />
        </div>
      </div>
      <div className="container p-5 md:p-20">
        <h2 className="font-bold text-2xl my-10 border-b border-white pb-4 w-full">
          Payment Methods
        </h2>
        <img
          src="/Image/About/payment.png"
          alt="Free Delivery"
          className="w-full md:w-[50%] object-contain"
        />
      </div>
    </div>
  );
}

export default AboutUs;