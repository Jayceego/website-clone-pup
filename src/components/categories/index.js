import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";

function Categories() {
  return (
    <div className='container'>
    <div className='flex mx-auto mt-[60px] justify-between md:justify-around categories text-primary-red'>
      <div className="flex flex-col items-center text-center cursor-pointer icons">
        <a href="#" className="relative grid w-20 mb-5 place-items-center">
          <FaRegEdit className="absolute w-[2em] h-auto text-primary-red"/>
          <div className="w-[4.5rem] h-[4.5rem] circle"></div>
        </a>
        <a className="font-semibold ">
          Apply Now
        </a>
      </div>

      <div className="flex flex-col items-center text-center cursor-pointer icons">
        <a href="#" className="relative grid w-20 mb-5 place-items-center">
          <FaStar className="absolute w-[2em] h-auto text-primary-red"/>
          <div className="w-[4.5rem] h-[4.5rem] circle"></div>
        </a>
        <a href="#" className="font-semibold">
          Attend an Event
        </a>
      </div>

      <div className="flex flex-col items-center text-center cursor-pointer icons">
        <a href="#" className="relative grid w-20 mb-5 place-items-center">
          <FaCubes className="absolute w-[2em] h-auto text-primary-red"/>
          <div className="w-[4.5rem] h-[4.5rem] circle"></div>
        </a>
        <a className="font-semibold max-w-[6rem] lg:max-w-none">
        PUP and Sustainability <br/> Development Programs
        </a>
      </div>

      <div className="flex flex-col items-center text-center cursor-pointer icons">
        <a href="#" className="relative grid w-20 mb-5 place-items-center">
          <FaCubes className="absolute w-[2em] h-auto text-primary-red"/>
          <div className="w-[4.5rem] h-[4.5rem] circle"></div>
        </a>
        <a className="font-semibold">
          Campus Life
        </a>
      </div>
    </div>
    </div>
  )
}

export default Categories;
