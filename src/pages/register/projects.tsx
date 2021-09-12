import { useState } from "react"
import ProjectComponent from "../../components/ProjectComponent"

export default function Projects(){
    const [project, setProject] = useState({projeto:"", cliente:"", valor:""})

    const changeModel = ({target})=>{
        setProject((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    return(
        <ProjectComponent changeModel={changeModel} project={project} />
    )
}