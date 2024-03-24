import TextGredient from "../../ui/TextGredient";

function Experience() {
  return (
    <div className="flex-1 ">
      <TextGredient text="Experience" size="50" />

      <div className="text-start leading-8">
        <div className="border-b-2 border-[#ffddb7] my-6 pb-3">
          <h2 className="text-lg">
            National Company for Roads (Military Service).
          </h2>
          <p className=" text-gray-500">SoftWare Engineer</p>
        </div>
        <p className="text-lg mb-2">
          Adding features and maintaining an existing android application that
          supports multiple operations :-
        </p>
        <ul className=" text-gray-500   list-disc ml-8">
          <li> Generating tickets for different kind of cars.</li>
          <li> Generating daily financial reports.</li>
          <li>
            {" "}
            Dealing with an API’s that are related to tracking devices (POS) at
            different locations.
          </li>
        </ul>
        <p>
          Tools and Concepts :{" "}
          <span className=" text-gray-500">
            Android , SQL Server, Java , Windows Server 2012.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Experience;
