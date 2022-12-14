import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { React, useState } from "react";
import hidden from "../public/assets/Hiddenpassword.svg";
import show from "../public/assets/Showpassword.svg";

export default function Forgetpassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [track, setTrack] = useState(0);

  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-white flex flex-col justify-center items-center  h-screen  ">
        {track === 0 ? (
          <div className="flex flex-col bg-[#DCE4FF] justify-center px-[3rem] pb-[4rem]  drop-shadow-xl ">
            <p className="text-black text-[2rem] font-semibold mt-[2rem]  ">
              Forgot Password
            </p>
            <form className="flex flex-col text-black ">
              <input
                className="placeholder:text-[1.2rem] placeholder:text-black text-black text-[1.2rem] bg-[#DCE4FF] border-2 border-[#EAEFF2] w-[45rem]  pt-[1.4rem] pb-[2.2rem] pl-[1.9rem] mt-[2.2rem] "
                id="Email"
                type="email"
                placeholder="Email"
                required
              />
              <Link href="" onClick={() => setTrack((track) => !track)}>
                <button className="text-white text-[2rem] font-medium bg-darkblue w-[45rem]  py-[1.4rem] mt-[2.2rem]">
                  Forgot Password
                </button>
              </Link>
            </form>
          </div>
        ) : (
          <div className="flex flex-col bg-[#DCE4FF] justify-center px-[3rem] pb-[10rem]  drop-shadow-xl ">
            <p className="text-black text-[2rem] font-semibold mt-[8rem]  ">
              Reset Password
            </p>

            <form className="flex flex-col text-black ">
              <div className="flex items-center justify-between w-[45rem] border-2 border-[#EAEFF2] pt-[1rem] pb-[1.2rem] pl-[1.9rem] mt-[2.2rem] ">
                <input
                  className="placeholder:text-[1.2rem] placeholder:text-black text-black text-[1.2rem] bg-[#DCE4FF] w-[45rem] pt-[1rem] pb-[1rem]"
                  id="Password"
                  type={showPassword ? "text" : "Password"}
                  placeholder="New Password"
                  required
                />
                <span
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  className="w-[3rem]  mr-[1rem] cursor-pointer"
                >
                  {showPassword ? (
                    <Image src={hidden} alt="hidden" />
                  ) : (
                    <Image src={show} alt="show" />
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between w-[45rem] border-2 border-[#EAEFF2] pt-[1rem] pb-[1.2rem] pl-[1.9rem] mt-[2.2rem] ">
                <input
                  className="placeholder:text-[1.2rem] placeholder:text-black text-black text-[1.2rem] bg-[#DCE4FF] w-[45rem] pt-[1rem] pb-[1rem]"
                  id="Password"
                  type={showPasswordTwo ? "text" : "Password"}
                  placeholder="Confirm Password"
                  required
                />
                <span
                  onClick={() =>
                    setShowPasswordTwo((showPasswordTwo) => !showPasswordTwo)
                  }
                  className="w-[3rem]  mr-[1rem] cursor-pointer"
                >
                  {showPasswordTwo ? (
                    <Image src={hidden} alt="hidden" />
                  ) : (
                    <Image src={show} alt="show" />
                  )}
                </span>
              </div>
              <Link href="">
                <button className="text-white text-[2rem] font-medium bg-darkblue w-[45rem]  py-[1.4rem] mt-[2.2rem]">
                  Forgot Password
                </button>
              </Link>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
