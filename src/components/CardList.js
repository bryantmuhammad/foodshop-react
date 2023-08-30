import React from "react";
import Card from "./Card";

const CardList = ({ className, items }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {items.map((item) => (
        <Card
          key={item.name}
          name={item.name}
          priceAfter={item.priceAfter}
          priceBefore={item.priceBefore}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardList;
