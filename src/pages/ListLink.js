import React from "react";
import { NavLink } from "react-router-dom";

const ListLink = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) => isActive && "text-yellow-teal"}
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive, isPending }) => isActive && "text-yellow-teal"}
      >
        <li>About</li>
      </NavLink>

      <NavLink
        to="/pages"
        className={({ isActive, isPending }) => isActive && "text-yellow-teal"}
      >
        <li>Pages</li>
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive, isPending }) => isActive && "text-yellow-teal"}
      >
        <li>Shop</li>
      </NavLink>

      <NavLink
        to="/project"
        className={({ isActive, isPending }) => isActive && "text-yellow-teal"}
      >
        <li>Projects</li>
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive, isPending }) => isActive && "text-yellow-teal"}
      >
        <li>News</li>
      </NavLink>
    </>
  );
};

export default ListLink;
