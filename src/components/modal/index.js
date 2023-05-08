import Image from "next/image";
import { FaPenSquare } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const modalImg = [
  {
    src: "/ts100.png",
    alt: "Philippine Transparency Seal",
  },
  {
    src: "/foi100.png",
    alt: "Freedom of Information",
  },
  {
    src: "/iso100.png",
    alt: "ISO 9001:2015 Certified",
  },
];

const modalItems = [
  {
    icon: <FaPenSquare />,
    title: "Applicant",
  },
  {
    icon: <FaBook/>,
    title: "Student",
  },
  {
    icon: <FaPenSquare />,
    title: "Faculty Member and Employee",
  },
  {
    icon: <FaPenSquare />,
    title: "Researcher or Extensionist",
  },
  {
    icon: <FaPenSquare />,
    title: "Alumni",
  },
  {
    icon: <FaPenSquare />,
    title: "Campus Life",
  },
  {
    icon: <FaPenSquare />,
    title: "Institutional Accreditation",
  },
  {
    icon: <FaPenSquare />,
    title: "View Homepage",
  },
];

function Modal() {
  return (
    <div className="fixed z-10 w-screen h-screen m-3 mx-auto modal-container">
      <div className="relative mx-auto modal ">
        <div className="mx-auto text-center modal-title ">
          <h1 className="mt-8 text-base font-bold leading-7 uppercase mb-9 text-primary-red font-cinzel">
            welcome to the <br />
            <span className="text-[22px] font-semibold ">
              Polytechnic University of the Philippines
            </span>
          </h1>
          <p className=" mb-9 text-primary-low_dark leading-[22px]">Please click/tap the appropriate link to help you in your navigation of our services</p>
        </div>

        <div className="below">
          <div className="flex flex-col w-full items-center px-[15px] mx-auto modal-img">
            <Image
              className="asdasd"
              src={"/logo200.png"}
              alt={""}
              width={"200"}
              height={"200"}
            />
            <div className="flex flex-wrap justify-center small-img">
              {modalImg &&
                modalImg.map((value, key) => {
                  return (
                    <Image
                      key={key}
                      className=""
                      src={value.src}
                      alt={value.alt}
                      width={"100"}
                      height={"100"}
                    />
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col w-full modal-items space-y-2 px-[15px]  ">
            {modalItems &&
              modalItems.map((modal, key) => {
                return (
                  <li
                    key={key}
                    className={
                      "flex text-left items-center text-white bg-primary-red rounded-[3px] px-4 py-3"
                    }
                  >
                    {modal.icon}
                    <a className="ml-3">
                        {modal.title}
                    </a>
                  </li>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
