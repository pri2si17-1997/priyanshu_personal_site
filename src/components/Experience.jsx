import React from "react";
import 'flowbite';

import { experienceData } from "../data/experienceData";

const Experience = () => {
  return (
    <div
      name="experince"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div class="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </div>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-5">
            {experienceData.map((elem, idx) => {
              return (
                <div id={idx}>
                  <li class="mb-10 ml-6 text-left">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8">
                      <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-bold text-white text-left">{elem.company_name}
                      {elem.display === true ? <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{elem.tag}</span> : null}
                    </h3>
                    <h3 class="flex items-center mb-1 text-lg font-bold text-white text-left">{elem.designation}</h3>
                    <h3 class="flex items-center mb-1 text-lg font-bold text-white text-left">{elem.location}</h3>
                    <time class="mb-4 text-base font-normal text-white text-left">{elem.duration}</time>
                    <ul class="space-y-2 list-inside text-white mt-5">
                      {elem.work.map((item, w_idx) => {
                        return (
                          <div id={w_idx}>
                            <li class="flex items-center text-left">
                              <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              {item}
                            </li>
                          </div>
                        )
                      })}
                    </ul>
                  </li>
                </div>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
