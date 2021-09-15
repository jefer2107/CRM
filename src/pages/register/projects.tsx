import { useState } from "react"
import ProjectComponent from "../../components/ProjectComponent"
import axios from "axios"

interface ProjectProps{
    projeto: string
    cliente: string
    valor: string
    data: Date
}

export default function Projects(){
    const [project, setProject] = useState<ProjectProps>()
    const [message, setMessage] = useState("")

    const changeModel = ({target})=>{
        setProject((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const register = (event)=>{
        axios.post("http://localhost:3000/api/projects", project)
            .then((x)=>{
                setProject(x.data)
            })

        event.preventDefault()
    }

    return(
        <ProjectComponent changeModel={changeModel} register={register}/>
    )
}