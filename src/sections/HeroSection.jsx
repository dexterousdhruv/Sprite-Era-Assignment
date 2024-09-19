import LayoutContainer from "../components/LayoutContainer";

import Companies from "../components/Companies";


const HeroSection = () => {
  return (
    <section className=" w-full bg-gradient-to-br from-[#daefeb] via-gray-50 to-[#daefeb]">
      <LayoutContainer>
        <div className="py-32 md:pt-36 1xl:pt-48 flex flex-col">
          {/* TOP */}
          <div className="flex flex-col items-center gap-20 sm:gap-28 1xl:gap-0 1xl:flex-row 1xl:items-start ">
            {/* IMAGE AND MAIN HEADER */}
            <div className="flex flex-col xs:w-5/6 items-center 1xl:items-start 2xl:max-w-xl " >
              
              {/* HEADINGS */}
              <div className=" w-full font-inter text-charcoal max-1xl:flex flex-col items-center  ">
                <div className="max-1xl:flex flex-col items-center">
                  <h1 className="text-5xl leading-snug font-bold text-center xs:text-6xl xs:leading-tight md:text-7xl md:leading-tight 1xl:text-left 2xl:text-[4.8rem] 2xl:leading-snug mb-6">
                    We’re here to Increase your Productivity
                  </h1>

                  <div className=" w-4/5 xs:w-3/4  2xl:w-5/6 mb-10 ">
                    <img src="/arc.png" alt="" className="" />
                  </div>
                </div>
               

                <p className="w-5/6 text-base max-1xl:text-center  2xl:text-lg font-semibold xl:leading-[30px]">
                  Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-6 sm:gap-8 mt-10 xxs:">
                <button className=" bg-mild-green text-white rounded-l-full rounded-r-full px-7 py-4 text-base tracking-wide ">
                  Try free trial
                </button>

                <button className="flex items-center gap-3">
                  <img src="/play.png" alt="" className="w-10" />
                  <span className="block font-inter text-base font-medium ">View Demo</span>
                </button>
              </div>

            </div>

            {/* HERO IMAGE */}
            <div className="z-20  xl:translate-x-6 2xl:translate-x-16 flex justify-start">
              <img src='/hero.png' alt="home-page-graphic" className=" w-full lg:w-3/4 lg:mx-auto 1xl:w-full " />
            </div>
          </div>

          {/* BOTTOM */}
          <Companies />

        </div>
      </LayoutContainer>
    </section>
  );
};

export default HeroSection;
