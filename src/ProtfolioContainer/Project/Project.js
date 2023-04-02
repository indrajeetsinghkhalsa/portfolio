import ButtonComponent from "../Common/Button/ButtonComponent";
import PageHeader from "../Common/Page/PageHeader";
import { ReactComponent as HierMe } from "../../assests/hierMe.svg";
import { useNavigate } from "react-router";
import "./Project.scss";
import PageSection from "../Common/Page/PageSection";
import { ProjectCards } from "./ProjectCards";

const PorjectHeader = () => {
    const navigate = useNavigate();
  return (
    <>
      <h2 className="heading mb-3">Portfolio</h2>
      <div className="intro">
        <p>
          Welcome to my online portfolio.
          Here you can find all the project details and Technologies which I have to used to solve the problem.
          Want some help building your software?
        </p>
      </div>
      <ButtonComponent
        className="project-header-button"
        imageIcon={<HierMe height="16px" />}
        lable={"Hier Me"}
        onClickFunction={() => navigate("/ContactMe")}
      />
    </>
  );
};

const Project = () => {
  return (
    <div className="content-section project">
      <PageHeader className="project-header text-center single-col-max-width" Header={<PorjectHeader />}/>
      <PageSection className="project-container"
        body={
            <ProjectCards/>
        }
      />
    </div>
  );
};

export default Project;
