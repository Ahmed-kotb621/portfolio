import Education from "../features/Resume/Education";
import Experience from "../features/Resume/Experience";
import Heading from "../ui/Heading";

function Resume() {
  return (
    <section
      id="resume"
      className=" min-h-[70vh]  flex flex-col items-center p-8 lg:w-[60%] mx-auto"
    >
      <Heading title="Resume" />
      <div className="text-white flex flex-col w-full text-center gap-2 mt-20 md:flex-row">
        <Education />
        <Experience />
      </div>
    </section>
  );
}

export default Resume;
