"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "../../lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for mobile menu
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  // Check if the current page is the login page
  const isLoginPage = pathname === "/login";

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#1F1F1F] h-full flex items-center justify-center  border-b-[0.2px] border-opacity-100  ">
      <nav className="flex justify-between max-w-7xl gap-[400px]  items-center  max-container padding-container relative z-30 py-5 px-5 ">
        <Link href="/" className="font-bold text-lg py-1 text-white">
          Logo
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden md:hidden flex">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex gap-10 text-[12px] text-white ${
            isMenuOpen ? "hidden" : "flex"
          } lg:block items-center justify-center`}
        >
          <div className="0 hidden sm:block text-lg  hover:underline">
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className=" hidden sm:block text-lg hover:underline">
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        {/* Conditionally render Sign In or Sign Out button */}
        {!isLoginPage && (
          <div className="hidden lg:flex">
            {user ? (
              <button
                onClick={handleSignOut}
                className="bg-[#e24540] text-white px-3 py-1 rounded-lg hover:bg-[#414652]"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleSignInClick}
                className="text-white px-3 py-1 rounded-lg hover:bg-[#414652]  border-[#5B5B5B]  bg-[#262626]"
              >
                Log In
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden text-white flex flex-col items-center justify-center space-y-3 p-4 bg-[#100F57]">
          <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/pricing" className="hover:text-gray-300" onClick={toggleMenu}>
            Pricing
          </Link>

          {!isLoginPage && (
            <>
              {user ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    toggleMenu();
                  }}
                  className="bg-[#e24540] text-white px-3 py-1 rounded-lg hover:bg-[#414652]"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleSignInClick();
                    toggleMenu();
                  }}
                  className="btn-simple btn-sm bg-[#0A92DD] hover:bg-[#414652] text-white"
                >
                  Login In
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
