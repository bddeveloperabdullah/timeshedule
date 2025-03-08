import React from "react";
import { MdAddAPhoto } from "react-icons/md";

const UserProfilePhoto = ({ previewProfilePhoto, onChange }) => {
  return (
    <>
      <div className="absolute -bottom-18 left-5">
        <div className="relative">
          <img
            className="size-32 lg:size-42 rounded-full object-cover border-3 border-[#eee] shadow-2xl"
            src={previewProfilePhoto}
            alt=""
          />
          <div
            onChange={onChange}
            className="absolute bottom-0 left-22 lg:left-28"
          >
            <label htmlFor="editProfilePhoto" className="cursor-pointer">
              <div className="bg-[#eee] size-8 lg:size-12  flex justify-center items-center rounded-full">
                <MdAddAPhoto className="text-sm lg:text-2xl" />
              </div>
            </label>
            <input id="editProfilePhoto" type="file" className="hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePhoto;
