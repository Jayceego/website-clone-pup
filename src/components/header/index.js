import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';

function Header() {
  return (
    <div className='container bg-primary-dark_red md:bg-transparent'>
      <header className="flex items-center mx-auto">
        <div className='flex items-center justify-between w-screen md:w-auto'>
          <a href='#'>
              <Image 
              className='mx-2 my-1 md:ml-0 md:my-0 md:mr-2 md:w-[88px] md:h-[88px]'
              src="/logo.png"
              alt="PUP Logo" 
              width={60}
              height={60}
              />
          </a>
          <FaBars className='h-auto p-2 mr-2 border-2 border-white border-solid min-w-fit md:hidden'/>
        </div>

        <div className='hidden md:block'>
          <div className='mt-5 schoolName font-cinzel'> 
            <a className='text-lg font-bold leading-none text-primary-red'>
              Polytechnic University of the Philippines <br/>
              <span className='text-sm leading-5 text-primary-gray divide-solid'>
              The Country&apos;s 1st PolytechnicU
              </span>
            </a>
          </div>
          <ul className='flex font-bold text-primary-red font-cinzel'>
            <li className='pt-[10px] px-5 pl-0'>
              <a>About PUP</a>
            </li>
            <li className='pt-[10px] px-5'>
              <a>Academic</a>
            </li>
            <li className='pt-[10px] px-5'>
              <a>Students</a>
            </li>
            <li className='pt-[10px] px-5'>
              <a>Research</a>
            </li>
          </ul>
        </div>

        <div className='items-center hidden md:flex h-[30px] search ml-auto'>
          <input 
          className=' px-2 py-[2px] md:w-[113px] lg:w-[158px] xl:w-[197px]  border-[#ccc] border placeholder:text-xs'
          type="search" 
          placeholder="Type keyword here..." 
          />

          <a className='p-2 bg-primary-red'>
            <FaSearch/>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header