import { motion } from "framer-motion";
import { useAnimation } from "../../Hooks/useAnimation";
import TextGredient2 from "../../ui/TextGredient2";
function Experience() {
  const { ref, isVisible } = useAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1 mt-5 md:mt-0"
    >
      <TextGredient2 text="Experience" />

      <div className="text-start leading-8">
        <div className="border-b-2 border-[#ffddb7] my-6 pb-3">
          <h2 className="text-lg">Front-End developer @ Mesallah.</h2>
        </div>
        <div className="border-b-2 border-[#ffddb7] my-6 pb-3">
          <h2 className="text-lg">
            National Company for Roads (Military Service).
          </h2>
          <p className=" text-gray-500">Software Engineer</p>
        </div>
        <p className="text-lg mb-2">
          Adding features and maintaining an existing android application that
          supports multiple operations :-
        </p>
        <ul className=" text-gray-500   list-disc ml-8">
          <li> Generating tickets for different kind of cars.</li>
          <li> Generating daily financial reports.</li>
          <li>
            {" "}
            Dealing with an API’s that are related to tracking devices (POS) at
            different locations.
          </li>
        </ul>
        <p>
          Tools and Concepts :{" "}
          <span className=" text-gray-500">
            Android , SQL Server, Java , Windows Server 2012.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default Experience;
