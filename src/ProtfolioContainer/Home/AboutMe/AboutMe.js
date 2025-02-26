import "./AboutMe.scss";
import PageHeader from "../../Common/Page/PageHeader";
import ButtonComponent from "../../Common/Button/ButtonComponent";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import aboutData from "../../../Data/aboutMe.json"
import IconComponent from "../../../configuration/icon-mapping";

const GetAboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="profile-teaser row">
        <div className="col">
          <h4 className="name ">{aboutData.name}</h4>
          <div className="tagline">{aboutData.title}</div>
          <div className="bio mb-4">
            {aboutData.description}
            {aboutData?.links?.map((link, index) => (
              <Link key={index} className="text-link" to={link.link}>
                {link?.linkName}
              </Link>
            ))}
            .
          </div>
          <div className="mb-4">
            <ButtonComponent
              lable={"Portfolio"}
              onClickFunction={() => navigate("/Project", { replace: true })}
              imageIcon={<IconComponent icon={"forwardArrow-icon"} />}
              lableNone={"View"}
            />
            <ButtonComponent
              className={"btn-secondary"}
              lable={"Resume"}
              onClickFunction={() => navigate("/Resume", { replace: true })}
              imageIcon={<IconComponent icon={"document-icon"} />}
              lableNone={"View"}
            />
          </div>
        </div>

        <div className="col-md-5 col-lg-5">
          <img
            className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
            src={aboutData.profileImage}
            alt="portfolio-profile-name"
          />
        </div>
      </div>
    </div>
  );
};
export const AboutMe = () => {
  return <PageHeader className="about-me" Header={<GetAboutMe />} />;
};
