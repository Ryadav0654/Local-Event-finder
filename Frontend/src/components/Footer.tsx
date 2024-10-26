import React from "react";

const Footer = () => {
  return (
    <div className="w-full  mt-auto bg-[#2B293D]">
    <div className="flex  px-6 py-4 md:p-8 flex-wrap md:flex-nowrap gap-y-5 md:gap-y-0 justify-center">
      <div className="w-[20vw] ml-12 flex flex-col justify-center items-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ">
          Eventify
        </h1>
        {/* <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sit.</p> */}
      </div>
      <div className="flex justify-around w-full">
      <div>
        <h3 className="font-bold text-lg">Company Info</h3>
        <ul className="text-sm text-white/75">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Support</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>License</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg">Help</h3>
        <ul className="text-sm text-white/75">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Support</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>License</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg">Categories</h3>
        <ul className="text-sm text-white/75">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Support</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>License</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg">Follow us</h3>
        <ul className="text-sm text-white/75">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Support</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>License</li>
        </ul>
      </div>
      </div>
      </div>
      <div className="h-[1px] bg-white/50 mt-8 mx-16"></div>
      <p className="text-center p-3 text-sm">&copy; 2024 eventify. All right reserved.</p>
    </div>
    
  );
};

export default Footer;
