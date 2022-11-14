import Head from "next/head";
import Link from "next/link";
import { React, useState } from "react";

export default function Appointment() {
  const [track, setTrack] = useState(0);

  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-[#DCE4FF] flex flex-col justify-center items-center  h-screen  ">
        {track === 0 ? (
          <div className="flex bg-white justify-center w-[60rem] h-[75vh]">
            <div className="flex flex-col bg-deepblue w-1/4 pt-[3rem] text-center ">
              <Link href="/dashboard/dashboard">
                <div className="font-semibold text-[2rem] text-white mt-[1rem] cursor-pointer ">
                  Appointment
                </div>
              </Link>

              <div className="font-semibold text-[2rem] mt-[2rem] bg-white text-black">
                Create
              </div>

              <Link href="" onClick={() => setTrack((track) => !track)}>
                <div className="font-semibold text-[2rem] text-white mt-[2rem] ">
                  View
                </div>
              </Link>
            </div>
            <div className="bg-white ml-[2rem] w-3/4 pt-[6rem] pb-[8rem] ">
              <p className="text-[#03122F] text-[2rem] font-semibold text-center ">
                MEETING DETAIL
              </p>
              <form>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem] w-[12rem] ">
                    Email:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem] w-[12rem]  ">
                    Date:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem] w-[12rem]  ">
                    Start time:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem]  w-[12rem] ">
                    End time:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
                <Link href="">
                  <button className="text-white text-[2.4rem] font-medium bg-[#03122F] w-[27rem] py-[0.9rem] ml-[7rem] mt-[6rem]">
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex bg-white justify-center w-[60rem] h-[75vh]">
            <div className="flex flex-col bg-deepblue w-1/4 pt-[3rem] text-center ">
              <Link href="/dashboard/dashboard">
                <div className="font-semibold text-[2rem] text-white mt-[1rem] cursor-pointer ">
                  Appointment
                </div>
              </Link>
              <Link href="" onClick={() => setTrack(0)}>
                <div className="font-semibold text-[2rem] text-white mt-[2rem] ">
                  Create
                </div>
              </Link>
              <div className="font-semibold text-[2rem] mt-[2rem] bg-white text-black">
                View
              </div>
            </div>
            <div className="bg-white ml-[2rem] w-3/4 pt-[6rem] pb-[8rem] ">
              <p className="text-[#03122F] text-[2rem] font-semibold text-center ">
                MEETING DETAIL
              </p>
              <form>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem] w-[12rem]  ">
                    Date:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem] w-[12rem]  ">
                    Start time:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
                <div className="flex mt-[4rem]">
                  <label className=" text-[#03122F] self-center font-semibold text-[2rem]  w-[12rem] ">
                    End time:
                  </label>
                  <input
                    className="text-black text-[1.6rem] bg-white border border-[#03122F] w-[30rem] pt-[0.6rem] pb-[0.5rem] pl-[1.5rem]  "
                    type="text"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
