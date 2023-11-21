"use client";
import * as React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Tech from "@/Techs/class/Tech";

function CarouselHome() {
  const [isCarouselLoaded, setIsCarouselLoaded] = React.useState(false);
  const tech = new Tech();
  const handleCarouselLoad = () => {
    setIsCarouselLoaded(true);
  };
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 100,
    cssEase: "linear",
    touchMove: false,
    centerMode: true,
    onReInit: handleCarouselLoad,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 1500,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 1500,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          speed: 1500,
        },
      },
    ],
  };
  return (
    <div className="flex items-center w-full h-32 lg:my-5">
      <div className={`w-full ${isCarouselLoaded ? "flex" : "hidden"}`}>
        <Slider className={`w-full  fadeIn-1  `} {...settings}>
          {tech.getAllTecnologies().map((e, i) => (
            <div className="relative h-10 sm:h-14 w-10 " key={i}>
              <Image fill src={e.icon} alt="error" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselHome;
