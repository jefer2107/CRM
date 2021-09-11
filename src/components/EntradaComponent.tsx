

export default function EntradaComponent({changeModel}){
    return(
        <div className="register-cliente d-flex">
            <form className="mx-auto">
                <h3 className="text-center">Entrada</h3>
                <div className="form-group">
                    <label>Nome:</label>
                    <input onChange={changeModel} className="form-control" name="nome" type="text" />
                </div>
                <div className="form-group mx-auto">
                    <label>Projeto:</label>
                    <input onChange={changeModel} className="form-control" name="projeto" type="text" />
                </div>
                <div className="form-group mx-auto">
                    <label>Sprint:</label>
                    <input onChange={changeModel} className="form-control" name="sprint" type="text" />
                </div>
                <div className="form-group mx-auto">
                    <label>valor:</label>
                    <input onChange={changeModel} className="form-control" name="valor" type="text" />
                </div>
                <div className="form-group">
                    <label>Data:</label>
                    <input onChange={changeModel} className="form-control" name="data" type="date" />
                </div>
                <button type="submit" className="btn btn-success btn-block my-2">Cadastrar</button>
            </form>
        </div>
    )
}