import React from "react";
import Container from "../../similar/Container";

import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import Logo from "../../similar/Logo";

const Home = () => {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse justify-start items-start gap-5">
          <div className="fixed bottom-0 left-0  bg-white border-t lg:border-r border-[#eee] w-screen lg:w-auto lg:h-screen px-2.5 py-2.5 lg:py-7 shadow">
            <Menu />
          </div>
          <div className="mb-20 lg:mb-0 lg:ms-56 p-2.5 lg:p-7">
            {/* logo Area  */}
            <div>
              <Logo />
            </div>

            {/* Content Area  */}
            <div className="mt-14 lg:mt-0">
              <h1 className="text-2xl font-poppins font-semibold">Home Page</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt distinctio sunt aliquid temporibus, excepturi officiis
                veritatis, itaque eos modi similique iure a vel iusto culpa
                repudiandae earum rerum placeat voluptate ullam voluptates.
                Nulla officia dolorem, eaque reprehenderit dolores praesentium
                ea, voluptatibus cumque quidem inventore consectetur nam
                veritatis voluptates accusantium ex.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
