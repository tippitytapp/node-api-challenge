import React from "react";
import axios from "axios"

export const deleteProject = id => {
axios.delete(`http://localhost:4534/api/projects/${id}`)
.then(resp => {
    console.log(resp)
})
.catch(error => {
    console.log(error)
})
}