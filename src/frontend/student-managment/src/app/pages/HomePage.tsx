import React from 'react';

export const HomePage = () => {
  return (
    <div className="bg-[#1F1F1F] w-full flex items-center justify-center text-center py-10">
      <div className="flex flex-col w-full items-center mb-20 mt-10">
        <div className=" mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF]">
            Manage your students easily with Task Man
          </h1>
          <p className="px-4 text-base md:text-lg text-white mt-5">
            StudentDash is a school management solution that offers a personalized portal to each type of user
          </p>
          <button className="bg-[#0A92DD] text-white rounded-full h-[39px] w-full max-w-xs hover:bg-[#414652] mt-8">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
