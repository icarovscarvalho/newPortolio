import { HireMeBtn } from "../hireMeBtn"
import styles from "./styles.module.css"

import { IoRocketOutline } from "react-icons/io5";

import photo from "../../assets/bgPerfil.webp"

export function About() {

  const content = [
    {
      img: photo,
      alt: "Ícaro Carvalho imagem de perfil da seção sobre.",
      about: [
        "Porque eu entro para somar. Sou comunicativo, focado, nunca desisto e gosto de ambientes dinâmicos, onde dá para aprender, trocar ideias e evoluir de verdade. Levo responsabilidade a sério, mas sem perder a leveza no dia a dia.",
        "Tenho facilidade para trabalhar em equipe, recebo feedbacks de forma madura e estou sempre buscando melhorar meus resultados. Aprendo rápido, me adapto bem a mudanças e encaro desafios como parte natural do crescimento profissional.",
        "Se você busca alguém comprometido, com energia, atitude e vontade de crescer junto com a empresa, pode contar comigo."],
      btnTxt: "Hire Me",
    }
  ]

  return(
    <>
      {content.map( (item, i) => 
        <div key={i} className={styles.aboutField}>
          <div className={styles.aboutContainer}>
            <div className={styles.imgField}>
              <img src={item.img} alt={item.alt} />
            </div>
            <div className={styles.contentField}>
              <h2>Por que você deveria <strong>me contratar</strong>?</h2>
              {item.about.map( (txt, i) =>
                <div key={i} className={styles.paragraphs}>
                  <p>{txt}</p><br />
                </div>
              )}
              <div className={styles.status}>
                <p><IoRocketOutline /></p><br />
              </div>
              <HireMeBtn
                bgColor="inherit"
                borderColor="orangered"
                color="orangered"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}