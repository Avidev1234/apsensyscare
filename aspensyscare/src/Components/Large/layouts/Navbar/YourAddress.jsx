// import React, { useEffect, useState } from "react";
// import { youraddress } from "../../../../Api/Api";
// import "./navbar.css";
// import { Helmet } from "react-helmet";

// const YourAddress = () => {
//   const [useraddress, setUseraddress] = useState([]);

//   useEffect(() => {
//     const user = sessionStorage.getItem("___user");
//     if (user) {
//       youraddress({ user_id: user })
//         .then((res) => {
//           setUseraddress(res);
//           // console.log("Response is", res);
//         })
//         .catch((error) => {
//           console.error("Error fetching order history:", error);
//         });
//     }
//   }, []);

//   if (!sessionStorage.getItem("___user")) {
//     return (
//       <div className="w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5 bg-[#d2efff]">
//         <Helmet>
//           <title>{}</title>
//           <meta name="description" content={""} />
//         </Helmet>
//         <div className="w-full lg:w-[40%] flex flex-col items-center justify-center gap-10">
//           <img src="./Image/Poster/empty-wishlist-ACS2.jpg" alt="" />
//           <button className="px-5 py-1 bg-white border-2 border-[blue]">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   } else {
//     return (
        
//       <div className="flex items-center justify-center min-h-screen  bg-gray-100">
        
//         <div className="flex flex-col items-center justify-center gap-8 mb-[85px]">
//         <h1 className="text-3xl font-medium mr-[77%] mt-8">Your Addresses</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
            
//             {useraddress.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg boxe flex flex-col justify-center items-start mt-1 box-with-line relative"
//                 style={{ boxShadow: "2px 2px 10px rgba(0, 195, 255, 0.5)" }}
//               >
//                 <div className="box-image">
//                   <img
//                     src={`${process.env.REACT_APP_IMAGE}/icons/addresslogo.png`}
//                     alt=""
//                     className=""
//                   />
//                 </div>
//                 <div className="mb-1">{profile.name}</div>
//                 <div className="mb-1">{profile.house_flat_office}</div>
//                 <div>{profile.phoneNumber}</div>
//                 <div>{profile.state}</div>
//               </div>
//             ))}
//           </div>

//           {/* Example of another section, adjust as needed */}
//           {/* <div className="flex justify-center gap-8">
//         {useraddress.map(profile => (
//           <div key={profile.id} className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg boxe flex flex-col justify-center items-start mt-1 box-with-line relative">
//             <div className="box-image">
//               <img
//                 src={`${process.env.REACT_APP_IMAGE}/icons/addresslogo.png`}
//                 alt=""
//                 className=""
//               />
//             </div>
//             <div className="mb-1">{profile.name}</div>
//             <div className="mb-1">{profile.address}</div>
//             <div>{profile.phoneNumber}</div>
//             <div>{profile.state}</div>
//           </div>
//         ))}
//       </div> */}
//         </div>
//       </div>
//     );
//   }
// };
// export default YourAddress;




// code with edit and remove button

import React, { useEffect, useState } from "react";
import { youraddress } from "../../../../Api/Api";
import "./navbar.css";
import { Helmet } from "react-helmet";

const YourAddress = () => {
  const [useraddress, setUseraddress] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [formData, setFormData] = useState({
    name: "",
    house_flat_office: "",
    phoneNumber: "",
    state: ""
  });

  useEffect(() => {
    const user = sessionStorage.getItem("___user");
    if (user) {
      youraddress({ user_id: user })
        .then((res) => {
          setUseraddress(res);
        })
        .catch((error) => {
          console.error("Error fetching addresses:", error);
        });
    }
  }, []);

  const handleEdit = (index, profile) => {
    setEditMode(true);
    setEditIndex(index);
    setFormData({
      name: profile.name,
      house_flat_office: profile.house_flat_office,
      phoneNumber: profile.phoneNumber,
      state: profile.state
    });
  };

  const handleSave = () => {
    // Implement save functionality here
    const updatedAddress = [...useraddress];
    updatedAddress[editIndex] = {
      ...updatedAddress[editIndex],
      name: formData.name,
      house_flat_office: formData.house_flat_office,
      phoneNumber: formData.phoneNumber,
      state: formData.state
    };
    setUseraddress(updatedAddress);
    setEditMode(false);
    setEditIndex(-1);
  };

  const handleRemove = (index) => {
    // Implement remove functionality here
    const updatedAddress = useraddress.filter((_, idx) => idx !== index);
    setUseraddress(updatedAddress);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!sessionStorage.getItem("___user")) {
    return (
      <div className="w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5 bg-[#d2efff]">
        <Helmet>
          <title>{}</title>
          <meta name="description" content={""} />
        </Helmet>
        <div className="w-full lg:w-[40%] flex flex-col items-center justify-center gap-10">
          <img src="./Image/Poster/empty-wishlist-ACS2.jpg" alt="" />
          <button className="px-5 py-1 bg-white border-2 border-[blue]">
            Login
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center gap-8 mb-[85px]">
          <h1 className="text-3xl font-medium mr-[77%] mt-8">Your Addresses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {useraddress.map((profile, index) => (
              <div
                key={profile.id}
                className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg boxe flex flex-col justify-center items-start mt-1 box-with-line relative"
                style={{ boxShadow: "2px 2px 10px rgba(0, 195, 255, 0.5)" }}
              >
                <div className="box-image">
                  <img
                    src={`${process.env.REACT_APP_IMAGE}/icons/addresslogo.png`}
                    alt=""
                    className=""
                  />
                </div>
                {editMode && editIndex === index ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mb-1 border-b border-gray-400 w-full"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="house_flat_office"
                      value={formData.house_flat_office}
                      onChange={handleChange}
                      className="mb-1 border-b border-gray-400 w-full"
                      placeholder="House/Flat/Office"
                    />
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="mb-1 border-b border-gray-400 w-full"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="mb-1 border-b border-gray-400 w-full"
                      placeholder="State"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-1">{profile.name}</div>
                    <div className="mb-1">{profile.house_flat_office}</div>
                    <div>{profile.phoneNumber}</div>
                    <div>{profile.state}</div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <button
                        className="text-blue-500 underline"
                        onClick={() => handleEdit(index, profile)}
                      >
                        Edit
                      </button> |
                      <button
                        className="text-red-500 underline"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default YourAddress;
