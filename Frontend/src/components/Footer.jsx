import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-[500px]">
    
  
    <section className="mt-auto">
    <section className=" flex flex-col items-center">
      <div>
        <div id="nav-name" className="text-4xl font-lilita text-center">
          @UrbanCart
        </div>
        <div className="text-lg font-bold">Shop Smart, Shop Urban.</div>
      </div>
    </section>
      <footer className="flex flex-col items-center bg-[#0F044C] text-[#EEEEEE] py-8 px-4 md:px-6 lg:px-8">
        <div className="text-2xl font-bold text-[#ddd]">
          SUBSCRIBE TO NEWSLETTER
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 my-2 mx-2 mb-6">
          <input
            type="text"
            placeholder="Your Email"
            id="footer-email"
            className="w-80 p-2.5 border border-[#EEEEEE] rounded-md bg-[#EEEEEE]"
          />
          <button
            id="submit"
            className="cursor-pointer p-2.5 border border-[#787A91] rounded-md bg-[#787A91] text-[#EEEEEE]"
          >
            Subscribe
          </button>
        </div>
  
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-y-5 justify-between text-sm mb-5 cursor-pointer">
          {/* Footer columns */}
          <div>
            <p className="foot-fade font-bold">SUPPORT</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Shippings & Returns</p>
          </div>
          <div>
            <p className="foot-fade font-bold">COMPANY</p>
            <p>Our Story</p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
          </div>
          <div>
            <p className="foot-fade font-bold">CONSUMER POLICY</p>
            <p>Cancellation & Returns</p>
            <p>Security</p>
            <p>Privacy</p>
          </div>
          <div>
            <p className="foot-fade font-bold">URBANCART PROGRAMS</p>
            <p>Promos & Coupons</p>
            <p>UrbanCart Ads</p>
            <p>Careers</p>
          </div>
        </div>
  
        <div className="w-full max-w-5xl">
          <hr className="border-[#787A91]" />
          <div className="flex justify-between items-center text-sm mt-2">
            <div className="foot-fade">© 2024, UrbanCart. All rights reserved.</div>
            <div className="flex items-center space-x-3">
              <span className="foot-fade">Follow us on</span>
              <div className="text-blue-500">
                <TiSocialFacebookCircular className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="text-red-600">
                <SlSocialYoutube className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="text-purple-600">
                <SlSocialInstagram className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
  
  );
};

export default Footer;
