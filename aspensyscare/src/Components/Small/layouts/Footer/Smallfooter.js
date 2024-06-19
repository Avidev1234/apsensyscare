import React from 'react'
import { useNavigate } from 'react-router-dom'

const Smallfooter = () => {
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
        <footer class="w-full  flex bg-[#0112FE] border-slate-900 p-1 bottom-0 fixed">
            <img src="/image/Rectangle .png" alt="img" />
            <div class="w-[1500px] h-18 flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path d="M18.6456 8.0917L10.4535 1.16601C10.3267 1.05882 10.166 1 10 1C9.83396 1 9.67329 1.05882 9.54649 1.16601L1.35439 8.0917C1.12964 8.2817 1 8.56106 1 8.85537V20C1 20.5523 1.44772 21 2 21H18C18.5523 21 19 20.5523 19 20V8.85537C19 8.56106 18.8704 8.2817 18.6456 8.0917Z" stroke="white" stroke-width="2" />
                </svg>
            </div>
            <div class="w-[2000px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                    <path d="M9 14.8207C13.881 14.8207 18 15.6138 18 18.6738C18 21.735 13.8539 22.5 9 22.5C4.12017 22.5 0 21.7069 0 18.6468C0 15.5857 4.14605 14.8207 9 14.8207ZM9 0C12.3065 0 14.9557 2.64828 14.9557 5.95243C14.9557 9.25659 12.3065 11.906 9 11.906C5.69464 11.906 3.04427 9.25659 3.04427 5.95243C3.04427 2.64828 5.69464 0 9 0Z" fill="#174686" stroke="white" stroke-width="2" />
                </svg>
            </div>
            <div class="w-[2000px] flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.50749 20.2908C7.50947 20.2908 8.32425 21.1235 8.32425 22.146C8.32425 23.1685 7.50947 24 6.50749 24C5.50552 24 4.68954 23.1685 4.68954 22.146C4.68954 21.1235 5.50552 20.2908 6.50749 20.2908ZM20.0096 20.2908C21.0115 20.2908 21.8275 21.1235 21.8275 22.146C21.8275 23.1685 21.0115 24 20.0096 24C19.0076 24 18.1928 23.1685 18.1928 22.146C18.1928 21.1235 19.0076 20.2908 20.0096 20.2908ZM1.05351 0.0121808L3.55065 0.454245C3.95384 0.52527 4.25983 0.866921 4.29343 1.28327L5.449 15.3314C5.5042 16.0049 6.04538 16.5131 6.70897 16.5131H19.8018C20.4258 16.5131 20.9634 16.0379 21.0534 15.4085L22.1922 7.37666C22.233 7.09256 22.1058 6.89296 22.0266 6.79867C21.9474 6.7056 21.7722 6.54886 21.4902 6.54886H8.59652C8.09973 6.54886 7.69654 6.13741 7.69654 5.63044C7.69654 5.12348 8.09973 4.71203 8.59652 4.71203H21.4902C22.2186 4.71203 22.911 5.03531 23.3873 5.59738C23.8637 6.15945 24.0785 6.90276 23.9741 7.63994L22.8342 15.6718C22.6182 17.1988 21.315 18.3499 19.8018 18.3499H6.70897C5.10221 18.3499 3.78944 17.118 3.65504 15.4844L2.55827 2.14291L0.746317 1.8233C0.256729 1.73636 -0.0708628 1.26123 0.0131351 0.761609C0.097133 0.260766 0.557922 -0.0686398 1.05351 0.0121808ZM17.8785 9.23872C18.3753 9.23872 18.7785 9.65017 18.7785 10.1571C18.7785 10.6641 18.3753 11.0756 17.8785 11.0756H14.551C14.053 11.0756 13.651 10.6641 13.651 10.1571C13.651 9.65017 14.053 9.23872 14.551 9.23872H17.8785Z" stroke="white" stroke-width="2" />
                </svg>
            </div>

            <div class="w-[900px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16">
                    <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" stroke="white" stroke-width="2"/>
                </svg>
            </div>
        </footer>
    )
}

export default Smallfooter