import Accordion from "../accordion";
import { Carousel } from "../carousel";
import { HireMeBtn } from "../hireMeBtn";
import styles from "./styles.module.css"


export function WorksExp() {
  return(
    <section className={styles.workExpField}>
      <div className={styles.titleField}>
        <h2>Vamos dar uma olhada no meu <strong>portfólio</strong></h2>
        <HireMeBtn />
      </div>
      <Carousel />
      <Accordion />
    </section>
  )
}