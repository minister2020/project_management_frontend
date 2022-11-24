import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useState, useRef } from "react";
import Icon from "../public/assets/Icon.svg";
import Mark from "../public/assets/Mark.svg";
import Unmark from "../public/assets/unmark.svg";
import hidden from "../public/assets/Hiddenpassword.svg";
import show from "../public/assets/Showpassword.svg";

 function Login() {

  const email = useRef();
  const password = useRef();
  const router = useRouter()

  
  const [isMarked, setIsmarked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 


  function handle() {
    setIsmarked((isMarked) => !isMarked);
  }


  const login = async (dataToLog) => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToLog),
    };

    console.log(JSON.stringify(dataToLog));
    try {
      const fetchResponse = await fetch(
        "http://localhost:8082/api/auth/login",
        settings
      );
      const data = await fetchResponse;
      alert("login was successful");
      router.push("/dashboard/dashboard")
      return data;
    } catch (e) {
      console.log(e, "error");
      return e;
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    

    const dataToLog = {
      
      email: enteredEmail,
      password: enteredPassword,
     
    };

    login(dataToLog);
  };


  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-white flex flex-col justify-center items-center h-screen  ">
        <div className="flex flex-col bg-[#DCE4FF] justify-center px-[3rem] py-[5rem] drop-shadow-xl mb-[5rem] ">
          <div className="flex  justify-center items-center self-center bg-[#053083] rounded-full h-[12rem] w-[12rem] ">
            <Image src={Icon} alt="Icon" />
          </div>

          <p className="text-black text-[2rem] font-semibold mt-[rem]">
            Login to Your Account
          </p>

          <form className="flex flex-col text-black ">
            <input
              className="placeholder:text-[1.2rem] placeholder:text-black text-black text-[1.2rem] bg-[#DCE4FF] border-r-2 border-b-2 border-[#EAEFF2] w-[45rem]  pt-[1.4rem] pb-[2.2rem] pl-[1.9rem] mt-[1.5rem] "
              id="Email"
              type="email"
              placeholder="Email"
              required
              ref = {email}
            />
            <div className="flex items-center justify-between border-r-2 border-b-2 border-[#EAEFF2] w-[45rem] mt-[2.2rem] ">
              <input
                className="placeholder:text-[1.2rem] placeholder:text-black text-black text-[1.2rem] bg-[#DCE4FF]  border-b-1 border-[#EAEFF2]  pt-[1.4rem] pb-[2.2rem] pl-[1.9rem] w-[45rem]"
                id="Password"
                type={showPassword ? "text" : "Password"}
                placeholder="Password"
                required
                ref = {password}
              />
              <span
                onClick={() => setShowPassword((showPassword) => !showPassword)}
                className="w-[3rem]  mr-[1rem] cursor-pointer"
              >
                {showPassword ? (
                  <Image src={hidden} alt="hidden" />
                ) : (
                  <Image src={show} alt="show" />
                )}
              </span>
            </div>
            <div className="flex justify-between mt-[2.2rem]">
              <div className=" flex items-center space-x-1">
                <Image
                  onClick={handle}
                  src={isMarked ? Mark : Unmark}
                  alt="Icon"
                  className=" rounded-full cursor-pointer  w-[2rem] h-[2rem]"
                />
                <h1 className="text-black text-[1.2rem]  font-medium">
                  Remember me
                </h1>
              </div>
              <Link href="/forgetpassword" className="items-center">
                <h2 className="text-[#5790FF] text-[1.2rem]  font-medium ">
                  Forgot Password?
                </h2>
              </Link>
            </div>
            <Link href="/dashboard/createprojectpopup">
              <button className="text-white text-[2rem] font-medium bg-darkblue w-[45rem]  py-[1.4rem] mt-[2rem]"
              onClick={submitLogin}>
                Log in
              </button>
            </Link>
          </form>
        </div>
        <p className="text-black text-[1.6rem] mt-[2rem]  mt-[0rem]">
          Don’t have an account?
          <span className="  text-[1.8rem] text-[#5790FF]">
            <Link href="/register"> Sign Up</Link>
          </span>
        </p>
      </main>
    </div>
  );
}
export default Login
