import React from "react";
import Container from "../../similar/Container";

import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col-reverse justify-start items-start gap-5">
          <div className="fixed bottom-0 left-0  bg-white border-t lg:border-r border-[#eee] w-screen lg:w-auto lg:h-screen px-2.5 py-2.5 lg:py-7 shadow">
            <Menu />
          </div>
          <div className=" mb-20 lg:mb-0 lg:ms-50">
            <div className="w-screen fixed top-0 left-0 bg-white">
              <h1 className="text-2xl font-poppins font-bold py-2 px-3.5 block lg:hidden bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent border-b border-[#eee] drop-shadow-sm">
                The Post Master
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
