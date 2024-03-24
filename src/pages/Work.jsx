import image1 from "../assets/projects/muslim/muslim1.PNG";
import Project from "../features/Projects/Project";
import Heading from "../ui/Heading";
function Work() {
  return (
    <section id="work" className=" min-h-[100vh] p-6">
      <Heading title="Projects" />
      <Project
        image={image1}
        description="Muslim Web Site show praying times,Holy Quran (Sound & Text)
              ,Azkar , etc ."
        technologies=" Html, Css, Js, Dom Manipulation, and Http Request ."
        href="https://ahmed-kotb621.github.io/Muslim/index.html"
      />
    </section>
  );
}

export default Work;
