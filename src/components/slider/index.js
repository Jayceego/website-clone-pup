import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const imgSrc = [
  "/slide.jpg",
  "/slide 1.jpg",
  "/slide 2.jpg",
  "/slide 3.jpg",
  "/slide 4.jpg",
  "/slide 5.jpg",
  "/slide 6.jpg",
  "/slide 7.jpg",
];

function Slider(imgSwiper) {
  return (
    <div className="-z-50 slider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {imgSrc.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              className="w-full h-auto "
              src={src}
              alt="Slide 1"
              width={1800}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
