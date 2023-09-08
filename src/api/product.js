import { defer } from "react-router-dom";
import axios from "../utils/axios";

export const loadAllItems = () => {
  return axios({
    url: "/api/item",
    method: "GET",
  });
};

export const deferAllItems = () => {
  return defer({
    items: loadAllItems(),
  });
};
