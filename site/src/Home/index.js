import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Index(){
    const navigate = useNavigate();

    function Cadastrar(){
        navigate('/Cadastro')
    }
    function Feed(){
        navigate('/Feed')
    }
    return(
        <main className='Paii'>
            <header>
                <h1> Página Principal </h1>
            </header>
            <section className='opaa'>
                <h4> Escolha as opções </h4>
            </section>
            <section>
                <div>
                    <button onClick={Cadastrar}> Cadastro </button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={Feed}> Ver Todos Animes </button>
                </div>
            </section>
        </main>
    )
}