import React from "react";

const PricingCard = ({ data }) => {
  const { title, desc, price, features, cta } = data
  const formattedText = (text) => {
    // const text = `Have a go and test your <br> superpowers`
    return text.split('<br>').map((part, index) => (
      <span key={index}>
        {part} <br />
      </span>
    ))
  };
  
  return (
    <div className="relative rounded-[20px] bg-white px-5 pt-10 pb-6  border-black h-fit font-inter shadow-xs ">
      {/* CARD CONTAINER */}
      <div className="flex w-full flex-col items-center justify-center gap-4 tracking-[0.2px] ">
        {/* PRICING */}
        <div className="flex flex-col  items-center justify-center gap-4 ">
          <h1 className="text-3xl text-center font-bold leading-[32px] text-black">
            {title}
          </h1>
          
          <h2 className="text-center text-light-grey  ">
            {formattedText(desc)}
          </h2>
       
          <div className=" flex gap-2 justify-between ">
            <div className=" flex flex-col">
              <div className="text-lg  text-light-grey">$</div>
            </div>
            <div className=" mt-2 text-6xl font-semibold ">0</div>
          </div>
        </div>
        
        {/* FEATURES */}
        <div className="px-10 py-7 bg-[#F9FAFB] rounded-xl ">
          <div className="flex max-w-full flex-col items-center justify-center gap-5 ">
            {/* FEATURE ITEMS*/}
            {features.map((el, i) => {
              return (
                <div key={i} className="flex w-full items-center justify-start gap-3">
                  <img src="/tick.png" alt="" className="w-6" />
                    
                  <p className="font-medium  text-black">
                    {el} 
                  </p>
                </div>
              )
            })}

            {/* CTA */}
            <button className="bg-white w-full rounded-2xl text-mild-green font-medium shadow-xs py-3 borde max-w-[250px] mr-auto">
              Signup For Free
            </button>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
