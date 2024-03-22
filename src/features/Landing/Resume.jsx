import resume from "../../assets/Ahmed-Sayed-Resume.pdf";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "./link.module.css";
function Resume() {
  return (
    <div className="text-white flex p-5 justify-center mt-5 md:mt-0 ">
      <a href="/#contact" className={`${style.link}`}>
        Contact Me <FaArrowRightLong />
      </a>
      <a href={resume} className={`${style.cvGradient}`} download>
        Download CV
      </a>
    </div>
  );
}

export default Resume;
