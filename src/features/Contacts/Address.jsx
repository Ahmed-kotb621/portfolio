import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
function Address() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-7 h-[100%]">
      <div className="flex items-center gap-3 h-fit w-fit">
        <IoLocationOutline className="text-3xl" />
        <p className=" italic text-gray-500">Cairo, Egypt</p>
      </div>
      <div className="flex items-center gap-3 h-fit  w-fit">
        <MdOutlineEmail className="text-3xl" />
        <p className=" italic text-gray-500">akotb621@gmail.com</p>
      </div>
    </div>
  );
}

export default Address;
