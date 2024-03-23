import styles from "./heading.module.css";
function Heading({ title }) {
  return (
    <div
      className={`${styles.heading} w-fit mx-auto text-center text-nowrap text-white text-4xl md:text-5xl lg:text-7xl my-6 block`}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default Heading;
