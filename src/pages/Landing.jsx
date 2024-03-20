import GoHome from "../features/Landing/GoHome";
import Header from "../components/Header";
import styles from "../components/navItem.module.css";
import Home from "../features/Landing/Home";
function Landing() {
  return (
    <section className={`h-[100dvh] p-4 ${styles.mainBackground}`} id="home">
      <Header />
      <GoHome />
      <Home />
    </section>
  );
}

export default Landing;
