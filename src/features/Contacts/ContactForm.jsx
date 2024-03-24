import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
function ContactForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=" min-w-[300px] max-w-[400px] p-3 flex-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="your name..."
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("name", { required: "This Field is required." })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email address..."
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("email", { required: "This Field is required." })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="your message..."
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("message", { required: "This Field is required." })}
            style={{ resize: "none" }}
          />
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-full hover:scale-110 duration-300"
          >
            Send Message <FiSend />{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
