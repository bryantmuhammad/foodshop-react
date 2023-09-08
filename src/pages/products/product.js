import React from "react";
import CardList from "../../components/CardList";
import { defer, useLoaderData } from "react-router-dom";
import { loadAllItems } from "../../api/product";
import ListProductSkeleton from "../skeleton/ListProductSkeleton";

const Product = () => {
  const data = useLoaderData();
  return (
    <div className="mb-28">
      <div className="bg-[#E3F1E9] w-full h-96 flex justify-center items-center flex-wrap mb-20">
        <div className="text-blue-teal font-roboto text-heading-one">
          Shop Single
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-7 lg:px-0">
        <CardList className="gap-5 gap-y-5" items={data.items} />
      </div>
    </div>
  );
};

export const loader = () => {
  return defer({
    items: loadAllItems,
  });
};

export default Product;
