import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
const Profile = () => {
  const [userDetail,setuserDetail]=useState({

  })
  const handleSubmit = ()=>{
    
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] m-7 px-4 md:px-6 lg:px-8 my-10 ">
        <h1 className="text-center text-3xl mb-2 text-slate-900 font-bold ">Fill Out Your Details</h1>
        <form className="flex max-w-md flex-col gap-4 shadow-lg p-4 w-[600px]">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Address" value="Your Address"/>
            </div>
            <TextInput
              id="Address"
              type="text"
              placeholder="Your address"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="city" value="Your City"/>
            </div>
            <TextInput
              id="city"
              type="text"
              placeholder="city"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="landmark" value="Landmark"/>
            </div>
            <TextInput
              id="city"
              type="text"
              placeholder="Landmark"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneno" value="Phone No"/>
            </div>
            <TextInput
              id="phoneno"
              type="tel"
              placeholder="phone no"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="pincode" value="Pincode"/>
            </div>
            <TextInput
              id="pincode"
              type="text"
              placeholder="city"
              maxLength="6"
            />
          </div>
          

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Profile;
