import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { React } from "react";
import Edit from "../../public/assets/Editprofile.png";
import Pen from "../../public/assets/Pen.svg";
import Book from "../../public/assets/Book.svg";

export default function Editprofile() {
  const EDIT_PROFILE_BASE_URL = "http://localhost:8082/api/auth/user"
  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-deepblue flex flex-col justify-center items-center  h-screen  ">
        <div className="flex flex-col bg-white justify-center px-[3rem] pt-[2rem] pb-[6rem] w-[50rem] ">
          <p className="text-black text-[2rem] font-semibold  ">
            Edit profile for student
          </p>
          <div className="flex justify-center mt-[1.1rem] relative ">
            <Image
              src={Edit}
              alt="Edit"
              className="rounded-full h-[12rem] w-[12rem]"
            />
            <Link href="" className="pt-[5rem]  ">
              <div className="flex absolute bottom-[0.5rem] right-[17rem] ">
                <Image src={Book} alt="Book" className="w-[2rem] " />
                <Image src={Pen} alt="Pen" className="w-[2rem] absolute top-[-0.5rem] right-[-0.5rem]" />
              </div>
            </Link>
          </div>

          <form className="text-black ">
            <div className="flex w-full mt-[4.2rem] ">
              <div className="flex flex-col w-1/2">
                <label className=" text-black font-semibold text-[2rem] mt-[1.5rem]  ">
                  First name
                </label>
                <input
                  className="placeholder:text-[1.6rem] placeholder:text-black text-black text-[1.6rem] bg-[#DCE4FF] border border-[#DCE4FF] w-[16rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem] mt-[0.5rem] "
                  type="text"
                  placeholder="Adedeji"
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className=" text-black font-semibold text-[2rem] mt-[1.5rem]  ">
                  Last name
                </label>
                <input
                  className="placeholder:text-[1.6rem] placeholder:text-black text-black text-[1.6rem] bg-[#DCE4FF] border border-[#DCE4FF] w-[16rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem] mt-[0.5rem] "
                  type="text"
                  placeholder="Adelanwa"
                  required
                />
              </div>
            </div>

            
            <div className="flex flex-col ">
              <label className=" text-black font-semibold text-[2rem] mt-[1.5rem]  ">
                Contact
              </label>
              <input
                className="text-black text-[1.6rem] bg-[#DCE4FF] border border-[#DCE4FF] w-[38rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem] mt-[0.5rem] "
                type="tel"
                placeholder=""
                required
              />
            </div>
            <div className="flex mt-[3rem] mx-[6rem] justify-end ">
              <Link href="/dashboard/dashboard ">
                <button className="text-white text-[2rem] font-medium bg-[#292626] px-[1rem] py-[0.5rem] mx-[1rem]">
                  Cancel
                </button>
              </Link>
              <Link href="">
                <button className="text-white text-[2rem] font-medium bg-[#89AFFF] px-[1rem] py-[0.5rem]">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
