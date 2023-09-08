import React from "react";
import Skeleton from "react-loading-skeleton";

const ListProductSkeleton = ({ count = 5 }) => {
  const rows = [];

  for (let i = 0; i < count; i++) {
    rows.push(
      <Skeleton
        className="relative border-2 rounded-[30px] pb-3 bg-white card"
        height={430}
        key={i}
      />
    );
  }

  return <>{rows}</>;
};

export default ListProductSkeleton;
