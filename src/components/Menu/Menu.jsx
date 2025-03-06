import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdContentCopy, MdInsights } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

const Menu = () => {
  return (
    <>
      <nav>
        <Link
          to="/"
          className="text-2xl font-poppins font-bold pb-5 hidden lg:block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          Post Master
        </Link>
        <div className="flex flex-row lg:flex-col justify-around items-center lg:gap-5">
          <NavLink
            to="/"
            className="size-10 lg:size-0 lg:w-[180px] lg:h-[40px] lg:px-3.5 flex justify-center lg:justify-start items-center lg:gap-3.5 text-base font-poppins rounded-md"
            style={({ isActive }) => ({
              background: isActive ? "#283943" : "transparent",
              color: isActive ? "white" : "black",
            })}
          >
            <IoHomeSharp className="text-2xl" />
            <p className="hidden lg:block">Home</p>
          </NavLink>

          <NavLink
            to="/content"
            className="size-10 lg:size-0 lg:w-[180px] lg:h-[40px] lg:px-3.5 flex justify-center lg:justify-start items-center lg:gap-3.5 text-base font-poppins rounded-md"
            style={({ isActive }) => ({
              background: isActive ? "#283943" : "transparent",
              color: isActive ? "white" : "black",
            })}
          >
            <MdContentCopy className="text-2xl" />
            <p className="hidden lg:block">Content</p>
          </NavLink>

          <NavLink
            to="/notifactions"
            className="size-10 lg:size-0 lg:w-[180px] lg:h-[40px] lg:px-3.5 flex justify-center lg:justify-start items-center lg:gap-3.5 text-base font-poppins rounded-md"
            style={({ isActive }) => ({
              background: isActive ? "#283943" : "transparent",
              color: isActive ? "white" : "black",
            })}
          >
            <FaBell className="text-2xl" />
            <p className="hidden lg:block">Notifactions</p>
          </NavLink>

          <NavLink
            to="/insights"
            className="size-10 lg:size-0 lg:w-[180px] lg:h-[40px] lg:px-3.5 flex justify-center lg:justify-start items-center lg:gap-3.5 text-base font-poppins rounded-md"
            style={({ isActive }) => ({
              background: isActive ? "#283943" : "transparent",
              color: isActive ? "white" : "black",
            })}
          >
            <MdInsights className="text-2xl" />
            <p className="hidden lg:block">Insights</p>
          </NavLink>

          <NavLink
            to="/todo"
            className="size-10 lg:size-0 lg:w-[180px] lg:h-[40px] lg:px-3.5 flex justify-center lg:justify-start items-center lg:gap-3.5 text-base font-poppins rounded-md"
            style={({ isActive }) => ({
              background: isActive ? "#283943" : "transparent",
              color: isActive ? "white" : "black",
            })}
          >
            <LuListTodo className="text-2xl" />
            <p className="hidden lg:block">Todo</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Menu;
