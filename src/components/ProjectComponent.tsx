import "../styles/projects.module.css"

export default function ProjectComponent({changeModel, project}){
    return(
        <div className="register-projects d-flex">
            <form className="mx-auto">
            <h3 className="text-center">Cadastrar Projeto</h3>
                <div className="form-group">
                    <label>Data:</label>
                    <input onChange={changeModel} className="form-control" type="date" name="projeto" />
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
                <button className="btn btn-success btn-block my-2">Cadastrar</button>
            </form>
        </div>
    )
}