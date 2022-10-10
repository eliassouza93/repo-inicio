import style from './Sobre.module.scss'

export default function Sobre() {
    return (
        <div className={style.sobre}>
            <h4>Tecnologias ultilizadas para criação </h4>
            <div className={style.info}>

                <div className={style.divr}>
                    <li>Editor de texto: <span>Visual Studio Code</span></li>
                </div>
                <div className={style.divr}>
                    <li>Site construido com: <span>JavaScript | ReactJS</span></li>
                </div>
                <div className={style.divr}>
                    <li>Marcador de Texto: <span>HTML</span></li>
                </div>
                <div className={style.divr}>
                    <li>Estilo: <span>SASS e CSS3</span></li>
                </div>
                <div className={style.divr}>
                    <li>Repositório: <span>Github | Netify</span></li>
                </div>
                <div className={style.divr}>
                    <li>Tipo de site: <span>Portifólio</span></li>
                </div>

            </div>
        </div>
    )
} 