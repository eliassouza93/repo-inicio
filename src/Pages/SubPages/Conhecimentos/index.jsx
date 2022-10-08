import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Contato.module.scss'


export default function Conhecimentos() {

    return (
        <div className={style.container}>
            <div className={style.bloco}>
            <h1>Conhecimentos</h1>
                <div className={style.info}>
                   
                    <div>
                        <li>
                            Ensino superior em Analise Desenvolvimento de Sistemas- Universidade Internacional Uninter.
                        </li>
                    </div>
                    <div>
                        <li>
                            HTML, CSS  | (SASS) | Bootstrap
                        </li>
                    </div>
                    <div>
                        <li>
                            JavaScript | TypeScript | ReactJs
                        </li>
                    </div>
                    <div>
                        <li>
                            Git | GitHub
                        </li>
                    </div>
                    <div>
                        <li>
                            MySql (básico)
                        </li>
                    </div>
                    <div>
                        <li>
                            Java (básico)
                        </li>
                    </div>
                    <div>
                        <p>

                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}