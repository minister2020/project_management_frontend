import Link from "next/link";



const CreateProjects = () => {
    const VIEW_PROJECT_BASE_URL = "http://localhost:8082/api/auth/project"

    return (

        <div className="flex flex-col rounded-[2rem] bg-white px-[3rem] pb-[3rem] mt-[4rem] ">
            <Link href="/dashboard/viewprojects">
                    <div className="flex space-x-[10rem] bg-white text-black font-semibold  border border-[#DCE4FF] w-[40rem] mt-[2.2rem] items-center pt-[1rem] pb-[1.2rem] pl-[1.9rem]">
                        <h1 className="text-[2.4rem]  ">
                        Project title:
                        </h1>
                        <h2 className="text-[2rem] ">My Project</h2>
                    </div>
            </Link>
                    
                    </div>
    )
}

export default CreateProjects;












