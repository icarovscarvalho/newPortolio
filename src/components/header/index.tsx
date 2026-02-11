import styles from './styles.module.css'
import logo from '../../assets/logo.webp'

import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';

export function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [changeIcon, setChangeIcon] = useState<boolean>(true)
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth)
  const Icon = changeIcon ? IoMenuOutline : IoMdClose

  function openMenu() {
    setIsMenuOpen(prev => !prev)
    setChangeIcon(prev => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    console.log(widthScreen)
  }, [widthScreen])

  return(
    <div id="home" className={styles.headerContainer}>
      <header
        className={styles.header}
        style={{ display: isMenuOpen || widthScreen>=1024 ? 'block' : 'none' }}
      >
        <nav className={styles.navBar}>
          <div className={styles.logo}>
            <img src={logo} alt="logo Ícaro Carvalho Web Developer" />
          </div>
          <div className={styles.skills}>
            <a onClick={openMenu} href="#home">
              <p>Home</p>
            </a>
            <a onClick={openMenu} href="#about">
              <p>Sobre</p>
            </a>
            <a onClick={openMenu} href="#experience">
              <p>Experiência</p>
            </a>
            <a onClick={openMenu} href="#stack">
              <p>Tecnologias</p>
            </a>
            <a onClick={openMenu} href="#contact">
              <p>Contato</p>
            </a>
          </div>
        </nav>
      </header>

      <Icon
        onClick={openMenu}
        className={styles.menuIcon}
      />
    </div>
  )
}
