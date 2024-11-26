"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
}
const ProductCard = () => {
  const data = [
    { id: 1, image: "/chair.webp", title: "Product 1", price: 19.99 },
    { id: 2, image: "/chair.webp", title: "Product 2", price: 29.99 },
    { id: 3, image: "/chair.webp", title: "Product 3", price: 39.99 },
    { id: 4, image: "/chair.webp", title: "Product 4", price: 49.99 },
    { id: 5, image: "/chair.webp", title: "Product 5", price: 59.99 },
    { id: 6, image: "/chair.webp", title: "Product 6", price: 69.99 },
    { id: 7, image: "/chair.webp", title: "Product 7", price: 79.99 },
    { id: 8, image: "/chair.webp", title: "Product 8", price: 89.99 },
    { id: 9, image: "/chair.webp", title: "Product 9", price: 99.99 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    autoplay: true,
    // arrow:false,
    autoplaySpeed: 2000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow flex m-auto justify-center">
          <Image
            className="rounded-full"
            src="/svg/righ.svg"
            alt="Next Arrow"
            width={50} // Adjust size as needed
            height={50}
          />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180 flex m-auto justify-center">
          <Image
            className="rounded-full"
            src="/svg/righ.svg"
            alt="Next Arrow"
            width={50} // Adjust size as needed
            height={50}
          />
        </div>
      </div>
    ),
  };

  return (
    <div className="w-[90%] m-auto mt-5">
      <div className="">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="p-4">
              <div>
                <Image
                  className="m-auto p-1 justify-center rounded-[50px]"
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                />
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCard;
