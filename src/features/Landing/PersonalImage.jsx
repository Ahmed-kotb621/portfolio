import { motion } from "framer-motion";
import image from "../../assets/image-p-2.png";
import { useAnimation } from "../../Hooks/useAnimation";

function PersonalImage() {
  const { ref, isVisible } = useAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 150 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 1, y: 150 }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-[100%]"
    >
      <img src={image} className="rounded-full min-w-[260px] " />
    </motion.div>
  );
}

export default PersonalImage;
