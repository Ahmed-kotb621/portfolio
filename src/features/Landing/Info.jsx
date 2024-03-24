import { motion } from "framer-motion";
import styles from "./gradient.module.css";
import { useAnimation } from "../../Hooks/useAnimation";

function Info() {
  const { ref, isVisible } = useAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="mt-7 md:mt-0 flex flex-col items-center justify-center text-center text-white w-[100%] h-1[100%]"
    >
      <h2 className="text-4xl md:text-5xl text-nowrap lg:text-7xl mb-3 md:mb-0">
        Welcome,&nbsp; My name is
      </h2>
      <h1 className={`${styles.gradientText}`}>Ahmed Kotb</h1>
      <h1 className="text-4xl md:text-5xl lg:text-7xl mt-3 md:mt-0">
        Front-End Developer
      </h1>
    </motion.div>
  );
}

export default Info;
