import muslim from "../assets/projects/muslim/muslim1.PNG";
import wildOasis from "../assets/projects/wildOasis/wildOasis.PNG";
import card from "../assets/projects/card/card.png";
import sneakers from "../assets/projects/sneakers/sneakers.PNG";
import wise from "../assets/projects/worldWise/wordWise.png";
import Project from "../features/Projects/Project";
import Heading from "../ui/Heading";
function Work() {
  return (
    <section id="work" className=" min-h-[100vh] p-6">
      <Heading title="Projects" />
      <Project
        image={muslim}
        description="Muslim Web Site show praying times,Holy Quran (Sound & Text)
              ,Azkar , etc ."
        technologies=" Html, Css, Js, Dom Manipulation, and Http Request ."
        href="https://ahmed-kotb621.github.io/Muslim/index.html"
      />
      <Project
        image={wildOasis}
        description="A hotel management web application,Authonication,Authorization,Dark Mode,supabase database."
        technologies="React.js, SupaBase, React Query,Styled Components, Custom Hooks,etc."
        href="https://wild-oasis-hotels.netlify.app/login"
      />

      <Project
        image={card}
        description="Personal information and communication card."
        technologies="Html5, css3"
      />
      <Project
        image={sneakers}
        description="E-Commerce Single Page Applications (SPA) designed for shopping experience,cart and wish list "
        technologies="React.js,Redux ToolKit, Tailwind Css, React Query, css Modules."
        href="https://sneakers-e.netlify.app/"
      />
      <Project
        image={wise}
        description="web application which track your travel, using leaflet map ,and Authonication"
        technologies="React.js, Vite, React Router, Context Api, useCallback, useMemo, etc."
        href="https://github.com/Ahmed-kotb621/World-Wise"
      />
    </section>
  );
}

export default Work;
