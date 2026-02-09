import styles from "./styles.module.css"

type HireMeProps = {
  bgColor?: string
  borderColor?: string
  color?: string
  hoverColor?: string
  hoverBorderColor?: string
}

export function HireMeBtn({
  bgColor = "#ff4500",
  borderColor = "#fff",
  color = "#fff",
  hoverColor = "#fff",
  hoverBorderColor = "#000",
}: HireMeProps) {
  return (
    <button
      className={styles.hireMeBtn}
      style={{
        "--bg-color": bgColor,
        "--border-color": borderColor,
        "--border-hover-color": hoverBorderColor,
        "--text-color": color,
        "--text-hover-color": hoverColor,
      } as React.CSSProperties}
    >
      <a
        href="https://www.linkedin.com/in/icarovscarvalho/"
        target="_blank"
        rel="noreferrer"
      >
        Contratar
      </a>
    </button>
  )
}

