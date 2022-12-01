import Link from "next/link";
import axios from "axios";
import { React, useEffect, useState } from "react";

const CreateProjects = ({ project }) => {
//   const [project, setProject] = useState({});

//   useEffect(() => {
//     function fetchProject() {
//       axios.get(`http://localhost:8082/api/project/2`).then(
//         (res) => console.log(`value of project`, res),
//         (err) => console.log(`There was an error fetching project`, err)
//       );
//     }
//     fetchProject();
//   }, []);

  return (
    <div className="flex flex-col rounded-[2rem] bg-white px-[3rem] pb-[3rem] mt-[4rem] ">
      <Link href={`/dashboard/viewprojects/?project_id=${project.id}`}>
        <div className="flex space-x-[10rem] bg-white text-black font-semibold  border border-[#DCE4FF] w-[40rem] mt-[2.2rem] items-center pt-[1rem] pb-[1.2rem] pl-[1.9rem]">
          <h1 className="text-[2.4rem]  ">project_title:</h1>
          <h2 className="text-[2rem] ">{project.project_title} </h2>
        </div>
      </Link>
    </div>
  );
};

export default CreateProjects;
