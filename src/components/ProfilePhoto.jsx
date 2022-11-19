import React from "react";
import Photo from "../assets/home/headshot.jpeg";

const ProfilePhoto = (props) => {
    return(
        <div className={props.className}>
          <img
            src={Photo}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
    )
};

export default ProfilePhoto;