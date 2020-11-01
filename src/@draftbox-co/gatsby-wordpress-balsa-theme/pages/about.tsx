import React from "react";
import Layout from "../components/Layout";
export default function About(){
    return (
      <Layout>
<div className="flex flex-col items-center content-center justify-center h-auto bg-white w-100">


  <div>
      <img src="https://source.unsplash.com/256x256/?nature,focus" alt="" className="w-32 h-32 m-5 rounded-full" />
    </div>

   <div className="content-center w-4/5 h-auto m-2 text-center ">
      <p className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-5xl"> Hello! I am <span className="text-indigo-600">Durgesh Gupta</span></p>
      <p className="text-2xl font-thin text-indigo-400"> Full Stack Developer/Designer/Marketer</p>
   </div>

   <div className="lg:text-center mb-10">
   <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
                        I am a Web Developer who specialized in creating dynamic and beautiful web pages. I have been in the field for nearly one decade, and have been loving every minute of it. I am a blogger, entrepreneur, designer, developer, and overall thinker.
      </p>
                </div>
            <div className="mb-10 flex">
                <a href="/contact" className="relative mb-5 sm:mb-0">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"></span>
                        <span className="relative inline-block w-full h-full px-3 py-1 text-base font-bold transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-400 hover:text-gray-900">HIRE ME</span>
                    </a>
                    </div>



</div>
            </Layout>
  )
}