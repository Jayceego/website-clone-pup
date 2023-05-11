import Image from "next/image";
import Dropdown from "../dropdown-header";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const aboutPupNav = [
  "University Profile",
  "Vision and Mission",
  "History",
  "Logo and Symbols",
  "Hymn",
  "Annual Reports",
  "Awards and Recognitions",
  "Contact us",
  "Maps",
  "University Code",
  "Institutional Development Plan",
  "Quality Policy Statement",
  "Branches and Satellite Campuses",
  "Memorandum Orders",
  "Executive Orders",
  "CODI Manual",
  "Citizens Charter",
  "Office Memorandum",
  "Strategic Performance Management System",
];

const academicNav = [
  "Academic Programs",
  "Open University System",
  "Graduate Studies",
  "Colleges",
  "Institute of Technology",
  "Senior High School",
  "Laboratory High School",
  "Library Services",
  "Online Public Access Catalog",
  "Quality Assurance",
  "Teaching and Learning Development",
  "PUP eMabini Learning Portal",
  "OVPAA Advisories",
];

const studentNav = [
  "Student Services",
  "Student Organizations",
  "Student Publications",
  "Student Council",
  "Student Handbook",
  "University Registrar",
  "PUP Student Information System",
  "PUP Online Document Request System",
  "PUP Bookstore",
  "Downloadable Forms",
  "Online Job Postings",
];

const researchNav = [
"Researches",
"Extensions",
"Institutional Planning",
"Intellectual Property",
"Research Publications",
"Science and Technology",
"Cultural and Language",
"Strategic Foresight and Innovation",
"Human and Social Development",
"Gender and Development",
"PUP Online Journal System",
"PUP Online Survey for Faculty Evaluation",
"University Thesis and Disseration Manual"
];

function Header() {
  return (
    <div className="container header bg-primary-dark_red md:bg-transparent">
      <header className="flex items-center mx-auto">
        <div className="flex items-center justify-between w-screen md:w-auto">
          <a href="#">
            <Image
              className="mx-2 my-1 md:ml-0 md:my-0 md:mr-2 md:w-[88px] md:h-[88px]"
              src="/logo.png"
              alt="PUP Logo"
              width={60}
              height={60}
            />
          </a>
          <FaBars className="h-auto p-2 mr-2 border-2 border-white border-solid min-w-fit md:hidden" />
        </div>

        <div className="hidden md:block">
          <div className="mt-5 schoolName font-cinzel">
            <a className="text-lg font-bold leading-none cursor-pointer hover:underline text-primary-red">
              Polytechnic University of the Philippines <br />
            </a>
            <p className="text-sm font-bold leading-5 cursor-pointer text-primary-gray divide-solid">
              The Country&apos;s 1st PolytechnicU
            </p>
          </div>
          <ul className="flex font-bold header-items text-primary-red font-cinzel">
            <li className="pt-[10px] px-5 cursor-pointer pl-0">
              <a>About PUP</a>
              <Dropdown navigation={aboutPupNav} />
            </li>
            <li className="pt-[10px] px-5 cursor-pointer">
              <a>Academic</a>
              <Dropdown navigation={academicNav} />
            </li>
            <li className="pt-[10px] px-5 cursor-pointer">
              <a>Students</a>
              <Dropdown navigation={studentNav} />
            </li>
            <li className="pt-[10px] px-5 cursor-pointer ">
              <a>Research</a>
              <Dropdown navigation={researchNav} />
            </li>
          </ul>
        </div>

        <div className="items-center hidden md:flex h-[30px] search ml-auto">
          <input
            className=" px-2 py-[2px] md:w-[113px] lg:w-[158px] xl:w-[197px]  border-[#ccc] border placeholder:text-xs"
            type="search"
            placeholder="Type keyword here..."
          />

          <a className="p-2 bg-primary-red">
            <FaSearch />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
