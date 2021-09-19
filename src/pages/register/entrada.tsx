import { useState } from "react"
import EntradaComponent from "../../components/EntradaComponent"
import "../../styles/cliente.module.css"

export default function Entrada(){
    const [model, setModel] = useState({nome:"",projeto:"",sprint:"",valor:"",data:""})

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    return(
        <EntradaComponent changeModel={changeModel} />
    )
}