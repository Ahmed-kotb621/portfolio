import { useEffect, useState } from "react";
import Info from "./Info";
import PersonalImage from "./PersonalImage";
import Social from "./Social";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup Event
  }, []);

  return (
    <div
      className="mt-[7rem] md:grid md:grid-cols-3 gap-2 flex flex-col"
      style={{ gridTemplateColumns: "1fr 4fr 2fr" }}
    >
      {" "}
      {isMobile ? (
        <>
          <Info />
          <PersonalImage />
          <Social />
        </>
      ) : (
        <>
          <Social />
          <Info />
          <PersonalImage />
        </>
      )}
    </div>
  );
}

export default Home;
