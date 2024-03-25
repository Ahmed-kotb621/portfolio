import Address from "../features/Contacts/Address";
import ContactForm from "../features/Contacts/ContactForm";
import Heading from "../ui/Heading";
function Contacts() {
  return (
    <section
      id="contact"
      className="min-h-[100vh] text-white p-5 flex flex-col justify-center items-center gap-10"
    >
      <Heading title="Contact Me" />
      <div className="flex flex-col md:flex-row md:gap-[8rem] justify-center items-center mt-10 h-fit">
        <Address />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contacts;
