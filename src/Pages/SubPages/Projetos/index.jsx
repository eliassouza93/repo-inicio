import { useEffect, useState } from 'react'
import style from './Projetos.module.scss'
import axios from 'axios'
export default function Prejetos() {
    const [usuarios, setUsuarios] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/restaurantes/')
           .then(resposta => {
              setUsuarios(resposta.data.results)
           })
       },[])
   

    return (
       
        <div className={style.projetos}>
            <h1>Projétos</h1>
            <h1>Carregando...</h1>
            <h1>Página em construção</h1>

 
        </div>
    )
}