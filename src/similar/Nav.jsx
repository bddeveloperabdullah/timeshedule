import React from "react";
import Menu from "../components/Menu/Menu";

const Nav = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0  bg-white border-t lg:border-r border-[#eee] w-screen lg:w-auto lg:h-screen px-2.5 py-2.5 lg:py-7 shadow">
        <Menu />
      </div>
    </>
  );
};

export default Nav;
