import { FaCss3, FaHtml5, FaJs, FaReact, FaNpm } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import styles from "./skill.module.css";
import {
  SiBootstrap,
  SiCplusplus,
  SiGit,
  SiJest,
  SiRedux,
  SiStyledcomponents,
  SiVite,
  SiReactquery,
  SiWebpack,
} from "react-icons/si";
function Skill() {
  return (
    <div className={`${styles.skills}`}>
      <div className={`${styles.icon}`}>
        <FaHtml5 />
      </div>
      <div className={`${styles.icon}`}>
        <FaCss3 />
      </div>

      <div className={`${styles.icon}`}>
        <BiLogoTailwindCss />
      </div>
      <div className={`${styles.icon}`}>
        <SiBootstrap />
      </div>
      <div className={`${styles.icon}`}>
        <FaJs />
      </div>
      <div className={`${styles.icon}`}>
        <SiCplusplus />
      </div>
      <div className={`${styles.icon}`}>
        <FaReact />
      </div>
      <div className={`${styles.icon}`}>
        <SiRedux />
      </div>
      <div className={`${styles.icon}`}>
        <SiJest />
      </div>
      <div className={`${styles.icon}`}>
        <SiWebpack />
      </div>
      <div className={`${styles.icon}`}>
        <SiVite />
      </div>
      <div className={`${styles.icon}`}>
        <SiStyledcomponents />
      </div>
      <div className={`${styles.icon}`}>
        <SiGit />
      </div>
      <div className={`${styles.icon}`}>
        <FaNpm />
      </div>
      <div className={`${styles.icon}`}>
        <SiReactquery />
      </div>
    </div>
  );
}

export default Skill;
