import { useLoaderData } from "react-router-dom";
import axios from "../../utils/axios";
import getImage, { currency } from "../../utils/image";
import Button, { buttonVariant } from "../../components/Button";
import { Tab } from "@headlessui/react";
import { cn } from "../../utils/utils";
import CardList from "../../components/CardList";

const DetailProduct = () => {
  const loader = useLoaderData();
  const { data } = loader.data;
  const image = getImage(data.image);

  const lists = ["Product Description", "Additional Info"];

  return (
    <div>
      <div className="bg-[#E3F1E9] w-full h-96 flex justify-center items-center flex-wrap">
        <div className="text-blue-teal font-roboto text-heading-one">
          Shop Single
        </div>
      </div>

      <div className="py-24">
        <div className="flex flex-wrap px-10 lg:px-0 lg:flex-nowrap max-w-[1237px] mx-auto lg:gap-10">
          <div className="flex justify-center items-center w-1/2 mx-auto lg:mx-0">
            <img src={image} />
          </div>

          <div className="text-blue-teal pt-24">
            <div className="font-roboto text-[40px] font-semibold">
              {data.name}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="20"
                viewBox="0 0 84 20"
                fill="none"
              >
                <path
                  d="M8.67806 3.59367C8.98566 2.68997 10.2638 2.68998 10.5714 3.59367L11.5549 6.48313C11.6929 6.8884 12.0735 7.16091 12.5016 7.16091H15.5818C16.5617 7.16091 16.9569 8.42416 16.1517 8.98263L13.7409 10.6546C13.3741 10.909 13.2203 11.3758 13.3642 11.7985L14.3036 14.5586C14.6145 15.4718 13.5798 16.2523 12.7871 15.7025L10.1946 13.9046C9.85187 13.6668 9.39758 13.6668 9.05483 13.9046L6.46235 15.7025C5.66969 16.2523 4.63496 15.4718 4.9458 14.5586L5.88528 11.7985C6.02915 11.3758 5.87539 10.909 5.50851 10.6546L3.09777 8.98263C2.29254 8.42416 2.68772 7.16091 3.66767 7.16091H6.74788C7.17598 7.16091 7.55659 6.8884 7.69454 6.48313L8.67806 3.59367Z"
                  fill="#FFA858"
                />
                <path
                  d="M24.8607 3.73964C25.16 2.81832 26.4635 2.81832 26.7628 3.73964L27.6499 6.46992C27.7838 6.88194 28.1677 7.16091 28.601 7.16091H31.4717C32.4404 7.16091 32.8432 8.40051 32.0595 8.96992L29.737 10.6574C29.3865 10.912 29.2398 11.3634 29.3737 11.7754L30.2608 14.5058C30.5602 15.4271 29.5057 16.1932 28.722 15.6238L26.3995 13.9364C26.049 13.6817 25.5744 13.6817 25.2239 13.9364L22.9015 15.6238C22.1178 16.1932 21.0633 15.4271 21.3627 14.5058L22.2498 11.7754C22.3837 11.3634 22.237 10.912 21.8865 10.6574L19.564 8.96991C18.7803 8.40051 19.1831 7.16091 20.1518 7.16091H23.0225C23.4558 7.16091 23.8397 6.88194 23.9736 6.46992L24.8607 3.73964Z"
                  fill="#FFA858"
                />
                <path
                  d="M41.0521 3.59367C41.3597 2.68997 42.6379 2.68998 42.9455 3.59367L43.929 6.48313C44.0669 6.8884 44.4475 7.16091 44.8757 7.16091H47.9559C48.9358 7.16091 49.331 8.42416 48.5258 8.98263L46.115 10.6546C45.7481 10.909 45.5944 11.3758 45.7382 11.7985L46.6777 14.5586C46.9886 15.4718 45.9538 16.2523 45.1612 15.7025L42.5687 13.9046C42.226 13.6668 41.7717 13.6668 41.4289 13.9046L38.8364 15.7025C38.0438 16.2523 37.009 15.4718 37.3199 14.5586L38.2594 11.7985C38.4032 11.3758 38.2495 10.909 37.8826 10.6546L35.4719 8.98263C34.6666 8.42416 35.0618 7.16091 36.0417 7.16091H39.122C39.5501 7.16091 39.9307 6.8884 40.0686 6.48313L41.0521 3.59367Z"
                  fill="#FFA858"
                />
                <path
                  d="M57.2348 3.73964C57.5341 2.81832 58.8375 2.81832 59.1369 3.73964L60.024 6.46992C60.1579 6.88194 60.5418 7.16091 60.975 7.16091H63.8458C64.8145 7.16091 65.2173 8.40051 64.4336 8.96992L62.1111 10.6574C61.7606 10.912 61.6139 11.3634 61.7478 11.7754L62.6349 14.5058C62.9343 15.4271 61.8798 16.1932 61.0961 15.6238L58.7736 13.9364C58.4231 13.6817 57.9485 13.6817 57.598 13.9364L55.2756 15.6238C54.4919 16.1932 53.4374 15.4271 53.7367 14.5058L54.6239 11.7754C54.7577 11.3634 54.6111 10.912 54.2606 10.6574L51.9381 8.96991C51.1544 8.40051 51.5571 7.16091 52.5259 7.16091H55.3966C55.8298 7.16091 56.2138 6.88194 56.3477 6.46992L57.2348 3.73964Z"
                  fill="#FFA858"
                />
                <path
                  d="M73.4262 3.59367C73.7338 2.68997 75.012 2.68998 75.3196 3.59367L76.3031 6.48313C76.441 6.8884 76.8216 7.16091 77.2497 7.16091H80.3299C81.3099 7.16091 81.7051 8.42416 80.8998 8.98263L78.4891 10.6546C78.1222 10.909 77.9685 11.3758 78.1123 11.7985L79.0518 14.5586C79.3626 15.4718 78.3279 16.2523 77.5353 15.7025L74.9428 13.9046C74.6 13.6668 74.1457 13.6668 73.803 13.9046L71.2105 15.7025C70.4179 16.2523 69.3831 15.4718 69.694 14.5586L70.6334 11.7985C70.7773 11.3758 70.6236 10.909 70.2567 10.6546L67.8459 8.98263C67.0407 8.42416 67.4359 7.16091 68.4158 7.16091H71.496C71.9241 7.16091 72.3048 6.8884 72.4427 6.48313L73.4262 3.59367Z"
                  fill="#FFA858"
                />
              </svg>
            </div>

            <div className="font-open-sans flex gap-4">
              <div className="text-[#B8B8B8] font-semibold text-xl line-through">
                {currency.format(data.priceBefore)}
              </div>
              <div className="text-2xl font-bold">
                {currency.format(data.priceAfter)}
              </div>
            </div>

            <div className="text-paragraph text-silver-teal font-open-sans mt-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </div>

            <div className="flex items-center gap-5 font-roboto mt-9">
              <label className="text-xl font-bold">Quantity :</label>
              <input className="py-7 px-5 border-2 border-blue-teal outline-none w-[30%] lg:w-[13%] text-center rounded-2xl" />
              <Button variant="blue">Add To Cart</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-4/6 mx-auto text-center">
        <Tab.Group>
          <Tab.List className="flex space-x-1 justify-center rounded-2xl gap-5 mb-3">
            {lists.map((list, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  cn(
                    `py-6 px-5 lg:px-14 font-open-sans text-lg lg:text-2xl font-bold outline-none rounded-2xl`,
                    {
                      "text-white bg-blue-teal": selected,
                      "text-blue-teal bg-[#EFF6F1]": !selected,
                    }
                  )
                }
              >
                {list}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="font-open-sans text-silver-teal">
            <Tab.Panel className="text-paragraph">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </Tab.Panel>
            <Tab.Panel className="text-paragraph">asd</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <CardList />
    </div>
  );
};

export const loader = ({ request, params }) => {
  const { idProduct } = params;

  return axios({
    url: `/api/item/${idProduct}`,
    method: "GET",
  });
};

export default DetailProduct;
