import Project from "../features/Projects/Project";
import Heading from "../ui/Heading";

function Work() {
  return (
    <section id="work" className=" min-h-[100vh] p-6">
      <Heading title="Projects" />
      <Project />
    </section>
  );
}

export default Work;
