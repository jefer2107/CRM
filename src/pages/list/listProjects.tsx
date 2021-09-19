import axios from "axios"
import { useEffect, useState } from "react"
import ListProjectsComponent from "../../components/ListProjectsComponent"
import "../../styles/listPojects.module.css"

interface ItemsProps{
    _id: string
    data: Date
    projeto: string
    cliente: string
    valor: string
}

export default function ListProjects(){
    const [items, setItems] = useState<ItemsProps[]>([])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/projects")
            .then((x)=>{setItems(x.data)})
    },[])

    const removeItem = (id)=>{
        axios.delete(`http://localhost:3000/api/projects/${id}`)
            .then(()=>{
                setItems((state)=>{
                    const newList = [...state]
                    const itemToBeRemove = items.findIndex(e=> e._id === id)
                    newList.splice(itemToBeRemove, 1)
                    return newList
                })
            })
    }

    return(
        <ListProjectsComponent removeItem = {removeItem} items={items} />
    )
}