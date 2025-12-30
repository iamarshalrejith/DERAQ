import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} alt="logo" className="mb-5 w-32" />
        <p className="w-full md:w-2/3 text-blue-950 ">
          We deliver quality products with care, combining style, comfort, and
          trust to make every purchase worthwhile.
        </p>
      </div>

      <div>
        <p className="text-xl text-blue-950 font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-blue-950">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5 text-blue-950">Get in Touch</p>
        <ul className="flex flex-col gap-1 text-blue-950">
          <li>+91-0123-456-789</li>
          <li>contact@deraq.com</li>
        </ul>
      </div>
      <div className="col-span-3 text-center">
        <hr className="mb-3" />
        <p className="py-5 text-sm text-blue-950">
          Copyright © 2025 DERAQ - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
