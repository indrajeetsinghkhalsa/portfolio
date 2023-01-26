import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import "./ContactMe.scss"

export const ContactMe = () => {
  return (
    <div className="contactMe">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
