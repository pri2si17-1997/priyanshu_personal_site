import React from "react";
import { aboutData } from "../data/aboutData";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>
        <p className="text-xl mt-5">
          {aboutData.about}
        </p>
      </div>
    </div>
  );
};

export default About;
