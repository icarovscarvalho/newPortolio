import { useInView } from "../hooks/useInView"
import styles from "./styles.module.css";
import "animate.css";

import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoSass } from "react-icons/io5";
import type { IconType } from "react-icons";


/* =========================
   TIPAGEM
========================= */

interface Skill {
  tech: string;
  icon: IconType;
  color: string;
}

/* =========================
   ITEM INDIVIDUAL
========================= */

function SkillItem({
  item,
  index,
}: {
  item: Skill;
  index: number;
}) {
  const { ref, visible } = useInView();
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`${styles.skillItem} ${
        visible ? "animate__animated animate__fadeInUp" : ""
      }`}
    >
      <div className={styles.icons}>
        <Icon color={item.color} size={26} />
      </div>
      <p>{item.tech}</p>
    </div>
  );
}

/* =========================
   COMPONENTE PRINCIPAL
========================= */

export function Skills() {
  const frontend: Skill[] = [
    { tech: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { tech: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { tech: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { tech: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { tech: "React", icon: SiReact, color: "#61DAFB" },
  ];

  const markupAndStyles: Skill[] = [
    { tech: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { tech: "CSS3", icon: SiCss3, color: "#1572B6" },
    { tech: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { tech: "Sass", icon: IoLogoSass, color: "#CC6699" },
  ];

  const db: Skill[] = [
    { tech: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
    { tech: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ];

  return (
    <section id="stack" className={styles.sectionSkills}>
      <div className={styles.title}>
        <h2>Tecnologias que eu domino no dia a dia</h2>
        <p>
          Ferramentas modernas, alinhadas às demandas do mercado e às boas
          práticas de desenvolvimento.
        </p>
      </div>

      <div className={styles.skillsContainer}>
        <div className={styles.frontend}>
          {frontend.map((item, i) => (
            <SkillItem key={item.tech} item={item} index={i} />
          ))}
        </div>

        <div className={styles.markupAndStyles}>
          {markupAndStyles.map((item, i) => (
            <SkillItem key={item.tech} item={item} index={i} />
          ))}
        </div>

        <div className={styles.db}>
          {db.map((item, i) => (
            <SkillItem key={item.tech} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
