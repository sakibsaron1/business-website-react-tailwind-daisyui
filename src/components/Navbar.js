import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-all-dark.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-white px-14 h-40">
          <div class="flex-1 px-2 mx-2">
            <img src={logo} alt="" className="h-11 w-22 md:h-14" />
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-3">
              <li>
                <NavLink to="/" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="rounded-lg">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="rounded-lg">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="rounded-lg">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/reviews" className="rounded-lg">
                  Reviews
                </NavLink>
              </li>

              <li class="dropdown dropdown-hover dropdown-end">
                <label
                  tabindex="0"
                  class="btn btn-outline btn-primary rounded-lg "
                >
                  Book Now
                </label>
                <ul
                  tabindex="1"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>

      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <NavLink to="/" className="rounded-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="rounded-lg">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="rounded-lg">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="rounded-lg">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className="rounded-lg">
              Reviews
            </NavLink>
          </li>

          <div className="dropdown">
            <label tabindex="0" class="btn btn-outline btn-primary w-full mt-1">
              Click
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
