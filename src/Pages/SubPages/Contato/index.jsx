import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import style from './Contato.module.scss'

export default function Contato() {
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    function Agradece() {
       
        alert('Obrigado por sua mensagem: ' + nome.toUpperCase())
        console.log(mensagem)
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

                    <input type="text" id='mensagem' placeholder='digíte sua mensagem' className={style.msg} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />

                </label>
                <div className={style.btn__pai} >
                    <button onClick={Agradece} className={style.btn}>Enviar</button>
                </div>
                {nome}

            </div>

        </div>
    )
}