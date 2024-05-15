import resume from "../../assets/Ahmed-Sayed-FrontEnd-Resume.pdf";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "./link.module.css";

function Resume() {
  return (
    <ul className="text-white flex p-5 h-[100%] justify-center md:mt-0 ">
      <li>
        <a href="/#contact" className={`${style.link}`}>
          Contact Me <FaArrowRightLong />
        </a>
      </li>
      <li>
        <a href={resume} className={`${style.cvGradient}`} download>
          Download CV
        </a>
      </li>
    </ul>
  );
}

export default Resume;
