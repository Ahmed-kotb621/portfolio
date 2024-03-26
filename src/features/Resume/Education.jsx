import { motion } from "framer-motion";
import { useAnimation } from "../../Hooks/useAnimation";
import TextGredient from "../../ui/TextGredient";
function Education() {
  const { ref, isVisible } = useAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1 md:border-r-2 border-[#ffddb7] border-to-black"
    >
      <TextGredient text="Education" size={"30px"} />

      <div className="text-start my-6 pb-3 leading-8 border-b-2 border-[#ffddb7]">
        <h2 className="text-lg">
          Bachelor of Computer Science and Artificial Intelligence
        </h2>
        <p className=" text-gray-500">Grade: Very Good</p>
      </div>
      <div className="text-start my-6 pb-3 leading-8 border-b-2 border-[#ffddb7]">
        <h2 className="text-lg ">
          Udemy - The Ultimate React Course 2023 React, Redux & More
        </h2>
        <p className=" text-gray-500">
          JSX, State Management, Reusability, Custom Hooks, Redux,Context
          Api,Tailwind,Styled Components,etc.
        </p>
      </div>
      <div className="text-start my-6 leading-8">
        <h2 className="text-lg">Front End Masters</h2>
        <p className="text-gray-500">Complete Intro to React, v8</p>
        <p className="text-gray-500">Intermediate React, v5</p>
      </div>
    </motion.div>
  );
}

export default Education;
