import React from "react";
import Logo from "../../similar/Logo";
import Nav from "../../similar/Nav";

const Content = () => {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse justify-start items-start gap-5">
          {/* Left Content  */}
          <div>
            <Nav />
          </div>

          {/* Right Content  */}
          <div className="mb-20 lg:mb-0 lg:ms-56 p-2.5 lg:p-7">
            {/* Logo Area  */}
            <div>
              <Logo />
            </div>

            {/* Content Area  */}
            <div className="mt-14 lg:mt-0">
              <h1 className="text-2xl font-poppins font-semibold">Content</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                magni ratione provident doloremque recusandae excepturi nisi
                dolorem modi magnam adipisci enim est ut cum illum sunt dicta,
                sed explicabo quas saepe vitae voluptate! Quasi facere quibusdam
                sint, nihil quidem magnam voluptates eveniet dicta ipsum
                expedita tenetur atque fugiat voluptatem animi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
