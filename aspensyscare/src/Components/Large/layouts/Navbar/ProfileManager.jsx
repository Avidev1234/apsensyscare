import React, { useEffect, useState } from "react";
import "./navbar.css";
import DiscoverMore from "./DiscoverMore";
import { useNavigate } from "react-router-dom";
import { profileDetals } from "../../../../Api/Api";
import { Helmet } from "react-helmet";

function ProfileManager() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    email: "",
    address: "",
    phone: "",
    name: "",
    house_flat_office: "",
    area_landmark: "",
    state: "",
    pincode: "",
    address_type: "",
    phone_number: ""
  });
  const [profileDetails, setProfileDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("___user");
    if (user) {
      profileDetals({ user_id: user, status: "Delivered" })
        .then((res) => {
          setProfileDetails(res[0]);
          setProfile({
            email: res[0].email,
            address: `${res[0].house_flat_office}, ${res[0].area_landmark}`,
            phone: res[0].contact,
            name: res[0].name,
            house_flat_office: res[0].house_flat_office,
            area_landmark: res[0].area_landmark,
            state: res[0].state,
            pincode: res[0].pincode,
            address_type: res[0].address_type,
            phone_number: res[0].phone_number
          });
        })
        .catch((error) => {
          console.error("Error fetching order history:", error);
        });
    }
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedProfile = {
      email: formData.get("email"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      name: formData.get("name"),
      house_flat_office: formData.get("house_flat_office"),
      area_landmark: formData.get("area_landmark"),
      state: formData.get("state"),
      pincode: formData.get("pincode"),
      address_type: formData.get("address_type"),
      phone_number: formData.get("phone_number")
    };
    setProfile(updatedProfile);
    setProfileDetails(updatedProfile);
    toggleEdit();
  };

  if (!sessionStorage.getItem("___user")) {
    return (
      <div className="w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5 bg-[#d2efff]">
        <Helmet>
          <title>{ }</title>
          <meta name="description" content={""} />
        </Helmet>
        <div className="w-full lg:w-[40%] flex flex-col items-center justify-center gap-10">
          <img src="./Image/Poster/empty-wishlist-ACS2.jpg" alt="" />
          <button className="px-5 py-1 bg-white border-2 border-[blue]">Login</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center mt-5 gap-5">
        <div className="bg-white shadow-lg rounded-lg flex flex-col items-center p-8 profile-container">
          <div className="flex items-center gap-12 mb-8">
            <div className="mb-6">
              <img
                src={`${process.env.REACT_APP_IMAGE}/icons/icon.png`}
                alt="wishlist-image"
                className="w-72 h-72 rounded-full object-cover"
              />
            </div>
            <div className="profile-content">
              <h2 className="text-3xl font-bold mb-4">{profileDetails.name}</h2>

              {!isEditing ? (
                <div id="profile-details">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> {profileDetails.email}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> {profileDetails.house_flat_office}, {profileDetails.area_landmark}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>State:</strong> {profileDetails.state},    <strong>Pincode:</strong> {profileDetails.pincode}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address Type:</strong> {profileDetails.address_type}
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone No:</strong> {profileDetails.phone_number}
                  </p>
                  <button className="edit-button w-36 mt-4" onClick={toggleEdit}>
                    Edit your profile
                  </button>
                  <button className="review-button w-36 mt-4">Review</button>
                </div>
              ) : (
                <form id="edit-profile-form" onSubmit={handleSubmit}>
                  <label htmlFor="name" className="text-gray-700 mb-2 block">
                    <strong>Name:</strong>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={profile.name}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="email" className="text-gray-700 mb-2 block">
                    <strong>Email:</strong>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    defaultValue={profile.email}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="house_flat_office" className="text-gray-700 mb-2 block">
                    <strong>House/Flat/Office:</strong>
                  </label>
                  <input
                    type="text"
                    id="house_flat_office"
                    name="house_flat_office"
                    defaultValue={profile.house_flat_office}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="area_landmark" className="text-gray-700 mb-2 block">
                    <strong>Area/Landmark:</strong>
                  </label>
                  <input
                    type="text"
                    id="area_landmark"
                    name="area_landmark"
                    defaultValue={profile.area_landmark}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="state" className="text-gray-700 mb-2 block">
                    <strong>State:</strong>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    defaultValue={profile.state}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="pincode" className="text-gray-700 mb-2 block">
                    <strong>Pincode:</strong>
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    defaultValue={profile.pincode}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="address_type" className="text-gray-700 mb-2 block">
                    <strong>Address Type:</strong>
                  </label>
                  <input
                    type="text"
                    id="address_type"
                    name="address_type"
                    defaultValue={profile.address_type}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <label htmlFor="phone_number" className="text-gray-700 block">
                    <strong>Phone No:</strong>
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    defaultValue={profile.phone_number}
                    className="mb-2 px-2 py-1 border rounded-md w-full"
                  />

                  <div className="flex justify-end mt-4">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-14"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="text-gray-700 border px-4 py-2 rounded-md"
                      onClick={toggleEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-md mt-4 p-4 options-container">
          <button className="option-item" onClick={() => navigate('/cart')}>
            <img className="icon" src={`${process.env.REACT_APP_IMAGE}/icons/order.png`} alt="brands-icons" />
            <span>Cart List</span>
          </button>
          <button className="option-item" onClick={() => navigate('/history')}>
            <img className="icon" src={`${process.env.REACT_APP_IMAGE}/icons/previous.png`} alt="brands-icons" />
            <span>Previous Orders</span>
          </button>
          <button className="option-item" onClick={() => navigate('/')}>
            <img className="icon" src={`${process.env.REACT_APP_IMAGE}/icons/rating.png`} alt="brands-icons" />
            <span>Reviews and Ratings</span>
          </button>
        </div>
        <DiscoverMore />
      </div>
    );
  }
}

export default ProfileManager;
