import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import Project from "./ProjectCard"

function ProjectsList(){
const [projects, setProjects] = useState([])
const history = useHistory()
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





    if(!projects){
        return(<div className="loading"><h1>Loading...</h1></div>)}else if(projects.length === 0){return(<div><h1>YOU HAVE NO PROJECTS</h1></div>)}else{
    
return(
<div>
<h1>Projects</h1>
{projects.map(item => {
    console.log(item.id)
    return(
        <div className="projects">
        <Link key={item.id} to={`/projects/${item.id}`}><h2>{item.name}</h2><Project project={item}/></Link>

        </div>
    )
})}
</div>
)
}
}

export default ProjectsList