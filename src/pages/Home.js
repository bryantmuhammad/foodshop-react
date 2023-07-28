import React from "react";
import bg from "../image/bg.png";
import Button from "../components/Button";
import card1 from "../image/card-1.jpg";
import card2 from "../image/card-2.jpg";
import bg2 from "../image/bg-second.png";
import leaf from "../image/leaf.png";
import mail from "../image/mail.png";
import Card from "../components/Card";
import secright from "../image/secright.png";
import secleft from "../image/secleft.png";
import testimoni from "../image/testimoni.jpg";

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

      <div className="flex flex-col lg:flex-row bg-[#F9F8F8] lg:px-60 lg:py-28">
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

      <div className="flex justify-between">
        <img src={secright} />
        <div className="mt-8">
          <p className="font-yellowtail text-[36px] text-green-teal text-center mb-2">
            Testimonial
          </p>
          <p className="text-blue-teal font-roboto text-heading-two text-center">
            What Our Customer Saying?
          </p>
          <div className="flex items-center justify-center flex-col pt-[60px] gap-5">
            <img src={testimoni} className="rounded-full" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="27"
              viewBox="0 0 124 27"
              fill="none"
            >
              <path
                d="M13.9264 2.78166C14.234 1.87797 15.5121 1.87796 15.8197 2.78166L17.7879 8.5641C17.9259 8.96936 18.3065 9.24187 18.7346 9.24187H25.0014C25.9814 9.24187 26.3765 10.5051 25.5713 11.0636L20.5825 14.5235C20.2157 14.7779 20.0619 15.2448 20.2058 15.6674L22.13 21.3205C22.4408 22.2337 21.4061 23.0142 20.6134 22.4644L15.4429 18.8785C15.1002 18.6408 14.6459 18.6408 14.3031 18.8785L9.13263 22.4644C8.33996 23.0142 7.30524 22.2337 7.61607 21.3205L9.54027 15.6674C9.68414 15.2448 9.53039 14.7779 9.1635 14.5235L4.17474 11.0636C3.3695 10.5051 3.76469 9.24187 4.74463 9.24187H11.0115C11.4396 9.24187 11.8202 8.96936 11.9581 8.5641L13.9264 2.78166Z"
                fill="#FFA858"
              />
              <path
                d="M37.4853 2.92763C37.7847 2.00631 39.0881 2.00631 39.3874 2.92763L41.2145 8.55088C41.3483 8.9629 41.7323 9.24187 42.1655 9.24187H48.0781C49.0468 9.24187 49.4496 10.4815 48.6659 11.0509L43.8825 14.5263C43.532 14.781 43.3853 15.2323 43.5192 15.6443L45.3463 21.2677C45.6456 22.189 44.5911 22.9551 43.8074 22.3857L39.0242 18.9103C38.6737 18.6557 38.1991 18.6557 37.8486 18.9103L33.0653 22.3857C32.2816 22.9551 31.2271 22.189 31.5264 21.2677L33.3535 15.6443C33.4874 15.2323 33.3407 14.781 32.9903 14.5263L28.2069 11.0509C27.4232 10.4815 27.826 9.24187 28.7947 9.24187H34.7072C35.1404 9.24187 35.5244 8.9629 35.6583 8.55088L37.4853 2.92763Z"
                fill="#FFA858"
              />
              <path
                d="M61.0533 2.78166C61.3609 1.87797 62.639 1.87796 62.9466 2.78166L64.9149 8.5641C65.0528 8.96936 65.4334 9.24187 65.8615 9.24187H72.1284C73.1083 9.24187 73.5035 10.5051 72.6983 11.0636L67.7095 14.5235C67.3426 14.7779 67.1889 15.2448 67.3327 15.6674L69.2569 21.3205C69.5678 22.2337 68.533 23.0142 67.7404 22.4644L62.5699 18.8785C62.2271 18.6408 61.7728 18.6408 61.4301 18.8785L56.2596 22.4644C55.4669 23.0142 54.4322 22.2337 54.743 21.3205L56.6672 15.6674C56.8111 15.2448 56.6573 14.7779 56.2905 14.5235L51.3017 11.0636C50.4965 10.5051 50.8916 9.24187 51.8716 9.24187H58.1384C58.5665 9.24187 58.9471 8.96936 59.0851 8.5641L61.0533 2.78166Z"
                fill="#FFA858"
              />
              <path
                d="M84.6123 2.92763C84.9116 2.00631 86.215 2.00631 86.5144 2.92763L88.3414 8.55088C88.4753 8.9629 88.8593 9.24187 89.2925 9.24187H95.205C96.1737 9.24187 96.5765 10.4815 95.7928 11.0509L91.0094 14.5263C90.659 14.781 90.5123 15.2323 90.6462 15.6443L92.4732 21.2677C92.7726 22.189 91.7181 22.9551 90.9344 22.3857L86.1511 18.9103C85.8006 18.6557 85.326 18.6557 84.9755 18.9103L80.1923 22.3857C79.4085 22.9551 78.3541 22.189 78.6534 21.2677L80.4805 15.6443C80.6143 15.2323 80.4677 14.781 80.1172 14.5263L75.3338 11.0509C74.5501 10.4815 74.9529 9.24187 75.9216 9.24187H81.8341C82.2674 9.24187 82.6513 8.9629 82.7852 8.55088L84.6123 2.92763Z"
                fill="#FFA858"
              />
              <path
                d="M108.18 2.78166C108.488 1.87797 109.766 1.87796 110.074 2.78166L112.042 8.5641C112.18 8.96936 112.56 9.24187 112.988 9.24187H119.255C120.235 9.24187 120.63 10.5051 119.825 11.0636L114.836 14.5235C114.47 14.7779 114.316 15.2448 114.46 15.6674L116.384 21.3205C116.695 22.2337 115.66 23.0142 114.867 22.4644L109.697 18.8785C109.354 18.6408 108.9 18.6408 108.557 18.8785L103.387 22.4644C102.594 23.0142 101.559 22.2337 101.87 21.3205L103.794 15.6674C103.938 15.2448 103.784 14.7779 103.417 14.5235L98.4286 11.0636C97.6234 10.5051 98.0186 9.24187 98.9985 9.24187H105.265C105.693 9.24187 106.074 8.96936 106.212 8.5641L108.18 2.78166Z"
                fill="#FFA858"
              />
            </svg>
            <p className="text-center text-[#525C60] text-[18px] font-open-sans">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <p className="text-blue-teal font-roboto">Sara Taylor </p>
          </div>
        </div>
        <img src={secleft} />
      </div>
    </>
  );
};

export default React.memo(Home);
