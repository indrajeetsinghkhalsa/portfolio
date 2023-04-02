import "./AboutMe.scss";
import profilePic from "../../../assests/unnamed.webp";
import PageHeader from "../../Common/Page/PageHeader";
import ButtonComponent from "../../Common/Button/ButtonComponent";
import { ReactComponent as ForwardArrow } from "../../../assests/forwardArrow.svg";
import { ReactComponent as Document } from "../../../assests/document.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const GetAboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="profile-teaser row">
        <div className="col">
          <h4 className="name ">Indrajeet Singh Badgujar</h4>
          <div className="tagline">Software Engineer</div>
          <div class="bio mb-4">
            I'm a software engineer work in frontend and backend development for
            complex scalable web apps. I write resuable code for software
            development. Want to know how I may help your project? Check out my
            project{" "}
            <a class="text-link" href="#">
              portfolio
            </a>{" "}
            and{" "}
            <Link className="text-link" to="/Resume">
              online resume
            </Link>
            .
          </div>
          <div class="mb-4">
            <ButtonComponent
              lable={"Portfolio"}
              onClickFunction={() => {}}
              imageIcon={<ForwardArrow />}
              lableNone={"View"}
            />
            <ButtonComponent
              className={"btn-secondary"}
              lable={"Resume"}
              onClickFunction={() => navigate("/Resume", { replace: true })}
              imageIcon={<Document />}
              lableNone={"View"}
            />
          </div>
        </div>

        <div class="col-md-5 col-lg-5">
          <img
            class="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
            src={profilePic}
            alt="Indrajeet Singh"
          />
        </div>
      </div>
    </div>
  );
};
export const AboutMe = () => {
  return <PageHeader className="about-me" Header={<GetAboutMe />} />;
};
