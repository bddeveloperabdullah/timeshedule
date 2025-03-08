import React, { useEffect, useState } from "react";
import Logo from "../../similar/Logo";
import Nav from "../../similar/Nav";
import UserProfilePhoto from "./UserProfilePhoto";
import UserHeroPhoto from "./UserHeroPhoto";

const Home = () => {
  const [heroPhoto, setHeroPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // Hero Photo
    const sevedHeroImage = localStorage.getItem("uploadHeroImage");
    if (sevedHeroImage) {
      setHeroPhoto(sevedHeroImage);
    }

    // Profile Photo
    const savedProfilePhoto = localStorage.getItem("uploadProfileImage");
    if (savedProfilePhoto) {
      setProfilePhoto(savedProfilePhoto);
    }
  }, []);

  // Cover Photo Change And Local Stroag Save
  const handelHeroPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reander = new FileReader();
      reander.readAsDataURL(file);
      reander.onload = () => {
        const heroImage = reander.result;
        setHeroPhoto(heroImage);
        localStorage.setItem("uploadHeroImage", heroImage);
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
                <UserHeroPhoto
                  previewHeroPhoto={heroPhoto}
                  onChange={handelHeroPhotoChange}
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
