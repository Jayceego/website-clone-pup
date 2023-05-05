import Image from "next/image";
import GovItems from "../gov-items";

function GovFooter() {
  return (
    <div className="mx-auto lg:flex  pt-[10px] px-[15px] pb-5">
      <div className="flex govlogo">
        <Image
          className=" max-w-[148px] max-h-[165px] cursor-pointer  rounded-xl img"
          src="/govph-seal.png"
          alt="Republic of the Philippines Logo"
          width={148}
          height={165}
        />

        <div className="gov-title">
          <h5 className="text-xs font-semibold text-primary-gray mt-5 mb-[10px]">
            Republic of the Philippines
          </h5>
          <p className=" text-[8pt] lg:w-4/5 text-primary-low_dark">
            All content is in the public domain unless otherwise stated.
          </p>
        </div>
      </div>
      <div className="aboutGov lg:max-w-[33.33%]">
        <h5 className="text-xs font-semibold text-primary-gray mt-5 mb-[10px]">
          About GOVPH
        </h5>
        <p className=" text-[8pt] lg:w-4/5 text-primary-low_dark">
          Learn more about the Philippine government, its structure, how
          government works and the people behind it.
        </p>
        <a className="block text-[8pt] text-primary-dark_gray font-normal leading-6 select-none hover:underline hover:cursor-pointer">
          Official Gazette
        </a>
        <a className="block text-[8pt] text-primary-dark_gray font-normal leading-6 select-none hover:underline hover:cursor-pointer">
          Open Data Portal
        </a>
      </div>
      <div className="govLinks">
        <GovItems 
        title="Government Links"
        items={["Office of the President",
        "Office of the Vice President",
        "Senate of the Philippines",
        "House of Representatives",
        "Supreme Court",
        "Court of Appeals",
        "Sandiganbayan"]}
        />
      </div>
    </div>
  );
}

export default GovFooter;
