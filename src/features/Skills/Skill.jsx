import { FaCss3, FaHtml5, FaJs, FaReact, FaNpm, FaSass } from "react-icons/fa6";
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
  SiTypescript,
} from "react-icons/si";
function Skill() {
  return (
    <ul className={`${styles.skills}`}>
      <li className={`${styles.icon}`} title="Html 5">
        <FaHtml5 />
      </li>
      <li className={`${styles.icon}`} title="Css 3">
        <FaCss3 />
      </li>
      <li className={`${styles.icon}`} title="Tailwind css">
        <BiLogoTailwindCss />
      </li>
      <li className={`${styles.icon}`} title="BootStrap">
        <SiBootstrap />
      </li>
      <li className={`${styles.icon}`} title="Sass">
        <FaSass />
      </li>
      <li className={`${styles.icon}`} title="JavaScript">
        <FaJs />
      </li>
      <li className={`${styles.icon}`} title="TypeScript">
        <SiTypescript />
      </li>
      <li className={`${styles.icon}`} title="C++">
        <SiCplusplus />
      </li>
      <li className={`${styles.icon}`} title="React.js">
        <FaReact />
      </li>
      <li className={`${styles.icon}`} title="Redux">
        <SiRedux />
      </li>
      <li className={`${styles.icon}`} title="Jest">
        <SiJest />
      </li>
      <li className={`${styles.icon}`} title="Webpack">
        <SiWebpack />
      </li>
      <li className={`${styles.icon}`} title="Vite">
        <SiVite />
      </li>
      <li className={`${styles.icon}`} title="Styled Components">
        <SiStyledcomponents />
      </li>
      <li className={`${styles.icon}`} title="Git">
        <SiGit />
      </li>
      <li className={`${styles.icon}`} title="npm">
        <FaNpm />
      </li>
      <li className={`${styles.icon}`} title="React Query">
        <SiReactquery />
      </li>
    </ul>
  );
}

export default Skill;
