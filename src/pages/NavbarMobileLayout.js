import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ListLink from "./ListLink";

const NavbarMobileLayout = ({ open, setOpen, ...props }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul className="flex flex-col gap-2 text-blue-teal text-xl font-bold">
                        <ListLink />
                      </ul>
                      <div className="flex items-center my-2">
                        <div className="relative w-full">
                          <input className="py-2 px-3 rounded-[36px] w-11/12 border-2" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="57"
                            height="34"
                            viewBox="0 0 57 56"
                            fill="none"
                            className="absolute top-1 right-7"
                          >
                            <circle cx="28.791" cy="28" r="28" fill="#7EB693" />
                            <path
                              d="M40.4692 35.8921L35.7086 31.1315C36.8547 29.6057 37.4734 27.7485 37.4713 25.8402C37.4713 20.9657 33.5056 17 28.6312 17C23.7567 17 19.791 20.9657 19.791 25.8402C19.791 30.7146 23.7567 34.6803 28.6312 34.6803C30.5395 34.6824 32.3967 34.0637 33.9225 32.9175L38.6831 37.6781C38.9241 37.8936 39.2384 38.0085 39.5615 37.9995C39.8846 37.9905 40.192 37.8581 40.4205 37.6295C40.6491 37.401 40.7815 37.0936 40.7905 36.7705C40.7996 36.4474 40.6846 36.1331 40.4692 35.8921ZM22.3168 25.8402C22.3168 24.5913 22.6871 23.3705 23.3809 22.3321C24.0748 21.2937 25.061 20.4843 26.2148 20.0064C27.3686 19.5285 28.6382 19.4034 29.8631 19.6471C31.0879 19.8907 32.213 20.4921 33.0961 21.3752C33.9792 22.2583 34.5806 23.3834 34.8242 24.6083C35.0679 25.8332 34.9428 27.1028 34.4649 28.2566C33.987 29.4104 33.1777 30.3966 32.1393 31.0904C31.1009 31.7842 29.88 32.1546 28.6312 32.1546C26.9571 32.1526 25.3522 31.4866 24.1684 30.3029C22.9847 29.1192 22.3188 27.5142 22.3168 25.8402Z"
                              fill="#FAFAFA"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="47"
                          height="46"
                          viewBox="0 0 57 56"
                          fill="none"
                        >
                          <circle cx="28.791" cy="28" r="28" fill="#274C5B" />
                          <path
                            d="M25.5689 39.0001C26.2439 39.0001 26.7911 38.4529 26.7911 37.7779C26.7911 37.1029 26.2439 36.5557 25.5689 36.5557C24.8939 36.5557 24.3467 37.1029 24.3467 37.7779C24.3467 38.4529 24.8939 39.0001 25.5689 39.0001Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M34.1246 39.0001C34.7996 39.0001 35.3468 38.4529 35.3468 37.7779C35.3468 37.1029 34.7996 36.5557 34.1246 36.5557C33.4496 36.5557 32.9023 37.1029 32.9023 37.7779C32.9023 38.4529 33.4496 39.0001 34.1246 39.0001Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.791 17H19.5729L22.4093 33.0731H37.5369"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.9022 29.1837L37.1494 29.2907C37.2587 29.2908 37.3647 29.2529 37.4493 29.1837C37.5339 29.1144 37.5918 29.0179 37.6133 28.9107L39.3151 20.4014C39.3289 20.3328 39.3272 20.262 39.3102 20.1941C39.2933 20.1262 39.2615 20.063 39.2171 20.0089C39.1727 19.9548 39.1169 19.9112 39.0536 19.8813C38.9903 19.8514 38.9212 19.8359 38.8513 19.8359L20.3584 19.8359"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-blue-teal text-lg font-semibold">
                          Cart (0)
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavbarMobileLayout;
