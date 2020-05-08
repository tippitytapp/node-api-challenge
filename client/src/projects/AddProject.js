import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"


function AddProject(){
const [project, setProject] = useState({
    name: "",
    description: "",
    completed: false
})
const history = useHistory();
const addProject = (project) => {
    axios.post(`http://localhost:4534/api/projects`, project)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const inputHander = event => {
    event.preventDefault();
    setProject({
        ...project,
        [event.target.name]: event.target.value
    })

}



return(
    <div>
        <form onSubmit={(e)=>{e.preventDefault();addProject(project);history.push("/projects");history.go(0)}}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={inputHander} value={project.name} /><br/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" onChange={inputHander} value={project.description}/><br/>
            <input type="checkbox" id="completed" name="completed" onChange={inputHander} value={project.completed}/>
            <label htmlFor="completed">Completed</label><br/>
            <button>Add Project</button>
        </form>
    </div>
)
}

export default AddProject