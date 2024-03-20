import Info from "./Info";
import PersonalImage from "./PersonalImage";
import Social from "./Social";

function Home() {
  return (
    <div
      className="mt-[7rem] grid grid-cols-3 gap-2"
      style={{ gridTemplateColumns: "1fr 4fr 2fr" }}
    >
      <Social />
      <Info />
      <PersonalImage />
    </div>
  );
}

export default Home;
