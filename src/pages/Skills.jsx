import { motion } from "framer-motion";
import Skill from "../features/Skills/Skill";
import Heading from "../ui/Heading";
import { useAnimation } from "../Hooks/useAnimation";

function Skills() {
  const { ref, isVisible } = useAnimation();
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      id="skills"
      className="h-[100dvh] flex flex-col items-center mt-6"
    >
      <Heading title="Professional Skills" />
      <Skill />
    </motion.section>
  );
}

export default Skills;
