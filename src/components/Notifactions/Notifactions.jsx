import React from "react";
import Logo from "../../similar/Logo";
import Nav from "../../similar/Nav";

const Notifactions = () => {
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
              <h1 className="text-2xl font-poppins font-semibold">
                Notifactions
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                quis, fugit velit voluptatem harum ipsum dolorem incidunt nisi
                blanditiis architecto quaerat sint praesentium obcaecati,
                tenetur exercitationem corrupti amet in. Amet, ratione magni
                quae nulla natus rem recusandae veniam eos, non iure magnam
                distinctio veritatis accusamus, dolore excepturi eligendi modi
                totam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notifactions;
