import styles from "./gradient.module.css";
function Info() {
  return (
    <div className="mt-8 md:mt-0 flex flex-col items-center justify-center text-center text-white w-[100%] h-1[100%]">
      <h2 className="text-4xl md:text-5xl text-nowrap lg:text-7xl mb-3 md:mb-0">
        Welcome,&nbsp; My name is
      </h2>
      <h1 className={`${styles.gradientText}`}>Ahmed Kotb</h1>
      <h1 className="text-4xl md:text-5xl lg:text-7xl mt-3 md:mt-0">
        {" "}
        Front-End Developer
      </h1>
    </div>
  );
}

export default Info;
