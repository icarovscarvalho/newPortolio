import styles from './styles.module.css'
import logo from '../../assets/logo.webp'

export function Header() {

  const logoIcon = logo

  return(
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.softskills}>
          <p>Home</p>
          <p>Sobre</p>
          <p>Experiência</p>
        </div>
        <div className={styles.logo}>
          <img src={logoIcon} alt="logo Ícaro Carvalho Web Developer" />
        </div>
        <div className={styles.hardskills}>
          <p>Tecnologias</p>
          <p>Contato</p>
        </div>
      </nav>
    </header>
  )
}