import React from "react";

import { skillsData } from "../data/skillData";

const Skills = () => {
    const skill_info = skillsData(70);
    return (
        <div name="skills" className="bg-gradient-to-b from-black via-black to-gray-800 w-full skills">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div class="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {Object.entries(skill_info).map(([key, value]) => {
                        return (
                            <div key={key} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white'>
                                <div className="content-center">
                                    {value}
                                </div>
                            </div>
                        )   
                    })}
                </div>
            </div>
        </div>
    )
};

export default Skills;