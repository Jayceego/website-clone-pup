import Image from "next/image";
import { FaPenSquare } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { HiBuildingLibrary } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { useState, useEffect } from "react";

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
    icon: <FaBook />,
    title: "Student",
  },
  {
    icon: <FaUsers />,
    title: "Faculty Member and Employee",
  },
  {
    icon: <FaFlask />,
    title: "Researcher or Extensionist",
  },
  {
    icon: <FaGraduationCap />,
    title: "Alumni",
  },
  {
    icon: <HiBuildingLibrary />,
    title: "Campus Life",
  },
  {
    icon: <FaEdit />,
    title: "Institutional Accreditation",
  },
  {
    icon: <FaAlignJustify />,
    title: "View Homepage",
  },
];

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const handleClose = () => {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.add("closing");
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

   const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 w-screen h-screen p-3 mx-auto modal-container">
          <div className="relative mx-auto modal ">
            <span
              className="close text-primary-low_dark opacity-30 hover:opacity-100 text-xl mt-2 font-semibold float-right cursor-pointer mr-3"
              onClick={handleClose}
            >
              &times;
            </span>
            <div className="mx-auto text-center modal-title ">
              <h1 className="mt-8 text-base font-bold uppercase mb-9 text-primary-red font-cinzel">
                welcome to the <br />
                <span className="text-[22px] leading-7 font-bold ">
                  Polytechnic University of the Philippines
                </span>
              </h1>
              <p className=" mb-9 text-primary-low_dark leading-[22px]">
                Please click/tap the appropriate link to help you in your
                navigation of our services
              </p>
            </div>

            <div className="below">
              <div className="flex flex-col w-full items-center pr-[15px] mx-auto modal-img">
                <Image
                  className="my-[5%] asdasd"
                  src={"/logo200.png"}
                  alt={""}
                  width={"200"}
                  height={"200"}
                />
                <div className="flex flex-wrap justify-center mb-10 small-img">
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
              <div className="flex flex-col w-full modal-items gap-[5px] pl-[15px]  ">
                {modalItems &&
                  modalItems.map((modal, key) => {
                    return (
                      <li
                        key={key}
                        className={
                          "flex text-lg text-left items-center text-white bg-primary-red rounded-[3px] px-4 py-[10px]"
                        }
                      >
                        {modal.icon}
                        <a className="ml-3">{modal.title}</a>
                      </li>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
