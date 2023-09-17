import React from 'react';
import {IoLogoHtml5 , IoLogoCss3} from 'react-icons/io'
import {RiJavascriptFill} from 'react-icons/ri'
import {FaBootstrap} from 'react-icons/fa'
import { AiFillGithub} from 'react-icons/ai'
import {BiLogoReact, BiLogoRedux, BiLogoMongodb, BiLogoFirebase, BiLogoGit} from 'react-icons/bi'
import {SiNextdotjs} from 'react-icons/si'
const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-b-black">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4 mt-6 pb-4 flex justify-center items-center">Technical Skills</h1>
        <hr className="mb-8 w-20 border-b-2 border-gray-700" />
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
            
            < IoLogoHtml5  className="h-16 w-16 mb-2 fill-Amber-300" />
            <p className="font-bodyFont text-center">HTML</p>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
             
           <IoLogoCss3 className="h-16 w-16 mb-2 fill-Amber-300" />
            <p className="font-bodyFont text-center">Css</p>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
             <RiJavascriptFill className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">JavaScript</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <FaBootstrap className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">BOOTSTRAP</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <BiLogoReact className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">REACT.JS</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <BiLogoRedux className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">REDUX</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <BiLogoGit className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">GIT</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <AiFillGithub className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">GITHUB</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <SiNextdotjs className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">NEXT.JS</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <BiLogoMongodb className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">MongoDB</p>
          </div>
          <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
             <BiLogoFirebase className="h-16 w-16 mb-2 fill-Amber-300"/>
            <p className="font-bodyFont text-center">FIREBASE</p>
          </div>
          {/* Add more language images here */}
        </div>
      </div>
    </div>
  );
};

export default Skills;