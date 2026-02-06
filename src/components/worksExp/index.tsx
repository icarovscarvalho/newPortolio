import { Carousel } from "../carousel";
import styles from "./styles.module.css"

import { GoDownload } from "react-icons/go";


export function WorksExp() {
  return(
    <section className={styles.workExpField}>
      <div className={styles.titleField}>
        <h2>Vamos dar uma olhada no meu <strong>portfólio</strong></h2>
        <button className={styles.portfolioBtn}>Currículo <GoDownload /></button>
      </div>
      <Carousel />
    </section>
  )
}