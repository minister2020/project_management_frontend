import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { React, useState, useRef } from "react";
import { GrClose } from "react-icons/gr";
import Dash from "../../public/assets/Dashboard.svg";
import CreateProjects from "../../components/createdprojects";


 function Createprojectpopup() {

    const project_title = useRef();
    const description = useRef();
   
  

    const [track, setTrack] = useState(0);

    
    
  const getDevices = async (projectToUpload) => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectToUpload),
    };

    console.log(JSON.stringify(projectToUpload));
    try {
      const fetchResponse = await fetch(
        "http://localhost:8082/api/users/{user_id}/project",
        settings
      );
      const data = await fetchResponse
      console.log(fetchResponse)
      alert("project successly uploaded ");
    
      return data;
    } catch (e) {
      console.log(e, "error");
      return e;
    }
  };

  const submitProject = (e) => {
    e.preventDefault();
    const enteredProject_title = project_title.current.value;
    const enteredDescription = description.current.value;
  

    const projectToUpload = {
      project_title: enteredProject_title,
      description: enteredDescription
   
    };

    getDevices(projectToUpload);
  };

  return (
    <div>
      <Head>
        <title>Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/Project.svg" />
      </Head>

      <main className="font-Roboto bg-[#DCE4FF] flex justify-center items-center    ">
        
        {
            track === 0 ? 
            (
                
                <div className="flex w-full h-screen">
                <div className="w-1/6 bg-deepblue  ">
                    <div className="flex flex-col text-white ">
                        <Link href="/dashboard/dashboard ">
                            <div className="flex space-x-4 mt-[4.2rem] justify-center py-[1rem] hover:bg-white hover:text-black">
                            <Image src={Dash} alt="Dashboard" />
                            <div className="font-semibold text-[2rem]  ">Dashboard</div>
                            </div>
                        </Link>
                        <Link href="" onClick={() => setTrack(track => !track)} >
                        <div className="flex  space-x-4 mt-[3rem]  py-[1rem] text-white hover:bg-white hover:text-black justify-center">
                            <div className="font-semibold text-[2rem]  ">New Project</div>
                        </div>
                        </Link>
                        <div className="flex  space-x-4 mt-[3rem]  py-[1rem] bg-white text-black justify-center">
                            <div className="font-semibold text-[2rem]  ">Created Projects</div>
                        </div>
    
                    </div>
                </div>
                <div className="flex flex-col w-5/6  items-center  ">
                <h1 className="text-[4rem] text-deepblue font-bold mt-[4rem] ">
                    All Projects
                </h1>
                    <div className="grid grid-cols-2 gap-x-[4rem]">
                        
                        {[...Array(8)].map((project,i) => (<CreateProjects key={i} />))
                        }
                        
                    </div>
                    
    
                </div>
                    </div>
                ) 
            :
            (
                <div className="flex w-full">
            <div className="w-1/6 bg-deepblue h-screen ">
                <div className="flex flex-col text-white ">
                    <Link href="/dashboard/dashboard">
                        <div className="flex space-x-4 mt-[4.2rem] justify-center py-[1rem] hover:bg-white hover:text-black">
                        <Image src={Dash} alt="Dashboard" />
                        <div className="font-semibold text-[2rem]  ">Dashboard</div>
                        </div>
                    </Link>
                    <div className="flex  space-x-4 mt-[3rem]  py-[1rem] bg-white text-black justify-center">
                        <div className="font-semibold text-[2rem]  ">New Project</div>
                    </div>
                    <Link href="" onClick={() => setTrack(0)} >
                    <div className="flex  space-x-4 mt-[3rem]  py-[1rem] text-white hover:bg-white hover:text-black justify-center">
                        <div className="font-semibold text-[2rem]  ">Created Projects</div>
                    </div>
                    </Link>

                </div>
            </div>
            <div className="flex w-5/6 justify-center items-center ">
                    <div className="flex flex-col bg-white px-[3rem] pb-[3rem] ">
                    <div className="flex bg-white border border-[#DCE4FF] w-[64rem] mt-[2.2rem] justify-between items-center">
                        <h1 className="text-black font-semibold text-[2.4rem]   pt-[1rem] pb-[1.2rem] pl-[1.9rem] ">
                        Create new project
                        </h1>
                        <Link href="/dashboard/dashboard ">
                            <GrClose className="mx-[1.9rem]" />
                        </Link>
                    </div>
                    <form className="text-black ">
                        <div className="flex flex-col ">
                        <label className=" text-black font-semibold text-[2.4rem] mt-[1.7rem] pl-[1.9rem] ">
                            project_title
                        </label>
                        <input
                            className="text-black text-[1.5rem] bg-white border border-[#DCE4FF] w-[64rem] pt-[1.4rem] pb-[2.2rem] pl-[1.9rem] mt-[1rem]"
                            type="text"
                            required
                            ref ={project_title}
                        />
                        </div>
                        <div className="flex flex-col ">
                        <label className=" text-black font-semibold text-[2.4rem] mt-[1.7rem] pl-[1.9rem] ">
                             description
                        </label>
                        <input
                            className=" text-black text-[1.5rem] bg-white border border-[#DCE4FF] w-[64rem] h-[14rem] pl-[1.9rem] mt-[1rem] "
                            type="text"
                            required
                            ref = {description}
                        />
                        </div>
                     
                        <div className="flex mt-[3rem] justify-end ">
                        <Link href="/dashboard/dashboard ">
                            <button className="text-white text-[2rem] font-medium bg-[#292626] px-[1rem] py-[0.5rem] mx-[1rem]" 
                            >
                            Cancel
                            </button>
                        </Link>
                        <Link href="">
                            <button className="text-white text-[2rem] font-medium bg-[#89AFFF] px-[1rem] py-[0.5rem]"
                            onClick={submitProject}>
                            Create
                            </button>
                        </Link>
                        </div>
                    </form>
                    </div>
            </div>
                </div>
                ) 
        }
        
        
      </main>
    </div>
  );
}
export default Createprojectpopup
