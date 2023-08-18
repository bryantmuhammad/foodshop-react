import React from "react";
import Card from "./Card";

const CardList = ({ className }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
      <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
      <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
      <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
      <Card name="Calabrese Broccoli" priceAfter="20" priceBefore="13" />
    </div>
  );
};

export default CardList;
