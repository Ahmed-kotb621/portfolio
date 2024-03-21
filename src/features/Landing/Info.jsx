import styles from "./gradient.module.css";
function Info() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white w-[100%] h-1[100%]">
      <h2 className="text-7xl">Welcome,&nbsp; My name is</h2>
      <h1 className={`${styles.gradientText}`}>Ahmed Kotb</h1>
      <h1 className=" text-7xl"> Front-End Developer</h1>
    </div>
  );
}

export default Info;
