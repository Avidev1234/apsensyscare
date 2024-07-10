import React, { useState } from "react";
import "./navbar.css";

function ProfileManager() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    email: "ak061410@gmail.com",
    address: "apsensyscare pvt limited",
    phone: "+91 8340138522",
  });

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
    };
    setProfile(updatedProfile);
    toggleEdit();
  };

  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg flex p-8 profile-container h-96">
        <div className="w-full flex gap-8 items-center">
          <div className="ml-36">
            <img
              src={`${process.env.REACT_APP_IMAGE}/icons/icon.png`}
              alt="wishlist-image"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
          <div className="profile-content">
            <h2 className="text-3xl font-bold mb-4">Aditya Kumar</h2>
            <div id="profile-details" className={!isEditing ? "" : "hidden"}>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {profile.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> {profile.address}
              </p>
              <p className="text-gray-700">
                <strong>Phone No:</strong> {profile.phone}
              </p>
            </div>

            <form
              id="edit-profile-form"
              className={isEditing ? "" : "hidden"}
              onSubmit={handleSubmit}
            >
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

              <label htmlFor="address" className="text-gray-700 mb-2 block">
                <strong>Address:</strong>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                defaultValue={profile.address}
                className="mb-2 px-2 py-1 border rounded-md w-full"
              />

              <label htmlFor="phone" className="text-gray-700 block">
                <strong>Phone No:</strong>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                defaultValue={profile.phone}
                className="mb-2 px-2 py-1 border rounded-md w-full"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              >
                Save
              </button>
            </form>
            <button
              className="edit-button"
              onClick={toggleEdit}
            >
              {isEditing ? "Cancel" : "Edit your profile"}
            </button>
            <button className="review-button">Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileManager;
