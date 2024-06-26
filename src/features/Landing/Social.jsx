import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Social({ footer }) {
  return (
    <div className=" w-[100%] h-[100%] ">
      <ul
        className={`text-4xl  md:mt-0 flex justify-around items-center h-[100%] ${
          footer ? "md:flex mt-0" : "md:flex-col mt-5"
        }`}
      >
        <li className="text-[#403d3d] hover:text-slate-300 duration-300 m-3">
          <a
            href="https://www.linkedin.com/in/ahmed-kotb-17b0a4253"
            target="_blanck"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="text-[#403d3d] hover:text-slate-300 duration-300 m-3">
          <a
            href="https://www.facebook.com/profile.php?id=100011474560320"
            target="_blanck"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="text-[#403d3d] hover:text-slate-300 duration-300 m-3">
          <a href="https://github.com/Ahmed-kotb621" target="_blanck">
            <FaGithub />
          </a>
        </li>
        <li className="text-[#403d3d] hover:text-slate-300 duration-300 m-3">
          <a href="mailto:akotb621@gmail.com">
            <IoIosMail />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
