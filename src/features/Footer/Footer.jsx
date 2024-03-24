import Social from "../Landing/Social";
import TextGredient from "../../ui/TextGredient";
function Footer() {
  return (
    <div className="flex flex-col md:flex-row border-t-2 border-[#292727] p-5 items-center justify-center gap-3 md:gap-10">
      <div className="flex text-nowrap items-center gap-5">
        <p className="text-gray-500 font-light">Follow Me </p>
        <Social footer="1" />
      </div>
      <div className="text-white flex text-nowrap items-center">
        <span className="text-3xl mt-3 mr-1">&copy;</span>
        {new Date().getFullYear()}
        &nbsp;
        <TextGredient text="Ahmed Sayed Kotb" />
      </div>
    </div>
  );
}

export default Footer;
