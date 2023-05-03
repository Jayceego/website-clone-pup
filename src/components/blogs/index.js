import Image from "next/image";

const images = [
  {
    src: "/seal.jpg",
    alt: "Government Logo 1",
  },
  {
    src: "/FOI.jpg",
    alt: "Government Logo 2",
  },
  {
    src: "/data-priv.jpg",
    alt: "Government Logo 3",
  },
  {
    src: "/gendev.jpg",
    alt: "Government Logo 4",
  },
  {
    src: "/iso.jpg",
    alt: "Government Logo 5",
  },
];

function Blogs() {
  return (
    <div className="flex flex-col gap-2 px-4 mx-auto lg:m-0 blogs place-items-center">
      {images.map((image, index) => (
        <Image
          key={index}
          className="w-full cursor-pointer rounded-xl img"
          src={image.src}
          alt={image.alt}
          width={500}
          height={500}
        />
      ))}
    </div>
  );
}

export default Blogs;
