import styles from './styles.module.css'
import logo from '../../assets/logo.webp'

import { IoMenuOutline } from "react-icons/io5";

export function Header() {

  const logoIcon = logo

  return(
    <div id="home" className={styles.headerContainer}>
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <div className={styles.logo}>
            <img src={logoIcon} alt="logo Ícaro Carvalho Web Developer" />
          </div>
          <div className={styles.skills}>
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#about">
              <p>Sobre</p>
            </a>
            <a href="#experience">
              <p>Experiência</p>
            </a>
            <a href="#stack">
              <p>Tecnologias</p>
            </a>
            <a href="#contact">
              <p>Contato</p>
            </a>
          </div>
        </nav>
      </header>
      <IoMenuOutline className={styles.menuIcon} />
    </div>
  )
}