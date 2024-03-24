import TextGredient from "../../ui/TextGredient";

function Education() {
  return (
    <div className="flex-1 border-r-2 border-[#ffddb7] border-to-black">
      <TextGredient text="Education" size="50" />

      <div className="text-start my-6 pb-3 leading-8 border-b-2 border-[#ffddb7]">
        <h2 className="text-lg">
          Bachelor of Computer Science and Artificial Intelligence
        </h2>
        <p className=" text-gray-500">Grade: Very Good</p>
      </div>
      <div className="text-start my-6 pb-3 leading-8 border-b-2 border-[#ffddb7]">
        <h2 className="text-lg ">
          Udemy - The Ultimate React Course 2023 React, Redux & More
        </h2>
        <p className=" text-gray-500">Grade: Very Good</p>
      </div>
      <div className="text-start my-6 leading-8">
        <h2 className="text-lg">Front End Masters</h2>
        <p className="text-gray-500">Complete Intro to React, v8</p>
      </div>
    </div>
  );
}

export default Education;
