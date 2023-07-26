import React from "react";
import bg from "../image/bg.png";
import Button from "../components/Button";
import card1 from "../image/card-1.jpg";
import card2 from "../image/card-2.jpg";

const Home = () => {
  return (
    <>
      <div
        className="w-full h-[898px] bg-no-repeat bg-right flex justify-center lg:justify-start items-center lg:pl-[260px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-[530px] flex flex-col">
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center py-24 gap-9">
        <div
          className="w-[682px] h-[367px] bg-[length:100%_100%] rounded-[30px] flex items-center pl-10"
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
          className="w-[682px] h-[367px] bg-[length:100%_100%] rounded-[30px] flex items-center pl-10"
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
    </>
  );
};

export default Home;
