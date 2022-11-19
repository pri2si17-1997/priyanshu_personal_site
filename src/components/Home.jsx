import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import SocialContacts from "./SocialContacts";
import HireMe from "./HireMeButton";
import { aboutData } from "../data/aboutData";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <ProfilePhoto className={'small-screen hidden'} />
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            {aboutData.headline}
          </h2>
          <div className="small-screen hidden">
            <SocialContacts className={'flex justify-center space-x-4 items-center mt-4'} />
            <HireMe className={'flex justify-center space-x-4 items-center mt-5 mb-5'}/>
          </div>
          <div className="big-screen">
            <div className="flex">
              <SocialContacts className={'flex space-x-4 items-center mt-4'} />
              <HireMe className={'flex items-center mt-5 ml-5'} />
            </div>
          </div>
        </div>
        <ProfilePhoto className={'big-screen'} />
      </div>
    </div>
  );
};

export default Home;
