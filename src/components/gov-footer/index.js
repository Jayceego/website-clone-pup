import Image from "next/image";

function GovFooter() {
  return (
    <div className="mx-auto pt-[10px] px-[15px] pb-5">
      <div className="govlogo">
        <Image
          className=" max-w-[148px] h-auto cursor-pointer  rounded-xl img"
          src="/govph-seal.png"
          alt="Republic of the Philippines Logo"
          width={148}
          height={100}
        />

        <div className="gov-title">
            <h5> Republic of the Philippines</h5>
            <p></p>
        </div>
      </div>
    </div>
  );
}

export default GovFooter;
