import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const items = [
  {
    cover:
      "https://firebasestorage.googleapis.com/v0/b/limeware-sh.firebasestorage.app/o/portfolio%2Fsih.png?alt=media",
    title: "Saúde Integral do Homem",
    text: "Clínica/serviço de saúde masculina premium, com foco em saúde sexual",
    badge: ["Next JS", "Typescript", "Tailwindcss", "Firebase"]
  },
  {
    cover:
      "https://i.pinimg.com/736x/59/c4/3c/59c43cd3659cf210481537a27bc31d64.jpg",
    title: "Bloodhound RPG",
    text: "Uma nova maneira de jogar RPG de mesa em um universo imersivo no estilo fantasia grimdark",
    badge: ["Next JS", "Typescript", "Tailwindcss", "Firebase"]
  },
  {
    cover:
      "https://firebasestorage.googleapis.com/v0/b/limeware-sh.firebasestorage.app/o/portfolio%2Flemonpop.png?alt=media",
    title: "Lemonpop",
    text: "O LemonPop é um espaço dedicado a reunir e compartilhar as melhores playlists de lofi do YouTube.",
    badge: ["Next JS", "Typescript", "Tailwindcss", "Firebase"]
  },
];

export function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.children[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= items.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? items.length - 1 : prev - 1
    );
    
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.carouselWrapper}>
      <div ref={trackRef} className={styles.track}>
        {items.map((item, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={item.cover} alt={item.title} />
            </div>

            <div className={styles.badgesField}>
              {item.badge.map( tech => 
                <div className={styles.badges}>
                  <p>{tech}</p>
                </div>
              )}
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.arrow}>
          ◀
        </button>
        <button onClick={next} className={styles.arrow}>
          ▶
        </button>
      </div>
    </section>
  );
}
