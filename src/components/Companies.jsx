import React from 'react'

const Companies = () => {
  return (
    <div className='  mt-24 xs:mt-28 md:mt-36 xl:mt-40 flex flex-col gap-14 xl:gap-16'>
      <h1 className='text-center font-inter px-2  text-3xl leading-snug sm:text-4xl 1xl:text-[2.6rem]  font-bold max-w-[60ch]'>
        More than 25,000 teams use Collabs
      </h1>

      <div className=''>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 xl:gap-0 xs:justify-between 1xl:justify-evenly items-center">
          <div className="">
            <img src="/unsplash.png" alt="" className='w-5/6 xl:w-[95%] mx-auto max-w-44' />
          </div>
          <div className="">
            <img src="/notion.png" alt="" className='w-5/6 xl:w-[95%] mx-auto max-w-44' />
          </div>
          <div className="">
            <img src="/intercom.png" alt="" className='w-5/6 xl:w-[95%] mx-auto max-w-44' />
          </div>
          <div className="">
            <img src="/descript.png" alt="" className='w-5/6 xl:w-[95%] mx-auto max-w-44' />
          </div>
          <div className="">
            <img src="/grammarly.png" alt="" className='w-5/6 xl:w-[95%] mx-auto max-w-44' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Companies