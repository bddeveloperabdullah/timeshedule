import React, { useEffect, useState } from "react";
import Logo from "../../similar/Logo";
import Nav from "../../similar/Nav";
import UserCoverPhoto from "./userCoverPhoto";
import { MdAddAPhoto } from "react-icons/md";
import UserProfilePhoto from "./UserProfilePhoto";

const Home = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // Cover Photo
    const sevedCoverImage = localStorage.getItem("uploadCoverImage");
    if (sevedCoverImage) {
      setCoverPhoto(sevedCoverImage);
    }

    // Profile Photo
    const savedProfilePhoto = localStorage.getItem("uploadProfileImage");
    if (savedProfilePhoto) {
      setProfilePhoto(savedProfilePhoto);
    }
  }, []);

  // Cover Photo Change And Local Stroag Save
  const handelCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reander = new FileReader();
      reander.readAsDataURL(file);
      reander.onload = () => {
        const base64Image = reander.result;
        setCoverPhoto(base64Image);
        localStorage.setItem("uploadCoverImage", base64Image);
      };
    }
  };

  // Profile Photo Change And Local Stroag Save
  const handelProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onload = () => {
        const profileImage = render.result;
        setProfilePhoto(profileImage);
        localStorage.setItem("uploadProfileImage", profileImage);
      };
    }
  };

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
            {/* logo Area  */}
            <div>
              <Logo />
            </div>

            {/* Content Area  */}
            <div className="mt-14 lg:mt-0">
              <div className="relative">
                {/* Cover Photo  */}
                <UserCoverPhoto
                  previewCoverPhoto={coverPhoto}
                  onChange={handelCoverPhotoChange}
                />

                {/* Profile Photo  */}
                <UserProfilePhoto
                  previewProfilePhoto={profilePhoto}
                  onChange={handelProfilePhotoChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
