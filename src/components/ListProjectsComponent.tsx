

export default function ListProjectsComponent({removeItem, items}){
    return(
        <div className="container-fluid list-project">
            <table className="container">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>DATA</td>
                        <td>PROJETO</td>
                        <td>CLIENTE</td>
                        <td>VALOR</td>
                        <td>EDIÇÃO</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((x)=>{
                        return(
                            <tr key={x._id}>
                                <td> {x._id} </td>
                                <td> {x.data} </td>
                                <td> {x.projeto} </td>
                                <td> {x.cliente} </td>
                                <td> {x.valor} </td>
                                <td>
                                    <button onClick={()=>{removeItem(x._id)}} type="button" className="btn btn-danger">Remover</button>
                                    <button className="btn btn-primary">Editar</button>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}