import React, {useEffect, useState} from "react";
import axios from "axios";

function ProjectsList(){
const [projects, setProjects] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4534/api/projects')
        .then(res => {
            console.log(res.data.projects)
            setProjects(res.data.projects)
        })
        .catch(err=> {
            console.log("Error:",err)
        })
    },[])
return(
<div>
<h1>Projects</h1>
{projects.map(item => {
    return(
        <div className="projects">
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
        </div>
    )
})}
</div>
)
}

export default ProjectsList