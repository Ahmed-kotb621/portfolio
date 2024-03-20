import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function GoHome() {
  const [visible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrolly = window.scrollY;
      if (scrolly > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <a href="#">
      <div
        className={`${
          visible ? "fixed" : "hidden"
        } font-bold text-xl w-fit bottom-5 right-5 p-4 bg-[#2E2E2E] rounded-lg text-white duration-300`}
      >
        <FaArrowUpLong />
      </div>
    </a>
  );
}

export default GoHome;
