import React from 'react'

const FooterForm = () => {
  return (
    <div className='w-full min-[490px]:w-5/6 bg-mild-lead rounded-2xl font-inter text-white px-8 py-10 sm:max-w-[550px]'>
      {/* TITLE */}
      <div className='flex flex-col gap-y-8 max-w-[400px] mx-auto'>
        <div className='flex flex-col gap-y-3 items-center'>
          <img src="/favicon.png" alt="" className='w-16' />
          <span className='text-center text-2xl'>Get Started</span>
        </div>

        {/* FORM */}
        <form className='flex flex-col gap-y-5'>
          <div className='flex flex-col gap-y-3'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email' className='text-light-grey font-inter text-sm px-5 py-2.5 rounded-lg outline-none ' />
          </div>

          <div className='flex flex-col gap-y-3'>
            <label htmlFor="">Message</label>
            <textarea type="text" placeholder='What do you say?' rows={4} className='text-light-grey resize-none font-inter text-sm px-5 py-2.5 rounded-lg outline-none' />
          </div>

          <div className='w-full'>
            <button type="button" className='text-sm font-medium bg-mild-green w-full py-3.5 rounded-lg mb-1'>
              Request Demo
            </button>
            <span className='text-light-grey text-sm block w-fit ml-auto '>
              or{" "} 
              <a href="" className='text-white'>Start Free trial</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FooterForm