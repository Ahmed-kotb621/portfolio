import styles from "./textGred.module.css";

function TextGredient({ text, size }) {
  return (
    <p className={`${styles.gradientText} text-[${size}] font-semibold`}>
      {text}
    </p>
  );
}

export default TextGredient;
