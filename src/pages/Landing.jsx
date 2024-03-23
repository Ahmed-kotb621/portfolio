import GoHome from "../features/Landing/GoHome";
import Header from "../components/Header";
import styles from "../components/navItem.module.css";
import Home from "../features/Landing/Home";
import Resume from "../features/Landing/Resume";

function Landing() {
  return (
    <section
      className={`min-h-[100dvh] p-4 ${styles.mainBackground} flex flex-col justify-around`}
      id="home"
    >
      <Header />
      <GoHome />
      <Home />
      <Resume />
    </section>
  );
}

export default Landing;
