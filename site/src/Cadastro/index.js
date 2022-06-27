import { useState } from "react"
import { CadastrarAnime } from '../api/AnimeAPI'
import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Index(){
    const[Nome, SetNome]=useState('');
    const Navigate = useNavigate()

    async function SalvarClick(){
        try {
            if(!Nome){
                alert("Precncha Corretamente")
            }
            else{
                const r = await CadastrarAnime(Nome)
                alert("Anime Cadastrado")
            }
            
        } 
        
        catch (err) {
            alert(err.message)
        }
    }

    function Voltar(){
        Navigate('/')
    }


    return (
        <main className="Pai">
            <header> <h1> Página de Cadastro </h1> </header>
            <section className="Opa">  <h3> Preencha o Campo a seguinte: </h3> </section>
            <section className="inpuut"> <input placeholder="Nome" value={Nome} onChange={e => SetNome(e.target.value)}/>  &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={SalvarClick}> Cadastrar </button></section>
            <section className="kkk"> <button onClick={Voltar}> Home </button> </section>
        </main>
    )
}