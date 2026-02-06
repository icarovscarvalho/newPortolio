import { useState } from "react";
import styles from "./styles.module.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Sobre Mim?",
      content: "Profissional comprometido e em constante evolução, com equilíbrio entre hard skills e soft skills. Busco contribuir para o desenvolvimento de soluções digitais colaborando com a equipe, aprendendo rapidamente novas práticas e aplicando conhecimentos técnicos para agregar valor aos projetos. Tenho facilidade de comunicação, organização e foco em oferecer uma boa experiência ao usuário."
    },
    {
      title: "Educação?",
      content: "Formado em Análise e Desenvolvimento de Sistemas, pela Universidade Estácio de Sá em Dezembro 2025"
    },
    {
      title: "Interesse",
      content: "Quero continuar evoluindo no desenvolvimento web, aplicando diariamente tecnologias como React.js, Next.js, TypeScript e Tailwind para criar interfaces modernas, funcionais e responsivas. Também busco ampliar minha atuação em back-end com Node.js e bancos de dados como MongoDB e PostgreSQL e testes unitários com Jest JS, além de aprimorar práticas de deploy com Firebase. Meu objetivo é continuar aprendendo e contribuindo em projetos que tragam impacto real para os usuários."
    }
  ];

  function toggle(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.header}
            onClick={() => toggle(index)}
          >
            {item.title}
            <span className={styles.icon}>
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          {activeIndex === index && (
            <div className={styles.content}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
