import React from "react";
import Card from "./Card";

const items = [
  {
    name: "Calabrese Broccoli",
    priceBefore: 20,
    priceAfter: 13,
    image: "../image/items/brokoli.png",
  },
  {
    name: "Fresh Banana Fruites",
    priceBefore: 20,
    priceAfter: 14,
    image: "../image/items/banana.png",
  },
  {
    name: "White Nuts",
    priceBefore: 20,
    priceAfter: 15,
    image: "../image/items/nut.png",
  },
  {
    name: "Mung Bean",
    priceBefore: 20,
    priceAfter: 11,
    image: "../image/items/bean.png",
  },
  {
    name: "Brown Hazelnut",
    priceBefore: 20,
    priceAfter: 14,
    image: "../image/items/hazelnut.png",
  },
  {
    name: "Eggs",
    priceBefore: 20,
    priceAfter: 14,
    image: "../image/items/egg.png",
  },
  {
    name: "Zelco Suji Elaichi Rusk",
    priceBefore: 20,
    priceAfter: 14,
    image: "../image/items/rusk.png",
  },
];

const CardList = ({ className }) => {
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
