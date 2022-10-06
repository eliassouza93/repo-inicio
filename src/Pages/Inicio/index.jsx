import style from './Inicio.module.scss'


export default function Inicio() {
    return (
        <div className={style.texto__pai}>

            <h2 className={style.h2M}>Olá, me chamo Elias,</h2>

            <section className={style.normal}>
                <p className={style.texto}>
                    Sempre tive curiosidades sobre tudo, logo, a busca por conhecimento para mim é muito mais do que aquisição de informações e processamento de dados, mas de autoconhecimento, satisfação e diversão!
                </p>
            </section>
            <section id='img2' className={style.imagem1}>
                <p className={style.texto}>

                </p>

            </section>
            <section id='img1' className={style.normal}>
                <p className={style.texto}>
                    Atualmente estou cursando Analise e Desenvolvimento de Sistema na Universidade Uninter e também estudando linguagens de programação na Alura, onde conquistei meus primeiros certificados.
                </p>
            </section>
            <section id='img2' className={style.imagem1}>
                <p className={style.texto}>

                </p>

            </section>
            <section className={style.normal}>
                <p className={style.texto}>
                    Estou sempre a procura de ampliar e aprimorar minhas técnicas e conceitos, afim de buscar novos conhecimentos que para mim é essencial para obter uma percepção mais aguçada sobre as tendências e uma visão holística para um mundo que está em constante transformação.
                </p>

            </section>
            <section id='img2' className={style.imagem1}>
                <p className={style.texto}>

                </p>

            </section>
            <div className={style.fim}></div>




        </div >


    )
}

