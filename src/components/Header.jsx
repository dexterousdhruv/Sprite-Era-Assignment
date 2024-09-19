import { useState } from 'react'
import LayoutContainer from './LayoutContainer'
import { FaBarsStaggered } from "react-icons/fa6";
import useMediaQuery from '../hooks/useMediaQuery'
import { MdClose } from 'react-icons/md';
import { navLinks } from '../data';

const Header = ({isTopOfPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1024px)')
  const headerBgColor = isTopOfPage ? '' : 'bg-slate-100 shadow-md bg-opacity-10 backdrop-blur-md border border-white border-opacity-20  '
  const headerTextColor = isTopOfPage ? 'text-light-grey' : 'text-gray-500'

  return (
    <>
      <header className={`w-full fixed top-0 z-30 ${headerBgColor} shadow-sm `}>
        <LayoutContainer>
          <nav className='w-full flex justify-between lg:justify-normal py-5'>
            <div className='basis-1/3 flex items-center '>
              <img src="/biccas.png" alt="" className=' max-sm:w-28 max-lg:w-36 max-w-40 h-fit' />
            </div>

            {isAboveMediumScreens ? 
              (
                <div className='basis-2/3 lg:flex justify-between items-center xl:pl-10 font-inter text-base ' >
                  <ul className=' flex items-center justify-between  gap-8 xl:gap-10 max-w-xl'>
                    {navLinks.map((el, i) => (
                      <li key={i} className={`${i === 0 ? "text-black" : headerTextColor} hover:text-black active:text-black`}
                      >
                        <a href="#">{el}</a>
                      </li>
                    ))}
                  </ul>
    
                  <div className=" flex gap-3 xl:gap-5 justify-center items-center">
                    <a href="" className={`${headerTextColor}`}>Login</a>
                    <a href="" className='bg-mild-green px-3 py-2.5 tracking-wide text-white rounded-xl'>Sign Up</a>
                  </div>
                </div>
              ) : (
                <button
                  className=" rounded-full bg-mild-green p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <FaBarsStaggered className="h-6 w-6 text-white" />
                </button>
              )

            }
          </nav>
        </LayoutContainer>
      </header>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled &&
        (
          <div className="fixed right-0 bottom-0 z-40 bg-mild-green  h-full w-[300px] bg-primary-100 drop-shadow-xl ">
            {/* CLOSE ICON */}
            <div className="flex justify-end w-full p-12">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <MdClose className="h-8 w-8 text-white" />
            </button>
            </div>
            
            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white font-medium font-inter">
              {navLinks.map((value, i) => (
                <a href='#' key={i} className='hover:text-gray-100 cursor-pointer' >{value}</a>
              ))}
            </div>
            
          </div>
        )
      }
    </>
  )
}

export default Header