import Link from "next/link"


export default function Header(){
    return(
        <div className="container-fluid">
            <header className="container">
                <ol>
                    <Link href="/">
                        <a>
                            <li>Home</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Entrada</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Saída</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Funcionários</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Campanhas</li>
                        </a>
                    </Link>
                    <Link href="register/projects">
                        <a>
                            <li>Cadastrar Projeto</li>
                        </a>
                    </Link>
                    <Link href="list/listProjects">
                        <a>
                            <li>Listas de Projetos</li>
                        </a>
                    </Link>
                </ol>
            </header>
        </div>
    )
}