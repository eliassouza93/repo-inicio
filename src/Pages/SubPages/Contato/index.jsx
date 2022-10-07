import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import style from './Contato.module.scss'

export default function Contato() {
    const [nome, setNome] = useState('')
    

    function Agradece() {
        if(nome === ''){
            alert('Digite seu nome')
            
        }else{
            alert('Obrigado por sua mensagem: ' + nome.toUpperCase())
            
        }
       
    }

    return (
        <div className={style.pai}>

            <div className={style.formulario}>
                <label htmlFor="nome">Nome

                    <input type="text" id='nome' placeholder='digíte seu nome'
                    value={nome}
                    onChange={(e) =>setNome(e.target.value)}
                     className={style.nome} />

                </label>
                <label className={style.msg__pai} htmlFor="mensagem">Mensagem

                    <textarea placeholder='digite sua mensagem' className={style.msg} name="texto" id="mensagem"></textarea>

                </label>
                <div className={style.btn__pai} >
                    <button onClick={Agradece} className={style.btn}>Enviar</button>
                </div>
 
            </div>

        </div>
    )
}