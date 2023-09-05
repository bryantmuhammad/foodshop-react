import React, { useEffect, useState } from "react";
import headerRight from "../../image/detail/detail-header-right.png";
import headerLeft from "../../image/detail/detail-header-left.png";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

const DetailProduct = () => {
  const [item, setItem] = useState({});
  const data = useParams();
  const { idProduct } = data;

  useEffect(() => {
    axios({
      url: `/api/item/${idProduct}`,
      method: "GET",
    }).then((res) => {
      setItem(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className="w-full mt-11 relative">Test</div>
    </div>
  );
};

export default DetailProduct;
