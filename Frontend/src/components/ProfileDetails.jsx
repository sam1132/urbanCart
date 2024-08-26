import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    landMark: "",
    phoneNo: "",
    pincode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { address, city, landMark, phoneNo, pincode } = formData;

    if (!address || !city || !landMark || !phoneNo || !pincode) {
      toast.error("All Field are required");
      return;
    }
    if (!/^\d{10}$/.test(phoneNo)) {
      toast.error("Phone number must be a 10-digit number.");
      return;
    }
    if (!/^\d{6}$/.test(pincode)) {
      toast.error("Pincode must be a 6-digit number.");
      return;
    }
    const updateData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Login again");
          navigate("/signin");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.put(
          "/user/completeProfile",
          formData,
          config
        );
        toast.success("Profile updated successfully");
        setFormData({
          username: "",
          email: "",
          address: "",
          city: "",
          landMark: "",
          phoneNo: "",
          pincode: "",
        });
        navigate("/profile");
      } catch (error) {
        console.log(error)
        toast.error("Cannot update profile")
      }
    };
    updateData();
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] m-7 px-4 md:px-6 lg:px-8 my-10 ">
        <h1 className="text-center text-3xl mb-2 text-slate-900 font-bold ">
          Fill Out Your Details
        </h1>
        <form
          className="flex max-w-md flex-col gap-4 shadow-lg px-10 w-[600px]"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Your Address" />
            </div>
            <TextInput
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="city" value="Your City" />
            </div>
            <TextInput
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="city"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="landMark" value="Landmark" />
            </div>
            <TextInput
              id="landMark"
              name="landMark"
              value={formData.landMark}
              onChange={handleChange}
              type="text"
              placeholder="Landmark"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneNo" value="Phone No" />
            </div>
            <TextInput
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              type="tel"
              placeholder="phone no"
              maxLength="10"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="pincode" value="Pincode" />
            </div>
            <TextInput
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              type="text"
              placeholder="pincode"
              maxLength="6"
            />
          </div>
          <Button
            type="submit"
            className="text-white bg-blue-600 hover:scale-105 transition-all delay-150 my-2 font-bold"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Profile;
