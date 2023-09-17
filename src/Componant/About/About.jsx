import React from 'react';
import Skills from './Skills'
const About = () => {
  return (
//     <section 
//     id="about"
//     className="flex flex-col gap-10 xl:gap-0 lgl:flex-col items-center justify-center h-screen border-b-[1px] font-titleFont border-b-black"
//   >
    <>
     <div id="about" className="flex flex-col items-center justify-center h-screen border-b-black font-titleFont mt-12"> 
      <h1 className="text-4xl font-bold mb-4"> About </h1>

      <hr className="mb-8 w-20 border-b-2 border-gray-700" />
      <p className="text-lg  font-bodyFont bg-transparent p-4 rounded-lg shadow-lg  tracking-wide">
        
     Hi,My name is Nourhan Gamal , As a Frontend Developer, I specialize in crafting modern, clean, and responsive websites that offer the best user experience. Feel free to explore my portfolio to discover my latest projects and learn more about my skills and experience in the field.<br/>

     My job is to build your website to be functional, user-friendly, and attractive. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.<br/> 

      Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.
      </p>
     </div> 
    
    {/* div2 */}
    <div className="flex flex-col items-center justify-center border-b-black font-titleFont mt-6 pt-6">
      <div className="container mx-auto  rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold mb-10 flex justify-center items-center">Personal Information</h1>
        <hr className="mb-8 w-20 border-b-2 border-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex justify-center items-center">
          <div className="mb-4  p-4 flex justify-center items-center text-start ">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mb-0 md:mr-4">Name : </label>
            <p className="font-bodyFont ml-2 text-xl ">Nourhan Gamal</p>
          </div>
          <div className="mb-4 p-4 flex justify-center items-center text-start ">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mb-0">Age : </label>
            <p className="font-bodyFont ml-2 text-xl">20</p>
          </div>
          <div className="mb-4 p-4 flex justify-center items-center ">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mr-4">Date of Birth :</label>
            <p className="font-bodyFont ml-2 text-xl">July 7, 2003</p>
          </div>
          <div className="mb-4 p-4 flex justify-center items-center">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mb-0">Email : </label>
            <p className="font-bodyFont ml-2 text-xl">nooo446085@gmail.com</p>
          </div>
          <div className="mb-4 p-4 flex justify-center items-center">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mb-0 md:mr-4">Phone Number : </label>
            <p className="font-bodyFont ml-2 text-xl">01113314741</p>
          </div>
          <div className="mb-4 p-4 flex justify-center items-center">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mb-0">Address : </label>
            <p className="font-bodyFont ml-2 text-xl">ِAl-Minya</p>
          </div>
          <div className="mb-4 p-4 flex justify-center items-center ">
            <label className="block text-cyan-700 font-bold mb-2 text-xl md:mb-0 md:mr-4">Place of Residence : </label>
            <p className="font-bodyFont ml-2 text-xl">City, Country</p>
          </div>
        </div>
      </div>
    </div>

    <Skills/>

    </>

  );
};

export default About;