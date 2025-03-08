import ButtonComponent from "../Common/Button/ButtonComponent";
import PageHeader from "../Common/Page/PageHeader";
import { useNavigate } from "react-router";
import "./Project.scss";
import PageSection from "../Common/Page/PageSection";
import { ProjectCards } from "./ProjectCards";
import PortfolioModal from "../Common/Modal/PortfolioModal";
import ProjectDetails from "./ProjectDetail";
import { useState } from "react";
import ProjectList from "../../Data/projectDetails/ProjectDetails.json";
import IconComponent from "../../configuration/icon-mapping";

const PorjectHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="heading mb-3">Portfolio</h2>
      <div className="intro">
        <p>
          Welcome to my online portfolio.
          Here you can find all the project details and Technologies which I have used to solve the problem.
          Want some help building your software?
        </p>
      </div>
      <ButtonComponent
        className="project-header-button"
        imageIcon={<IconComponent icon="hireMe-icon" height="16px" />}
        lable={"Hier Me"}
        onClickFunction={() => navigate("/ContactMe")}
      />
    </>
  );
};

const Project = () => {
  const [openModal, setOpenModal] = useState(false);
  const [ProjectModalData, setProjectModalData] = useState({});
  const projectToggleModal = (projectId) => {
    setProjectModalData(ProjectList.filter(project => project.projectId === projectId));
    setOpenModal(!openModal)
  }

  return (
    <div className="content-section project">
      <PageHeader className="project-header text-center single-col-max-width" Header={<PorjectHeader />} />
      <PageSection className="project-container"
        body={
          <ProjectCards onClickFunction={projectToggleModal} />
        }
      />
      {openModal && (
        <PortfolioModal modalCloseAction={projectToggleModal} onClickFunction={projectToggleModal} modalBody={<ProjectDetails project={ProjectModalData[0]} />} />
      )}
    </div>
  );
};

export default Project;
