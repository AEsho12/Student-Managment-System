"use client";
import React from "react";
import Link from "next/link";


const NavBar = () => {


  return (
    <div className="bg-[#100F57] h-full w-full">
      <nav className="  flex justify-between items-center w-full max-container padding-container relative z-30 py-5 px-5">
        <Link href="/" className="font-bold text-lg py-1 text-white">
          Logo
        </Link>
          <div className="flex gap-20 text-[12px] text-white">
            <div>Home</div>
            <div>About</div>
            <div>Pricing</div>
          </div>

        {/* Conditionally render Sign In or Sign Out based on authentication state */}
       
      </nav>
    </div>
  );
};

export default NavBar;
