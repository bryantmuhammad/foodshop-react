import React, { Suspense } from "react";
import Card from "./Card";
import { Await } from "react-router-dom";
import ListProductSkeleton from "../pages/skeleton/ListProductSkeleton";

const CardList = ({ className, items }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      <Suspense fallback={<ListProductSkeleton count={8} />}>
        <Await resolve={items}>
          {({ data }) =>
            data.data.map((item) => (
              <Card
                id={item.id}
                key={item.name}
                name={item.name}
                priceAfter={item.priceAfter}
                priceBefore={item.priceBefore}
                image={item.image}
              />
            ))
          }
        </Await>
      </Suspense>
    </div>
  );
};

export default CardList;
