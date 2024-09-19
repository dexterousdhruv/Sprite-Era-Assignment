import FooterForm from "../components/FooterForm"
import FooterLinks from "../components/FooterLinks"
import LayoutContainer from "../components/LayoutContainer"

const Footer = () => {
  return (
    <section className="w-full py-16 bg-lead sm:pt-20 lg:pt-24">
      <LayoutContainer>
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* TOP */}
          <div className="flex flex-col items-center gap-20 font-inter text-light-grey lg:flex-row lg:gap-10 lg:items-start lg:justify-between">
            {/* TESTIMONIALS  */}
            <div className=" flex flex-col gap-8 max-w-[360px] xs:max-w-[460px] mx-auto lg:mx-0">
              <h2 className="text-white font-bold text-4xl text-center leading-tight xs:text-5xl xs:leading-snug xs:text-left ">
                People are Saying About DoWhith
              </h2>
              
              <p className="text-center text-sm xs:text-base xs:text-left ">
                Everything you need to accept to payment and grow your money of manage anywhere on planet
              </p>

              <div>
                <img src="/quote.png" alt="" className="w-8 xs:w-12" />
              </div>

              <div >
                <p className=" mb-6 text-sm xs:text-base  ">
                  I am very helped by this E wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time.
                </p>

                <p className="text-sm sm:text-base">_Aria Zinanrio</p>
              </div>

             
              <div className=" basis-5/6 flex items-center justify-between lg:justify-start lg:gap-6 ">
                <img src="/user-1.png" alt="" className="w-12 xxs:w-14" />
                <img src="/user-2.png" alt="" className="w-12 xxs:w-14" />
                <img src="/user-3.png" alt="" className="w-12 xxs:w-14" />
                <img src="/user-4.png" alt="" className="w-12 xxs:w-14" />
                <img src="/play-solid.png" alt="" className="w-12 xxs:w-14" />
              </div>
            
                
            </div>
            
            {/* FORM */}
              <FooterForm />

          </div>

          {/* BOTTOM - LINKS */}
          <FooterLinks />
       </div>
      </LayoutContainer>
    </section>
  )
}

export default Footer