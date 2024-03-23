import image1 from "../../assets/projects/muslim/muslim1.PNG";
import image2 from "../../assets/projects/muslim/muslim2.PNG";
import image3 from "../../assets/projects/muslim/muslim3.PNG";
function Project() {
  return (
    <div className="w-[70%] md:w-[50%] lg:w-[30%] mx-auto mt-[100px]  bg-gradient-to-b from-[#086fff] to-[#ffddb7] p-2 rounded-[20px]">
      <div className="flex gap-1 h-[300px] overflow-hidden rounded-2xl">
        <img src={image1} className=" h-[100%] w-[100%]" />
      </div>
      <div>
        <div>
          <h2>
            Description : Muslim Web Site show praying times,Holy Quran (Sound &
            Text) ,Azkar , etc
          </h2>
          <h2>
            Technologies : Html, Css, Js, Dom Manipulation, and Http Request{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Project;
