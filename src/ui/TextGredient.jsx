import styles from "./textGred.module.css";

function TextGredient({ text }) {
  return <p className={`${styles.gradientText}  font-semibold`}>{text}</p>;
}

export default TextGredient;
