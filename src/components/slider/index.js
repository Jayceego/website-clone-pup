import Image from 'next/image';
import { FaRegEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-dom/hi"

function Slider() {
  return (
    <div className='relative'>
        <Image 
            className='w-full h-auto '
            src="/slide.jpg"
            alt="Slide 1" 
            width={1800}
            height={700}
        />
    </div>
  )
}

export default Slider