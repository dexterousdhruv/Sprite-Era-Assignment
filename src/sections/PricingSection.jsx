import { useState } from "react";
import LayoutContainer from "../components/LayoutContainer";
import PricingCard from "../components/PricingCard";
import PricingCardMain from "../components/PricingCardMain";
import { pricePlans } from "../data";

const PricingSection = () => {
  const planTypes = ['Bill Monthly', 'Bill Yearly']
  const [plan, setPlan] = useState(planTypes[1])

  const switchType = (val) => setPlan(val)
  return (
    <section className="w-full bg-gradient-to-bl from-[#daefeb] via-slate-50 to-[#fff]">
      <LayoutContainer>
        <div className="flex flex-col items-center gap-9 sm:gap-11 py-24 lg:py-28">
          {/* TITLE */}
          <h2 className="text-center text-4xl leading-tight font-bold xs:text-[2.5rem] xs:leading-snug sm:text-5xl sm:leading-normal">Choose Plan <br /> That's Right For You</h2>

          {/* DESCRIPTION */}
          <p className="font- text-center sm:text-lg text-light-grey">
            Choose plan that works best for you, feel free to contact us.
          </p>

          {/* PLAN TYPES */}
          <div className=" max-w-[352px] shadow-xs bg-white rounded-[10px] p-2">
            <div className="flex justify-center gap-x-4" >
              {planTypes.map((type, i) => {
                const active = plan === type

                return (
                  <button
                    key={i}
                    onClick={() => switchType(type)}
                    className={`basis-1/2 text-nowrap font-medium sm:text-lg ${active ? "bg-mild-green text-white" : "text-black"} rounded-[10px] px-9 py-3.5`}
                  >
                    {type}
                  </button>
                )
              })}
            </div>
          </div>

          {/* PRICING CARDS */}
          <div className="flex flex-col gap-12 mt-12 items-center justify-center md:flex-row md:flex-wrap min-[1355px]:gap-7 ">
            {pricePlans.map((data, i) => (
              i === 1 ? <PricingCardMain key={i} /> : <PricingCard data={data} key={i} />
            ))} 
          </div>

        </div>
      </LayoutContainer>
    </section>
  );
};

export default PricingSection;
