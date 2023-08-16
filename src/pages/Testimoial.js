import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import secright from "../image/secright.png";
import secleft from "../image/secleft.png";
import TestimonialList from "./TestimonialList";

const Testimoial = () => {
  return (
    <div className="flex justify-between">
      <img src={secright} className="hidden xl:block" />
      <div className="swiper mt-8 px-2">
        <p className="font-yellowtail text-[36px] text-green-teal text-center mb-2">
          Testimonial
        </p>
        <p className="text-blue-teal font-roboto text-heading-two text-center">
          What Our Customer Saying?
        </p>

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="h-max block cursor-grab"
        >
          <SwiperSlide>
            <TestimonialList />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialList />
          </SwiperSlide>
        </Swiper>

        <hr className="w-full my-[50px] lg:my-[102px]" />
        <div className="grid grid-cols-1 justify-center xl:grid-cols-4">
          <div className="border-4 border-[#7EB693] rounded-full w-[190px] h-[190px] mx-auto flex flex-col justify-center items-center text-blue-teal">
            <p className="text-heading-two font-roboto">100%</p>
            <div className="font-open-sans font-semibold text-lg leading-[29px] ">
              Organic
            </div>
          </div>
          <div className="border-4 border-[#7EB693] rounded-full w-[190px] h-[190px] mx-auto flex flex-col justify-center items-center text-blue-teal">
            <p className="text-heading-two font-roboto">100%</p>
            <div className="font-open-sans font-semibold text-lg leading-[29px] ">
              Organic
            </div>
          </div>
          <div className="border-4 border-[#7EB693] rounded-full w-[190px] h-[190px] mx-auto flex flex-col justify-center items-center text-blue-teal">
            <p className="text-heading-two font-roboto">100%</p>
            <div className="font-open-sans font-semibold text-lg leading-[29px] ">
              Organic
            </div>
          </div>
          <div className="border-4 border-[#7EB693] rounded-full w-[190px] h-[190px] mx-auto flex flex-col justify-center items-center text-blue-teal">
            <p className="text-heading-two font-roboto">100%</p>
            <div className="font-open-sans font-semibold text-lg leading-[29px] ">
              Organic
            </div>
          </div>
        </div>
      </div>
      <img src={secleft} className="hidden xl:block" />
    </div>
  );
};

export default Testimoial;
