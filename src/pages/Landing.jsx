import GoHome from "../components/GoHome";
import Header from "../components/Header";

function Landing() {
  return (
    <section className="bg-black h-[100dvh]" id="home">
      <Header />
      <GoHome />
    </section>
  );
}

export default Landing;
