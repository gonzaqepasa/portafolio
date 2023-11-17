"use client";
import * as React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cssSvg from "@/utils/images/tecnologies/css-3.svg";
import expressSvg from "@/utils/images/tecnologies/express.svg";
import firebaseSvg from "@/utils/images/tecnologies/firebase.svg";
import gitSvg from "@/utils/images/tecnologies/git.svg";
import htmlSvg from "@/utils/images/tecnologies/html-5.svg";
import javascriptSvg from "@/utils/images/tecnologies/javascript.svg";
import mongoSvg from "@/utils/images/tecnologies/mongodb.svg";
import nextSvg from "@/utils/images/tecnologies/nextjs.svg";
import nodeSvg from "@/utils/images/tecnologies/nodejs.svg";
import postgresSvg from "@/utils/images/tecnologies/postgresql.svg";
import reactSvg from "@/utils/images/tecnologies/react.svg";
import Image from "next/image";

const technologies = [
  cssSvg,
  expressSvg,
  firebaseSvg,
  gitSvg,
  htmlSvg,
  javascriptSvg,
  mongoSvg,
  nextSvg,
  nodeSvg,
  postgresSvg,
  reactSvg,
];

function CarouselHome() {
  const [isCarouselLoaded, setIsCarouselLoaded] = React.useState(false);
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
          slidesToShow: 1,
          speed: 1500,
        },
      },
    ],
  };
  return (
    <div className="flex items-center w-full h-32 my-5">
      <div className={`w-full ${isCarouselLoaded ? "flex" : "hidden"}`}>
        <Slider className={`w-full  fadeIn-1  `} {...settings}>
          {technologies.map((e, i) => (
            <div className="relative h-16 sm:h-14 w-10 " key={i}>
              <Image fill src={e} alt="error" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselHome;
