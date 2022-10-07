import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import whatsapp from './assets/whatsapp.svg'
import style from './Rodape.module.scss'

export default function Rodape() {
  return (

    <div className={style.bloco}>
      <div className={style.titulo}>
        <hr />
        <p className={style.titulo}>Desenvolvido, por Elias de Souza</p>
      </div>
      <div className={style.sociais}>
        <a href="https://www.linkedin.com/in/elias-souza-784379220/" target="_blank" rel="noopener noreferrer"   > <img src={linkedin} alt="linkedin" /> </a>
        <a href="https://github.com/eliassouza93" target="_blank" rel="noopener noreferrer"  >  <img src={github} alt="github" /> </a>
        <a href="https://api.whatsapp.com/send?phone=5548998064305" target="_blank" rel="noopener noreferrer"  >  <img src={whatsapp} alt="whatsapp" /> </a>
      </div>
      <div className={style.copy}>
        <p className={style.copy}>&copy; Dev Elias, 2022. All rights reserved. </p>
      </div>
    </div>
  )
}