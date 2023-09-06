const getImage = (image) => {
  switch (image) {
    case "banana":
      return require("../image/items/banana.png");
      break;
    case "brokoli":
      return require("../image/items/brokoli.png");
    case "nut":
      return require("../image/items/nut.png");
      break;
    case "bean":
      return require("../image/items/bean.png");
      break;
    case "hazelnut":
      return require("../image/items/hazelnut.png");
      break;
    case "egg":
      return require("../image/items/egg.png");
      break;
    case "rusk":
      return require("../image/items/rusk.png");
      break;
    default:
      return require("../image/items/banana.png");
  }
};

export const currency = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

export default getImage;
