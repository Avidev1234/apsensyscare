import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css"; // Assuming you have a CSS file for your styles

const LocationDisplay = () => {
  // State variables
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [signInButtonColor, setSignInButtonColor] = useState('#1D4ED8');
  const [applyButtonColor, setApplyButtonColor] = useState('#1D4ED8');
  const [pincode, setPincode] = useState('');
  const [locationDetails, setLocationDetails] = useState({ city: '', state: '', pincode: '' });
  const [error, setError] = useState(null);

  // API key for fetching address
  const apiKey = "a86935c47883b5721fac33a659bfa85f";

  // Fetch address based on geolocation on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchAddress(latitude, longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to fetch address based on latitude and longitude
  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      if (response.data && response.data.length > 0) {
        const data = response.data[0];
        setLocationDetails({ city: data.name, state: data.state, pincode: data.zip || '' });
      } else {
        setError("Unable to retrieve address");
      }
    } catch (error) {
      setError("Error fetching address data");
    }
  };
console.log("locationDetails",locationDetails);
  // Function to handle click on location box
  const handleLocationBoxClick = () => {
    setPopupVisibility(true);
  };

  // Function to handle click on close button
  const handleCloseButtonClick = () => {
    setPopupVisibility(false);
  };

  // Function to handle click on sign in button
  const handleSignInButtonClick = () => {
    setSignInButtonColor('#4CAF50'); // Change color to green
  };

  // Function to handle click on apply button
  const handleApplyButtonClick = async (e) => {
    e.preventDefault();
    try {
      // Fetch data based on pincode
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      console.log("data",data);
      if (data[0].Status === 'Success') {
        const { District, State } = data[0].PostOffice[0];
        // Update location details
        setLocationDetails({ city: District, state: State, pincode });
        setError(null);
        setApplyButtonColor('#4CAF50'); // Change color to green
        // Close the popup after applying
        setPopupVisibility(false);
      } else {
        setError('Invalid pincode. Please try again.');
        setLocationDetails({ city: '', state: '', pincode: '' });
      }
    } catch (error) {
      setError('Error fetching location data. Please try again.');
    }
  };

  return (
    <div className="w-[15%] ">
      {/* Location box */}
      <div
        id="locationBox"
        className="flex items-center justify-end shadow-lg rounded p-4 max-w-sm  transparent-bg hover-border w-full h-[79px] gap-[18px] md:gap-[2px] sm:text-[1px] "
        onClick={handleLocationBoxClick}
      >
        <img
          src={`${process.env.REACT_APP_IMAGE}/icons/location.png`}
          alt="Location Icon"
          className="h-8 w-6 text-blue-500 ml-[55px]  md:ml-[0px]"
        />
        <div>
          <span className="text-white lg:text-[15px] text-sm inline">
            City: {locationDetails.city}, <br /> State: {locationDetails.state}
          </span>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div id="popupContainer" className="popup-container">
          <div className="popup bg-white p-8">
            <span className="close-button" onClick={handleCloseButtonClick}>&times;</span>
            <h2 className="text-lg text-gray-800 font-semibold mb-4">Choose Your Location</h2>
            <p className="medium-text text-gray-800">
              Select a delivery location to see product availability and delivery options.
            </p>
            <br />
            {/* Sign in button */}
            <button
              id="signInButton"
              className="bg-blue-700 text-white px-4 py-2 rounded mb-4 mx-auto"
              style={{ backgroundColor: signInButtonColor }}
              onClick={handleSignInButtonClick}
            >
              Sign in to see your addresses
            </button>

            {/* Form to enter pincode */}
            <div className="mb-4">
              <hr className="border-t border-gray-400 w-1/5 inline-block mx-2" />
              <span className="text-gray-700 mb-4">Or enter an Indian pincode</span>
              <hr className="border-t border-gray-400 w-1/5 inline-block mx-2" />
              <br />
              <br />
              <form onSubmit={handleApplyButtonClick}>
                <input
                  type="text"
                  id="pincodeInput"
                  placeholder="Enter your pincode"
                  className="border border-gray-300 text-gray-800 px-3 py-2 rounded mr-2"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button
                  id="applyButton"
                  className="bg-blue-700 text-white px-4 py-2 rounded"
                  style={{ backgroundColor: applyButtonColor }}
                  type="submit"
                >
                  Apply
                </button>
              </form>
              {/* Error message */}
              {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LocationDisplay;
