import styles from "./styles.module.css"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {

  const iconsData = [
    {
      link: "https://github.com/icarovscarvalho",
      icon: <FaGithub />
    },
    {
      link: "https://www.linkedin.com/in/icarovscarvalho/",
      icon: <FaLinkedin />
    },
    {
      link: "https://www.instagram.com/icarovscarvalho",
      icon: <FaInstagram />
    },
  ]

  return(
    <footer className={styles.footerContainer}>
      <blockquote className={styles.phrase}>
        <p>“ Quanto mais rápido você abandona o velho queijo, mais cedo encontra o novo. ”</p>
        <p>— <strong>Spencer Johnson</strong>, <i>Quem Mexeu no meu Queijo?</i></p>
      </blockquote>
      <div className={styles.socials}>
        {iconsData.map( data =>
          <a href={data.link} target="_blank">
            <div>{data.icon}</div>
          </a>
        )}
      </div>
    </footer>
  )
}