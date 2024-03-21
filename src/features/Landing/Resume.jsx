import resume from "../../assets/Ahmed-Sayed-Resume.pdf";
import { FaArrowRightLong } from "react-icons/fa6";

function Resume() {
  return (
    <div className="text-white flex p-5 justify-center md:justify-start md:ml-[200px]">
      <a
        href="/#contact"
        className="flex items-center gap-2 hover:gap-3 duration-300"
      >
        Contact Me <FaArrowRightLong />
      </a>
      <a href={resume} download>
        Download CV
      </a>
    </div>
  );
}

export default Resume;
