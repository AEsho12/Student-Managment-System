import React from 'react';

const Pricing = () => {
  return (
    <div className="flex items-center text-center justify-center w-full h-full p-4 bg-[#1F1F1F]">
      <div className="flex flex-col w-full items-center mb-20 mt-20">
        <div className="w-full text-center flex flex-col gap-10">
          <div className="w-full max-w-lg mx-auto text-center gap-5">
            <h1 className="text-3xl font-semibold text-[#1777F7]">Pick the best option</h1>
            <p className="px-4 text-base text-[#667085] mt-5">
              Choose the best option for you and your company from our range of prices
            </p>
          </div>
          <div className="flex flex-wrap gap-10 mt-10 text-start rounded-[10px] items-center justify-center">
            {/* Pricing Card 1 */}
            <div className="w-full max-w-xs rounded-b-2xl h-[345px] shadow-lg px-5 flex flex-col justify-center gap-5">
              <div className="h-[36px] rounded-[4px] w-[85px] bg-[#EDF5FF] flex text-center items-center justify-center">
                <h1 className="font-bold text-[#1777F7]">Standard</h1>
              </div>
              <p className="w-[90%] text-[#667085] text-sm">
                Standard provides a range of features for the cheapest plan
              </p>
              <h2 className="text-3xl font-semibold mt-4">£5</h2>
              <div className="text-[#667085] text-base font-bold">
                <p>For 1-10 people in qa team</p>
                <p>For 1-10 people in qa team</p>
                <p>For 1-10 people in qa team</p>
              </div>
              <button className="bg-[#0A92DD] w-full text-white rounded-[9px] p-2 hover:bg-[#1777F7] mt-5 mb-10">
                Choose
              </button>
            </div>

            {/* Pricing Card 2 */}
            <div className="w-full max-w-xs h-[405px] shadow-lg px-5 flex flex-col  justify-center gap-5 bg-[#0B0641] rounded-b-2xl">
              <div className="h-[30px] w-[85px] bg-[#FFFFFF] rounded-[4px] flex text-center items-center justify-center">
                <h1 className="font-bold text-[#1777F7]">Standard</h1>
              </div>
              <p className="w-[90%] text-white text-sm">
                Standard provides a range of features for the cheapest plan
              </p>
              <h2 className="text-3xl text-white font-semibold mt-4">£10</h2>
              <div className="text-white text-base font-bold">
                <p>For 1-10 people in qa team</p>
                <p>For 1-10 people in qa team</p>
                <p>For 1-10 people in qa team</p>
              </div>
              <button className="bg-[#0A92DD] w-full text-white rounded-[9px] p-2 hover:bg-[#1777F7] mt-5">
                Choose
              </button>
            </div>

            {/* Pricing Card 3 */}
            <div className="w-full max-w-xs rounded-b-2xl h-[345px] shadow-lg px-5 flex flex-col justify-center gap-5">
              <div className="h-[36px] rounded-[4px] w-[85px] bg-[#EDF5FF] flex text-center items-center justify-center">
                <h1 className="font-bold text-[#1777F7]">Standard</h1>
              </div>
              <p className="w-[90%] text-[#667085] text-sm">
                Standard provides a range of features for the cheapest plan
              </p>
              <h2 className="text-3xl font-semibold mt-4">£20</h2>
              <div className="text-[#667085] text-base font-bold">
                <p>For 1-10 people in qa team</p>
                <p>For 1-10 people in qa team</p>
                <p>For 1-10 people in qa team</p>
              </div>
              <button className="bg-[#0A92DD] w-full text-white rounded-[9px] p-2 hover:bg-[#1777F7] mt-5 mb-10">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
