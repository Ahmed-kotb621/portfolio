import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./link.module.css";
function Link({ title, href }) {
  return (
    <div className="w-[50%]">
      <a href={href} className={`${styles.link}`} target="_blanck">
        {title} <FaArrowRightLong />
      </a>
    </div>
  );
}

export default Link;
