import React from "react";
import Menu from "../Menu/Menu";
import Logo from "../../similar/Logo";

const Setting = () => {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse justify-start items-start gap-5">
          <div className="fixed bottom-0 left-0  bg-white border-t lg:border-r border-[#eee] w-screen lg:w-auto lg:h-screen px-2.5 py-2.5 lg:py-7 shadow">
            <Menu />
          </div>
          <div className="mb-20 lg:mb-0 lg:ms-56 p-2.5 lg:p-7">
            {/* Logo Area  */}
            <div>
              <Logo />
            </div>

            {/* Content Area  */}
            <div className="mt-14 lg:mt-0">
              <h1 className="text-2xl font-poppins font-semibold">Settings</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                velit nesciunt atque nemo illo mollitia ex vero nam sunt
                obcaecati quas, corporis qui consequuntur laborum quia numquam
                aspernatur assumenda accusamus voluptatum deserunt at sit hic
                nisi quis. Aperiam doloremque esse beatae accusamus quis
                adipisci aspernatur perspiciatis expedita recusandae, maiores
                inventore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
