import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../../../../src/index.css"
function refreshPageFooter(e) {
    // e.preventDefault();
    // window.location.reload(); 
    window.scrollTo(0, 0); // Scrolls to the top of the page
}

const Footer = () => {
    const navigate = useNavigate()
    const Redirect = (text) => {
        if (text === 'privacy') {
            navigate('/privacy-policy')
        } else if (text === 'contact') {
            navigate('/contact-us')
        }
        else if (text === 'about') {
            navigate('/about-us')
        }
        else if (text === 'career') {
            navigate('/career')
        }
        else if (text === 'sitemap') {
            navigate('/sitemap')
        }
        else if (text === 'payment-return') {
            navigate('/payment-return-cancellation')
        }
        else if (text === 'terms&condition') {
            navigate('/terms-condition')
        }
        else if (text === 'shipping') {
            navigate('/shipping')
        } else if (text === 'home') {
            navigate('/')
        }
    }
    return (
        <div className="fotter-conatiner">

            <div className="hidden lg:flex circle-container flex justify-center items-center mt-[105px]">
                <div className="w-[130px] h-[130px]  rounded-full flex flex-col justify-center items-center text-white mb-[-48px]">

                    <img className='w-[1138px] h-[134px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/Apsensyscare-logo.png`} alt="apsensyscare"
                        // onClick={refreshPage}
                        // onClick={(e) => { this.refreshPage(); navigate('/'); }}
                        onClick={(e) => { 
                            navigate('/');
                            refreshPageFooter(e);
                          }}
                    // onClick={() => navigate('/')}

                    />
                </div>
            </div>

            <footer className="hidden lg:block bg-[#131A22] text-white py-8 mt-[-17px] w-[100%] h-[185px]">
                <div className='w-[100%] flex justify-center mt-[25px]'>
                    <div class="w-[76%] flex justify-evenly gap-4 lg:w-[95%] xl:w-[76%] ">
                        <div className='w-[31%] flex flex-col mt-[-18px]'>
                            <div className=''>
                                <p className='text-[18px]'><strong>Get special discount on your inbox
                                </strong></p>
                            </div>
                            <div class="mt-4 flex w-[31%] ">
                                <input type="text" class="  px-4 py-2 h-[41px] text-black" placeholder="Enter your email" />
                                <button class="bg-gray-800 text-white border border-white  px-4 py-2  h-[41px]">Submit</button>
                            </div>
                        </div>
                        <div className='w-[33%] flex-col mt-[18px]'>
                            <div className='w-full flex justify-center  '>
                                <img className='w-[100%] h-[47px] md:w-[100%] object-contain cursor-pointer ' src={`${process.env.REACT_APP_IMAGE}/icons/apsensycare.png`} alt="apsensycare-logo" />
                            </div>
                            <div className='w-full flex flex-row flex-nowrap justify-center gap-[11px] mt-[7px] '>
                                <a href='https://www.facebook.com/apsensyscare/' target='_blank' rel="noreferrer">
                                    <img className='w-[42px] h-[40px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/facebook-white.png`} alt="facebook-logo" />
                                </a>
                                <a href='https://www.youtube.com/@apsensyscare' target='_blank' rel="noreferrer">
                                    <img className='w-[42px] h-[40px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/youtube-white.png`} alt="you-tube-logo" />
                                </a>
                                <a href='https://www.instagram.com/apsensyscaresolution/' target='_blank' rel="noreferrer">
                                    <img className='w-[42px] h-[40px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/insta-white.png`} alt="insta-logo" />
                                </a>
                                <a href='https://www.linkedin.com/in/apsensys-care-925186250/' target='_blank' rel="noreferrer">
                                    <img className='w-[42px] h-[40px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/linkedin-white.png`} alt="linkedin-logo" />
                                </a>
                                <a href='https://twitter.com/ApsensysCare' target='_blank' rel="noreferrer">
                                    <img className='w-[41px] h-[39px] object-contain cursor-pointer mt-[2px]' src={`${process.env.REACT_APP_IMAGE}/icons/twitter-white.png`} alt="twitter-logo" />
                                </a>
                            </div>
                        </div>
                        {/* <p className='text-white'>Apsensys care</p> */}
                        <div className='w-[30%] mt-[-18px]'>
                            <h4 className="text-lg font-semibold">FOR ANY HELP, YOU MAY CALL US AT <span className='hover:text-[#080808] cursor-pointer'> <br/> +91 7996997979</span></h4><br />
                            
                                <h4 className=" w-[124%] text-base font-semibold">(Monday to Saturday, 9AM to 9PM and Sunday, 10AM to 7PM)</h4>

                        </div>
                    </div>
                </div>
            </footer>
            <hr className='hidden md:block' />

            <div className="hidden lg:flex Second-footer flex justify-evenly bg-[#0112fe] shadow-lg p-8 ">
                <div className='w-full flex justify-center gap-[4% md:gap-6 lg:gap-10]'>
                    <div className="w-full md:w-[25%] deliver flex justify-center items-center gap-5">
                        <div class="image w-[74px] h-[73px] lg:w-[69px] lg:h-[69px] rounded-full border p-[10px] bg-white ">
                            <img className='w-[171px] h-[51px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/Premium Packaging.png`} alt="premium-icons" />
                        </div>
                        <div className="desc">
                            <h5 class="py-4 text-white lg:text-[13px] text-[16px]  lg:font-bold">Premium Packaging</h5>
                            <hr />
                            <p className="py-4 text-white text-[16px] lg:text-[13px] lg:font-bold">Your product is safe in transit </p>

                        </div>
                    </div>
                    <div className="w-full md:w-[25%] deliver flex justify-center items-center gap-5">
                        <div class="image w-[92px] h-[67px]  xl:w-[69px] xl:h-[67px] rounded-full border p-[7px] bg-white">
                            <img className='w-[171px] h-[51px] mt-[4px] object-contain cursor-pointer lg:w-[163px] lg:h-[44px] rounded-full xl:mt-[5px]' src={`${process.env.REACT_APP_IMAGE}/icons/authenticity.png`} alt="authentic-icons" />
                        </div>
                        <div class="desc">
                            <h5 class="py-4 text-white text-[16px] lg:text-[13px] lg:font-bold">Genuine Products</h5>
                            <hr />
                            <p class="py-4 text-white text-[16px] lg:text-[13px] lg:font-bold"> Quality and safety assured</p>
                        </div>
                    </div>


                    <div className="w-full md:w-[25%] authentic flex justify-center items-center gap-5">
                        <div class="image w-[74px] h-[73px] rounded-full border p-[5px] bg-white lg:w-[69px] lg:h-[67px]">
                            <img className='w-[171px] h-[51px] object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/brands.png`} alt="brands-icons" />
                        </div>
                        <div class="desc">
                            <h5 class="py-4 text-white text-[16px] lg:text-[13px]   lg:font-bold">Made to Fit</h5>
                            <hr />
                            <p class="py-4 text-white text-[16px] lg:text-[13px] lg:font-bold"> Products for every household need</p>

                        </div>
                    </div>
                    <div className="w-full md:w-[25%] brand flex justify-center items-center gap-5">
                        <div class="image w-[74px] h-[73px] rounded-full border p-[10px] bg-white lg:w-[69px] lg:h-[67px]">
                            <img className='w-[171px] h-[51px]  object-contain cursor-pointer' src={`${process.env.REACT_APP_IMAGE}/icons/fast-delivery.png`} alt="delivery-icons" />
                        </div>
                        <div class="desc">
                            <h5 class="py-4 text-white text-[16px] lg:text-[12px] lg:font-bold">Expedited Shipping</h5>
                            <hr />
                            <p class="py-4 text-white text-[16px] lg:text-[13px] lg:font-bold">We value your time</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='hidden md:block' />

            <div className='w-full flex flex-wrap justify-center flex-col p-5 bg-[#131A22] gap-[27px]'>

                <div className='w-full flex flex-wrap justify-center flex-col lg:flex-row p-5 bg-[#131A22] lg:gap-[69px]'>
                    <div className='w-full lg:w-[30%] flex flex-nowrap flex-col xl:p-[25px] 2xl:p-[25px] gap-[13px] '>
                        <div className='w-[40%]'>
                            <img className='cursor-pointer' src={`${process.env.REACT_APP_URL}apsensyscare-white.png`} alt='apsensyscare' onClick={() => Redirect('home')} />
                        </div>
                        <div className='w-full lg:w-[70%] text-start py-5'>
                            <p className='text-white text-[15px]'>
                                Take a moment for yourself and celebrate each day with Apsensys Care's amazing selection of self-care essentials.
                            </p>
                        </div>

                    </div>
                    <div className='w-full lg:w-[16%] flex flex-col flex-nowrap  align-start'>
                        <div className='my-4 text-start'>
                            <p className='font-bold text-[16px] uppercase text-[#fff]'>
                                About
                            </p>
                        </div>
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('contact')}>
                                Contacts Us
                            </p>
                        </div>
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('about')}>
                                About Apsensys Care
                            </p>
                        </div>

                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('career')}>
                                Careers
                            </p>
                        </div>
                        {/* <div className='text-start'>
                        <p className='font-[400] leading-[25px] text-[14px] cursor- hover:text-[#E34343] text-[#fff] py-1'>
                            Blogs
                        </p>
                    </div> */}
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('sitemap')}>
                                Site map
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[16%] flex flex-col flex-nowrap  align-start'>
                        <div className='my-4 text-start'>
                            <p className='font-bold text-[15px] uppercase text-[#fff]'>
                                Consumer POLICY
                            </p>
                        </div>
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('terms&condition')}>
                                Terms and condition
                            </p>
                        </div>
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('privacy')}>
                                Privacy Policy
                            </p>
                        </div>

                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('shipping')}>
                                Shipping Policy

                            </p>
                        </div>
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] cursor-pointer hover:text-[#E34343] text-[#fff] py-1' onClick={() => Redirect('payment-return')}>
                                Payment terms and Return, Cancellation refund and exchange
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[16%] flex flex-col flex-nowrap  align-start'>
                        <div className='my-4 text-start'>
                            <p className='font-bold text-[18px] uppercase text-[#fff]'>
                                MAIL US
                            </p>
                        </div>
                        <div className='text-start'>
                            <p className='font-[400] leading-[25px] text-[14px] text-[#fff] py-1'>
                                Apsensys Care Solution Pvt Ltd.,  No: 105, Apsensys Business Tower, Service Road, Hormavu, Bengaluru, Karnataka 560043.<br />
                                Email : sales@apsensyscare.com <br />
                                Phone : +91 7996997979
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center mt-4'>
                    <p className='font-[400] leading-[25px] text-[14px] text-[#fff] py-1'>© 2023-2024 <a href='https://apsensyscare.com/' className='text-white hover:text-[#E34343]'>Apsensys Care Solution</a>. All Rights Reserved</p>
                </div>
            </div>
        </div>

        // 
    )
}

export default Footer