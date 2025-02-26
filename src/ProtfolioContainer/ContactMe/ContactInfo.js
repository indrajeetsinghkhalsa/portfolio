import IconComponent from "../../configuration/icon-mapping";
import contactMe from "../../Data/contactMe/contactMe.json";

export const ContactInfo = () => {
  return (
    <section className="contact-section theme-bg-light py-5">
      <div className="container text-center single-col-max-width">
        <h2 className="heading">Contact</h2>
        <div className="intro">
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{" "}
            <a className="text-link" href="mailto:#">
              indrajeetsinghkhalsa3@gmailcom
            </a>
          </p>
          <p>Want to get connected? Follow me on the social channels below.</p>
          {/* social list */}
          <ul className="list-inline mb-0">
            {contactMe?.socialMediaDetails &&
              contactMe?.socialMediaDetails?.map((socialMedia, index) => {
                return (
                  <li className="list-inline-item mb-3" id={index}>
                    <a
                      href={socialMedia.link}
                      target={socialMedia.target}
                      rel="noopener noreferrer"
                    >
                      <IconComponent icon={socialMedia.icon.id}
                        height={socialMedia.icon.height}
                        width={socialMedia.icon.width}
                        color={socialMedia.icon.color}
                      />
                    </a>
                  </li>
                );
              }
              )
            }
          </ul>
        </div>
      </div>
    </section>
  );
};
