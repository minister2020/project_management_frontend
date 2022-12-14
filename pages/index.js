import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import Project from "../public/assets/Project.svg";
import Projectmanagement from "../public/assets/projectmanagement.jpg";



 function Home() {
  const [isMarked, setIsmarked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handle() {
    setIsmarked((isMarked) => !isMarked);
  }
 

  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-white  h-screen  ">
        <div className="flex bg-[#DCE4FF] justify-between items-center px-[10rem]  py-[2rem]">
          
            <Image src={Project} alt="Profile" className="w-[4rem] " />
          
          <div className=" flex space-x-[10rem] items-center text-white font-semibold text-[2.4rem] ">
            <div className=" bg-[#03122F] px-[1rem] py-[0.2rem] ">
            <Link href="/login">Log in</Link>
            </div>
            <div className="bg-[#03122F] px-[1rem] py-[0.2rem]">
            <Link href="/register">Sign Up</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[5rem]">
          <Image src={Projectmanagement} alt="Projectmanagement"  />
        </div>
        
      </main>
    </div>
  );
}
export default Home
