import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_m63hmdg",
        "template_pn9sx6f",
        form.current,
        "n_uNdIUYkOH5Gxtyg"
      );
      toast.success("Message Sent Successfully");
    } catch (error) {
      toast.error("Failed To Send Message !");
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("from_name", {
              required: "This Field is required.",
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "Invalid Name",
              },
            })}
          />
          {errors.from_name && (
            <p className=" text-red-600 font-thin ">
              {errors.from_name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="email address..."
            disabled={isSubmitting}
            className="p-2 border-[1px] placeholder:text-gray-500 font-thin rounded-lg bg-transparent border-[#ffddb7]"
            {...register("user_email", {
              required: "This Field is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide a vaild Email",
              },
            })}
          />
          {errors.user_email && (
            <p className=" text-red-600 font-thin ">
              {errors.user_email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="your message..."
            disabled={isSubmitting}
            {...register("message", { required: "This Field is required." })}
            style={{ resize: "none" }}
          />
          {errors.user_email && (
            <p className=" text-red-600 font-thin ">
              {errors.user_email.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-full hover:scale-110 duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"} <FiSend />{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
