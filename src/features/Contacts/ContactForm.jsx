import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
function ContactForm() {
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const onSubmit = async () => {
    try {
      const response = await emailjs.sendForm(
        "service_m63hmdg",
        "template_pn9sx6f",
        form.current,
        "n_uNdIUYkOH5Gxtyg"
      );
      toast.success("Message Sent Successfully");
      console.log("SUCCESS!", response.status, response.text);
    } catch (error) {
      toast.error("Failed To Send Message !");
      console.error("FAILED...", error);
    }
  };
  return (
    <div className=" min-w-[350px] max-w-[400px] p-3">
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            type="text"
            name="from_name"
            placeholder="your name..."
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("from_name", { required: "This Field is required." })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="email address..."
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("user_email", { required: "This Field is required." })}
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
