import "../styles/projects.module.css"

export default function ProjectComponent({changeModel, register}){
    return(
        <div className="register-projects d-flex">
            <form onSubmit={register} className="mx-auto">
            <h3 className="text-center">Cadastrar Projeto</h3>
                <div className="form-group">
                    <label>Data:</label>
                    <input onChange={changeModel} className="form-control" type="date" name="data" />
                </div>
                <div className="form-group">
                    <label>Projeto:</label>
                    <input onChange={changeModel} className="form-control" type="text" name="projeto" />
                </div>
                <div className="form-group">
                    <label>Cliente:</label>
                    <input onChange={changeModel} className="form-control" type="text" name="cliente" />
                </div>
                <div className="form-group">
                    <label>Valor:</label>
                    <input onChange={changeModel} className="form-control" type="text" name="valor" />
                </div>
                <button type="submit" className="btn btn-success btn-block my-2">Cadastrar</button>
            </form>
            
        </div>
    )
}