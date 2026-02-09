import photo from "../../assets/bgPerfil.webp"
import { HireMeBtn } from "../hireMeBtn"
import styles from "./styles.module.css"

export function About() {

  const content = [
    {
      img: photo,
      alt: "Ícaro Carvalho imagem de perfil da seção sobre.",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deserunt modi ipsam quisquam facere magni, eum cupiditate maxime error aut voluptatem libero nihil illum nemo quibusdam? Corrupti, voluptates. Amet, voluptatibus.",
      status: [600, 50],
      btnTxt: "Hire Me",
    }
  ]

  return(
    <>
      {content.map( (item, i) => 
        <div className={styles.aboutField}>
          <div className={styles.aboutContainer}>
            <div className={styles.imgField}>
              <img src={item.img} alt={item.alt} />
            </div>
            <div className={styles.contentField}>
              <h2>Por que você deveria <strong>me contratar</strong>?</h2>
              <p>{item.about}</p>
              <div className={styles.status}>
                <p>{item.status}</p>
                <p>{item.status}</p>
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