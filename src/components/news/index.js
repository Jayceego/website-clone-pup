import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

function News({items, slidesnum, head, spacing}) {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="px-4 mx-auto cursor-pointer articleNews lg:m-0 mb-7">
      <div className="article-title flex items-center justify-between mb-6 border-b-[1px] font-bold border-solid border-primary-light_dark">
        <a
          href="#"
          className="pb-2 text-primary-red border-b-[1px] font-bold border-solid border-primary-red"
        >
          {head}
        </a>
        <div className="flex gap-1 mb-3 buttons">
          <button
            className="prev px-[2px] py-[1px] text-primary-low_dark"
            onClick={handlePrevClick}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className="next px-[2px] py-[1px] text-primary-low_dark"
            onClick={handleNextClick}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        className="lg:max-w-[450px] news-swiper"
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        autoplay={{
          delay: 3000,
        }}
        centeredSlides={false}
        slidesPerView={slidesnum}
        slidesPerGroup={1}
        spaceBetween={spacing}
        ref={swiperRef}
      >
        {items.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="news">
                {/* Image */}
                <div
                  className="relative grid news-item place-items-center"
                  style={{ backgroundImage: `url(${slide.src})` }}
                >
                  {/* red bg */}
                  <div className="absolute red-shade"></div>
                  {/* File icon */}
                  <ImFileText2 className="hidden w-auto h-12 mb-20 file-icon" />
                </div>
                <div className="details">
                  <a href="#" className="text-primary-red ">
                    {slide.title}
                  </a>
                  <p className="text-sm text-primary-gray">{slide.date}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default News;
