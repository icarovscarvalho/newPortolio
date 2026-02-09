import styles from './styles.module.css'

import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { HireMeBtn } from '../hireMeBtn';

import photoMobile from '../../assets/bgHeroMobile.png'
import cv from '../../../public/docs/cv.pdf'

export function Hero() {

  const myPhotoMobile = photoMobile

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

        <div className={styles.mobilePhoto}>
          <img src={myPhotoMobile} alt="Foto Ícaro de Carvalho" />
        </div>
        
        <div className={styles.textBox1}>
          <p>Front-End Developer focado em performance, usabilidade e código limpo.</p>
        </div>

        <div className={styles.headhunterBtn}>
          <HireMeBtn />
          <button className={styles.cvBtn}>
            <a href={cv} download={"CV Ícaro Carvalho - Desenvolvedor Web Frontend"}>Currículo <GoDownload /></a>
          </button>
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
    </section>
  )
}