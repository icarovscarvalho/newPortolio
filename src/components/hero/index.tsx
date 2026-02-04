import styles from './styles.module.css'
import photo from '../../assets/foto.webp'

import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";

export function Hero() {

  const myPhoto = photo

  return(
    <section className={styles.heroContainer}>
      <div className={styles.introField}>
        <div className={styles.helloBaloon}>
          <p>Olá!</p>
        </div>
        <h1>Eu sou <strong>Ícaro Carvalho,</strong></h1>
        <h1>Desenvolvedor Web Front-end</h1>
      </div>
      <div className={styles.contentField}>
        
        <div className={styles.circleContentBox}>
          <div className={styles.textBox1}>
            <p>Front-End Developer focado em performance, usabilidade e código limpo.</p>
          </div>
          <div className={styles.circle}>
            <img src={myPhoto} alt="Ícaro Carvalho" />
          </div>
          <div className={styles.textBox2}>
            <div>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>3+ anos</p>
            <br />
            <p>Desenvolvendo projetos web</p>
          </div>
        </div>
        
        <div className={styles.headhunterBtn}>
          <button className={styles.portfolioBtn}>Currículo <GoDownload /></button>
          <button className={styles.hireMeBtn}>Contratar</button>
        </div>
      </div>
    </section>
  )
}