

import React from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom"
function Project(props){
    const params=useParams();
    const history=useHistory();
    const deleteProject = (event, id) =>{
        axios.delete(`http://localhost:4534/api/projects/${props.project.id}`)
        .then(res => {console.log(res); history.push('/projects')})
        .catch(err => {console.log(err)})
    }
    console.log(props.project.id)
    return(
<div className="projects">
        <h2>{props.project.name}</h2>
        <h3>{props.project.description}</h3>
        <button onClick={(e)=>{e.preventDefault();deleteProject(props.project.id)}}>Delete</button>
        </div>
    )
}

export default Project