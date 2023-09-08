import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const ListLink = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "text-yellow-teal" : ""
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
          isActive ? "text-yellow-teal" : ""
        }
      >
        <li>Product</li>
      </NavLink>

      <Menu as="div" className="relative">
        <Menu.Button>More</Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex flex-col rounded-md mt-2 shadow-lg bg-white text-base gap-1 absolute left-0 w-56 px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`px-2 py-2 ${
                    active && "bg-blue-500 text-white"
                  } rounded-md`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`px-2 py-2 ${
                    active && "bg-blue-500 text-white"
                  } rounded-md`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
          isActive ? "text-yellow-teal" : ""
        }
      >
        <li>Shop</li>
      </NavLink>

      <NavLink
        to="/project"
        className={({ isActive, isPending }) =>
          isActive ? "text-yellow-teal" : ""
        }
      >
        <li>Projects</li>
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive, isPending }) =>
          isActive ? "text-yellow-teal" : ""
        }
      >
        <li>News</li>
      </NavLink>
    </>
  );
};

export default ListLink;
