import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

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

    const deleteProject = (event, id) =>{
        axios.delete(`http://localhost:4534/api/projects/${id}`)
        .then(res => {console.log(res); history.push('/projects')})
        .catch(err => {console.log(err)})
    }



    if(!projects){
        return(<div className="loading"><h1>Loading...</h1></div>)}else if(projects.length === 0){return(<div><h1>YOU HAVE NO PROJECTS</h1></div>)}else{
    
return(
<div>
<h1>Projects</h1>
{projects.map(item => {
    console.log(item.id)
    return(
        <div className="projects">
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
        <button onClick={(e)=>{e.preventDefault();deleteProject(item.id)}}>Delete</button>
        </div>
    )
})}
</div>
)
}
}

export default ProjectsList