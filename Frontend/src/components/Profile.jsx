import React, { useEffect, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const Profile = () => {
 const [user,setUser] = useState('')
 const navigate = useNavigate();
 useEffect(()=>{
    const getUser = async ()=>{
        try {
            const token = localStorage.getItem('token')
            if(!token){
                toast.error("Login again")
                navigate('/signin')
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, 
                  },
            }
            const response = await axios.get("https://urban-cart-fh8j-l40awq7a3-sam113273gmailcoms-projects.vercel.app/user/details",config)
            setUser(response.data)
        } catch (error) {
            toast.error("Error getting details")
            navigate('/signin')
        }
    }
    getUser();
   
 },[])
const handleClick = ()=>{
    navigate("/profileDetails")
}
  return (
    <div className="max-w-md my-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">welcome</h2>
          <div className="space-y-4">
            <p className="text-gray-600"><strong>Full Name:</strong> {user.username || 'Not provided'}</p>
            <p className="text-gray-600"><strong>Email:</strong> {user.email || 'Not provided'}</p>
            <p className="text-gray-600"><strong>Phone No:</strong> {user.phoneNo || 'Not provided'}</p>
            <p className="text-gray-600"><strong>Address:</strong> {user.address || 'Not provided'}</p>
            <p className="text-gray-600"><strong>Landmark:</strong> {user.landMark || 'Not provided'}</p>
            <p className="text-gray-600"><strong>City:</strong> {user.city || 'Not provided'}</p>
            <p className="text-gray-600"><strong>Pincode:</strong> {user.pincode || 'Not provided'}</p>
          </div>
          <div className="mt-6">
            <button
              onClick={handleClick}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
