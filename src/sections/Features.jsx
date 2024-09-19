import LayoutContainer from "../components/LayoutContainer";
import { PiPulse } from "react-icons/pi";
import { FiPieChart } from "react-icons/fi";
import { GrCommand } from "react-icons/gr";


const Features = () => {
  return (
    <section className="w-full bg-chalk py-20 lg:py-24 2xl:py-28 ">
      <LayoutContainer>
        <div className="flex flex-col justify-center items-center gap-20 font-inter text-charcoal md:flex-row md:items-start md:justify-between md:gap-10 2xl:gap-x-40">
          {/* LEFT */}
          <div className="basis-3/5 flex flex-col items-center gap-8 sm:gap-12 md:items-start max-w-[60ch] 2xl:max-w-[70ch] ">
            
            <h2 className="text-4xl text-center leading-tight font-semibold xs:text-5xl xs:leading-[1.2] md:text-left 2xl:text-[3.5rem] 2xl:leading-tight" >
              How we support our partner all over the world
            </h2>

            <p className="text-center leading-relaxed lg:leading-loose text-light-grey md:text-left">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>

            <div className="flex xs:gap-x-40 justify-between items-center sm:w-full ">
              <div className=" w-4/5 flex flex-col items-center md:items-start gap-1 sm:gap-2 ">
                <img src="/star-5.png" alt="" className="min-w-24 w-2/3 sm:w-32 xl:w-36 "  />
                <span className="lg:text-lg">
                  <span className="font-semibold">4.9</span> / 5 rating{" "}
                </span>
                <span className="font-semibold text-light-grey lg:text-lg">databricks</span>
              </div>
              <div className="w-4/5 flex flex-col items-center md:items-start gap-1 sm:gap-2  ">
                <img src="/star-4.png" alt="" className="min-w-24 w-2/3 sm:w-32 xl:w-36 " />
                
                <span className="lg:text-lg">
                  <span className="font-semibold">4.8</span> / 5 rating{" "}
                </span>
                <span  className="font-semibold text-light-grey lg:text-lg">Chainalysis</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="basis-2/5 flex flex-col px-3 md:px-0 gap-10 2xl:mt-4">
            
            <div className="flex justify-between items-start gap-6">
              <div className="bg-white p-3.5 rounded-xl shadow-xs  aspect-square ">
                <PiPulse className="text-2xl font-bold text-mild-green 2xl:text-[28px]" />
              </div>

              <div className="w-full">
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-2xl font-bold lg:text-3xl">Publishing</h3>

                  <p className="text-md text-light-grey lg:text-lg">
                    Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand.
                  </p>
                </div>
              </div> 
            </div>

            <div className="flex justify-between items-start gap-6">
              <div className="bg-white p-3.5 rounded-xl shadow-xs  aspect-square ">
                <FiPieChart className="text-2xl font-bold text-mild-green 2xl:text-[28px]" />
              </div>

              <div className="w-full">
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-2xl font-bold lg:text-3xl">Analytics</h3>

                  <p className="text-md text-light-grey lg:text-lg">
                    Analyze your performance and create gorgeous report. We always bring proven results.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start gap-6">
              <div className="bg-white p-3.5 rounded-xl shadow-xs  aspect-square ">
                <GrCommand className="text-2xl font-bold text-mild-green 2xl:text-[28px]" />
              </div>

              <div className="w-full">
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-2xl font-bold lg:text-3xl">Engagement</h3>

                  <p className="text-md text-light-grey lg:text-lg">
                    Quickly navigate you and engage with your audience, understanding their needs.
                  </p>
                </div>  
              </div>
            </div>

          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Features;
