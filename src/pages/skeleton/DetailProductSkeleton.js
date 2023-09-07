import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../../components/Button";

const DetailProductSkeleton = () => {
  return (
    <div>
      <div className="bg-[#E3F1E9] w-full h-96 flex justify-center items-center flex-wrap">
        <div className="text-blue-teal font-roboto text-heading-one">
          Shop Single
        </div>
      </div>

      <div className="py-24">
        <div className="flex flex-wrap px-10 lg:px-0 lg:flex-nowrap max-w-[1237px] mx-auto lg:gap-20">
          <Skeleton
            height="100%"
            width={300}
            containerClassName="flex justify-center items-center mx-auto lg:mx-0"
          />

          <div className="text-blue-teal pt-24 w-full">
            <div className="mb-2">
              <Skeleton width={400} height={40} />
            </div>
            <div>
              <Skeleton width={20} count={5} containerClassName="flex gap-1" />
            </div>

            <div className="font-open-sans flex gap-4 mb-5">
              <Skeleton width={100} height={30} />
            </div>

            <Skeleton width="98%" count={2} />

            <div>
              <Skeleton
                containerClassName="flex gap-1"
                count={3}
                width={150}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-4/6 mx-auto text-center">
        <Skeleton
          containerClassName="flex gap-2 justify-center"
          className="py-6 px-5 lg:px-14 font-open-sans text-lg lg:text-2xl font-bold outline-none rounded-2xl"
          count={2}
          width={250}
        />
        <Skeleton count={4} />
      </div>
    </div>
  );
};

export default DetailProductSkeleton;
