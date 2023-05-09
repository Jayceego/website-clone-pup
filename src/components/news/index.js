import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

function News() {
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

  const newsItem = [
    {
      title: "PUP is top 20 in EDURANK top 100 universities in PH",
      date: "May 03, 2023",
      src: "/news1.jpg",
    },
    {
      title: "PHIVOLCS commits to training PUP on REDAS",
      date: "April 26, 2023",
      src: "/news2.jpg",
    },
    {
      title: "Earth Day 2023 celebrated through the arts",
      date: "April 26, 2023",
      src: "/news3.jpg",
    },
    {
      title: "DBM Sec. Pangandaman and DepEd Usec Jumamil-Mercado receives Tanglaw ng Bayan Award",
      date: "April 25, 2023",
      src: "/news4.jpg",
    },
    {
      title: "#GetThatBar2022: PUP Law retains top performance",
      date: "April 25, 2023",
      src: "/news5.jpg",
    },
    {
      title: `CSSD works with various stakeholders for history
      and cultural heritage promotion`,
      date: "April 25, 2023",
      src: "/news6.jpg",
    },
    {
      title: `Philhealth employees nationwide take Civil Service
      Review with ICPD`,
      date: "April 20, 2023",
      src: "/news7.jpg",
    },
    {
      title: `PUP partners with 350 Pilipinas on "Climate Deals"`,
      date: "April 20, 2023",
      src: "/news8.jpg",
    },
    {
      title: `CSSD officially becomes an associate member of the
      PSSC`,
      date: "April 12, 2023",
      src: "/news9.jpg",
    },
    {
      title: `Sen. Risa graces EMO's F2F gender sensitivity
      training`,
      date: "April 04, 2023",
      src: "/news10.jpg",
    },
  ];

  return (
    <div className="px-4 mx-auto cursor-pointer lg:m-0 mb-7">
      <div className="article-title flex items-center justify-between mb-6 border-b-[1px] font-bold border-solid border-primary-light_dark">
        <a
          href="#"
          className="pb-2 text-primary-red border-b-[1px] font-bold border-solid border-primary-red"
        >
          Latest News from the University
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
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={0}
        ref={swiperRef}
      >
        {newsItem.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="news">
                {/* Image */}
                <div
                  className="relative grid lg:min-w-[450px] news-item place-items-center"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  {/* red bg */}
                  <div className="absolute red-shade"></div>
                  {/* File icon */}
                  <ImFileText2 className="hidden w-auto h-12 mb-20 file-icon" />
                </div>
                <div className="details">
                  <a href="#" className="text-primary-red ">
                    {item.title}
                  </a>
                  <p className="text-sm text-primary-gray">{item.date}</p>
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
