import React from "react";
import { MdAddAPhoto } from "react-icons/md";

const UserHeroPhoto = ({ previewHeroPhoto, onChange }) => {
  return (
    <>
      <>
        <div className="relative">
          <img
            className="w-screen h-[200px] lg:h-[400px] object-cover rounded-md"
            src={previewHeroPhoto}
            alt=""
          />
          <div
            onChange={onChange}
            className="bg-[#eee]/0 hover:bg-[#eee] text-white hover:text-black transition-colors duration-300 w-[160px] h-[30px] flex justify-center items-center rounded absolute bottom-3 right-3"
          >
            <label
              htmlFor="editHeroPhoto"
              className="flex items-center gap-2 cursor-pointer text-xs md:text-sm"
            >
              <MdAddAPhoto className="text-sm md:text-xl" />
              Edit Cover Photo
            </label>
            <input className="hidden" id="editHeroPhoto" type="file" />
          </div>
        </div>
      </>
    </>
  );
};

export default UserHeroPhoto;
