import style from './Sobre.module.scss'

export default function Sobre() {
    return (
        <div className={style.sobre}>
            <h4>Tecnologias ultilizadas para criação </h4>
            <div className={style.caixa}>

                <div className={style.divr}>
                    <h1>&#8730;</h1>   <p>Editor de texto: <span>Visual Studio Code</span></p>
                </div>
                <div className={style.divr}>
                    <h1>&#8730;</h1>   <p>Site construido com: <span>JavaScript | ReactJS</span></p>
                </div>
                <div className={style.divr}>
                    <h1>&#8730;</h1>   <p>Marcador de Texto: <span>HTML</span></p>
                </div>
                <div className={style.divr}>
                    <h1>&#8730;</h1>   <p>Estilo: <span>SASS e CSS3</span></p>
                </div>
                <div className={style.divr}>
                    <h1>&#8730;</h1>   <p>Repositório: <span>Github | Netify</span></p>
                </div>
                <div className={style.divr}>
                    <h1>&#8730;</h1> <p>Tipo de site: <span>Portifólio</span></p>
                </div>

            </div>
        </div>
    )
} 