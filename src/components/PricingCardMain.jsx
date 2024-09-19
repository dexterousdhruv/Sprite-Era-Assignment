import React from "react";

const PricingCardMain = () => {
  const features = [
    '4 Users',
    'All apps',
    'Unlimited editable exports',
    'Folders and collaboration',
    'All incoming apps',
  ] 

  return (
    <div className="relative rounded-[20px] bg-mild-green px-5 pt-10 pb-6  border-black h-fit font-inter shadow-xs overflow-hidden ">
      {/* CIRCLE - BACKGROUND  */}
      <div className="min-h-[600px] min-w-[600px] z-0 absolute rounded-full bg-[#6BC2A1] -left-1/3 top-[145px]"></div>      

      {/* CARD CONTAINER */}
        <div className="relative flex w-full z-10 flex-col items-center justify-center gap-4 tracking-[0.2px] ">
        {/* PRICING */}  
        <div className="text-white flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-3xl text-center font-bold leading-[32px] ">
            Pro
          </h1>

          <h2 className="text-center">
            Experiment the power <br /> of infinite possibilities
          </h2>

          <div className="flex flex-col items-center gap-2">
            <div className="w-fit flex gap-2 justify-between ">
              <div className="flex flex-col">
                <div className="text-lg">$</div>
              </div>
              <div className="mt-2 text-6xl font-semibold">8</div>
            </div>

            <div className="rounded-xl bg-[#85DAB9] px-5 py-2.5 font-medium text-white hover:bg-gray-800">
              Save $50 a year
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="px-10 py-7 bg-[#F9FAFB] rounded-xl ">
          <div className="flex max-w-full flex-col items-center justify-center gap-5 ">
            {/* FEATURE ITEMS */}
            {features.map((el, i) => {
              return (
                <div key={i} className="flex w-full items-center justify-start gap-3">
                  <img src="/tick.png" alt="" className="w-6" />
                  <p className="font-medium  text-black">
                    {el}
                  </p>
                </div>
              );
            })}

            {/* CTA */}
            <button className="bg-mild-green w-full rounded-2xl text-white font-medium shadow-xs py-3 max-w-[250px] mr-auto">
              Go to pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardMain;
