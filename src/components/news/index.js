import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
import Image from "next/image";

function News() {
    return (
        <div className="px-4 cursor-pointer mb-7">  
            <div className="article-title flex items-center justify-between pb-[6px] mb-6 border-b-[1px] font-bold border-solid border-primary-light_dark">
                <a href="#" className="pb-2 mb-4 text-primary-red border-b-[1px] font-bold border-solid border-primary-red">Latest News from the University</a> 
                <div className="flex gap-1 mb-3 buttons">
                    <div className="prev px-[2px] py-[1px] text-primary-low_dark">
                        <MdOutlineKeyboardArrowLeft/>
                    </div>
                    <div className="next px-[2px] py-[1px] text-primary-low_dark">
                        <MdOutlineKeyboardArrowRight/>
                    </div>
                </div>
            </div>

            <div className="news"> 
                <div className="relative grid phivolcs place-items-center">
                    <div className="absolute red-shade"></div>
                    <ImFileText2 className="hidden w-auto h-12 mb-20 file-icon"/>
                </div>
                <div className="details">
                    <a href="#" className="text-primary-red ">
                        PHIVOLCS commits to training PUP on REDAS
                    </a>
                    <p className="text-sm text-primary-gray">
                        April 26, 2023
                    </p>
                </div>
            </div>
        </div>
    )
}

export default News