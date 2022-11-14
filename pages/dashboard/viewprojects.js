import Head from "next/head";
import { React } from "react";
import Link from "next/link";

export default function Viewprojects() {
  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-[#DCE4FF] flex flex-col justify-center items-center  h-screen  ">
        <div className="flex flex-col bg-white justify-center text-black font-semibold text-[2.4rem] p-[5rem] w-[60rem] h-[40rem] rounded-[3rem] drop-shadow-xl ">
            
            <div className="flex flex-col justify-between px-[3rem]">
            <p className="">Project title: </p>
            <h1 className="self-end ">Coding</h1>
            </div>
            <div className="flex flex-col justify-between mt-[5rem] px-[3rem]">
            <p className="">Project description:</p>
            <h2 className="self-end">How to code</h2>
            </div>
            <div className="flex flex-col justify-between mt-[5rem] px-[3rem]">
            <p className="">Project manager:</p>
            <h3 className="self-end  ">Abdulrasheed</h3>
            </div>
            <Link href="/dashboard/createprojectpopup " className="self-end mt-[2rem] " >
                <button className="text-white text-[2rem] font-medium bg-[#292626] px-[1rem] py-[0.5rem] mx-[1rem] ">
                Cancel
                </button>
            </Link>

        </div>
      </main>

    </div>
  );
}