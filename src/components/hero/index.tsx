import styles from './styles.module.css'
import photo from '../../assets/foto.webp'

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
        <div className={styles.circle}>
          <img src={myPhoto} alt="" />
        </div>
        <div className={styles.headhunterBtn}>
          <button className={styles.portfolioBtn}>Portfólio</button>
          <button className={styles.hireMeBtn}>Contratar</button>
        </div>
      </div>
    </section>
  )
}