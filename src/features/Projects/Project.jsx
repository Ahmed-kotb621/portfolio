import { motion } from "framer-motion";
import { useAnimation } from "../../Hooks/useAnimation";
import Link from "../../ui/Link";
import TextGredient from "../../ui/TextGredient";
function Project({ image, description, technologies, href }) {
  const { ref, isVisible } = useAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }
      }
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto mt-[100px]  bg-gradient-to-b from-[#086fff] via-[#ffddb7] to-black p-1 rounded-[20px]"
    >
      <div className="bg-black rounded-2xl p-1 ">
        <div className="flex gap-1 h-[300px] overflow-hidden rounded-2xl">
          <img src={image} className=" h-[100%] w-[100%]" />
        </div>
        <div className="bg-black rounded-2xl mt-2 text-white p-2 text-lg">
          <div>
            <h2>
              <TextGredient text="Description : " size="22px" />
              {description}
            </h2>
            <h2 className="my-2">
              <TextGredient text="Technologies :" size="30px" />
              {technologies}
            </h2>
          </div>
        </div>
        <div className="text-white p-2 mb-2">
          <Link title="see project" href={href} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
