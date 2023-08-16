import React from "react";
import bg from "../image/bg.png";
import Button from "../components/Button";
import card1 from "../image/card-1.jpg";
import card2 from "../image/card-2.jpg";
import bg2 from "../image/bg-second.png";
import leaf from "../image/leaf.png";
import mail from "../image/mail.png";
import Card from "../components/Card";

import Testimoial from "./Testimoial";

const Home = () => {
  return (
    <>
      <div
        className="w-full h-[898px] bg-no-repeat bg-right flex justify-center lg:justify-start items-center lg:pl-[260px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-[530px] flex flex-col px-6 lg:px-0">
          <p className="font-yellowtail text-green-teal text-4xl font-normal">
            100% Natural Food
          </p>
          <p className="text-heading-one text-blue-teal font-roboto leading-snug">
            Choose the best healthier way of life
          </p>
          <Button>
            Explore Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
              <path
                d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center py-24 gap-9">
        <div
          className="w-11/12 lg:w-[682px] h-[267px] lg:h-[367px] bg-[length:100%_100%] rounded-[30px] flex items-center pl-10"
          style={{ backgroundImage: `url(${card2})` }}
        >
          <div>
            <p className="font-yellowtail text-white text-4xl">Natural!!</p>
            <p className="text-heading-three text-white font-roboto">
              Get Garden
              <br /> Fresh Fruits
            </p>
          </div>
        </div>

        <div
          className="w-11/12 lg:w-[682px] h-[267px] lg:h-[367px] bg-[length:100%_100%] rounded-[30px] flex items-center pl-10"
          style={{ backgroundImage: `url(${card1})` }}
        >
          <div>
            <p className="font-yellowtail text-green-teal text-4xl">Offer!!</p>
            <p className="text-heading-three font-roboto text-blue-teal">
              Get 10% off <br />
              on Vegetables
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row bg-[#F9F8F8] lg:px-60 lg:py-28">
        <img src={bg2} />
        <div className="px-3 ">
          <p className="text-green-teal font-yellowtail text-[36px] mb-2">
            About Us
          </p>
          <p className="font-roboto text-[50px] font-bold text-blue-teal leading-tight mb-4">
            We Believe in Working Accredited Farmers
          </p>
          <p className="text-lg text-gray-500 leading-6 text-justify mb-11">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <div className="flex gap-5 mb-8">
            <div className="py-7 px-7 bg-white w-fit rounded-[20px]">
              <img src={leaf} className="w-[46px] h-[46px]" />
            </div>
            <div>
              <p className="text-2xl font-roboto text-blue-teal font-extrabold leading-tight mb-2">
                Organic Foods Only
              </p>
              <p className="text-gray-500 leading-6 text-lg">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="py-7 px-7 bg-white w-fit rounded-[20px]">
              <img src={mail} className="w-[46px] h-[46px]" />
            </div>
            <div>
              <p className="text-2xl font-roboto text-blue-teal font-extrabold leading-tight mb-2">
                Quality Standards
              </p>
              <p className="text-gray-500 leading-6 text-lg">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>

          <Button variant="blue" className="mt-11">
            Shop Now
          </Button>
        </div>
      </div>

      <div className="mb-14 py-16">
        <p className="font-yellowtail text-[36px] text-green-teal text-center mb-2">
          Categories
        </p>
        <p className="text-blue-teal font-roboto text-heading-two text-center">
          Our Products
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:px-64 gap-5 px-3 gap-y-5">
          <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
          <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
          <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
          <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
          <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
        </div>
        <Button className="mx-auto text-white" variant="blue">
          Load More
        </Button>
      </div>

      <Testimoial />

      <div className="h-[1050px] bg-blue-teal pt-[367px] pb-52">
        <div className="max-w-7xl mx-auto">
          <div className="font-yellowtail text-4xl text-green-teal">Offer</div>
          <div className="flex justify-between mb-12">
            <div className="font-roboto text-heading-two text-white">
              We Offering Organic For You
            </div>
            <Button className="text-blue-teal bg-yellow-teal">
              View All Product
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 4 gap-5 gap-y-5">
            <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
            <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
            <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
            <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);
