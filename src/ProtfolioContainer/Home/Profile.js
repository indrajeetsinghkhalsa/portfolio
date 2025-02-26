import "./Profile.scss";
import "bootstrap/js/src/collapse.js";
import { AboutMe } from "./AboutMe/AboutMe";
import { Overview } from "./Overview/Overview";
import { TestimonialCarousel } from "./TestimonialCrousel/TestimonialCarousel";
import { ProjectCards } from "../Project/ProjectCards";
import PortfolioModal from "../Common/Modal/PortfolioModal";
import { useState } from "react";
import ProjectDetails from "../Project/ProjectDetail";
import ProjectList from "../../Data/projectDetails/ProjectDetails.json";

function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [ProjectModalData, setProjectModalData] = useState({});
  const projectToggleModal = (projectId) => {
    setProjectModalData(ProjectList.filter(project => project.projectId === projectId));
    setOpenModal(!openModal)
  }
  return (
    <div className="content-section Profile">
      <AboutMe />
      <Overview />
      <TestimonialCarousel />
      <section className="Project p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">Project</h2>
          <ProjectCards onClickFunction={projectToggleModal} numberOfCards={4} />
        </div>
      </section>
      {openModal && (
        <PortfolioModal
          modalCloseAction={projectToggleModal}
          onClickFunction={projectToggleModal}
          modalBody={
            <ProjectDetails
              project={ProjectModalData[0]}
            />
          }
        />
      )}
    </div>
  );
}

export default Profile;
