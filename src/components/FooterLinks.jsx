import React from 'react'
import LayoutContainer from './LayoutContainer'
import { footerLinks } from '../data'
import { FaArrowRight } from 'react-icons/fa6'

const FooterLinks = () => {
  return (
    <>
      <div className='bg-lead flex flex-col gap-12'>

        <div className=' font-inter flex flex-col gap-20 xs:gap-28 lg:flex-row justify-between '>
          {/* LOGO & SEARCHBAR */}
          <div className='flex flex-col gap-6 sm:gap-8 items-center lg:items-start basis-2/5 '>
            <img src="/biccas.png" alt="" className='w-36 lg:w-40' />

            <p className=' text-light-grey text-center lg:text-lg lg:text-left '>
              Get started now try our new product
            </p>

            <div className='flex items-center justify-between border-2 border-light-grey rounded-l-full rounded-r-full w-full p-1 max-w-[25rem]'>
              <div className='pl-4 '>
                <input type="text" name="" placeholder='Enter your email here' className='text-light-grey bg-transparent w-5/6 xs:min-w-full h-full' />
              </div>

              <div className='bg-mild-green rounded-full p-3 '>
                <FaArrowRight className='text-xl text-white' />
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className='flex flex-col gap-10 items-center text-center xs:flex-row xs:text-left justify-between'>
            {footerLinks.map(({title, links}) => (
              <div key={title} className='flex flex-col gap-3 lg:text-lg'>
                <h2 className='text-white font-medium'>{title}</h2>
                {links.map((link, i) => (
                  <a key={i} href="#" className='text-light-grey hover:text-white'>{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* COPYRIGHT  */}
        <div className="font-inter text-center max-xxs:text-sm lg:text-lg text-white bg-lead flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <p className="">
            &copy; {new Date().getFullYear()} Inc. Copyright and rights reserved
          </p>
          <div className="flex items-center gap-2.5">
            <p>Terms and Conditions </p>
            <div className="border rounded-full h-1 w-1 bg-white"></div>
            <p>Privacy Policy</p>
          </div>
        </div>        

      </div>
    </>
  )
}

export default FooterLinks