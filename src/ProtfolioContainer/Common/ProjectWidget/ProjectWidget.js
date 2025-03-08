import { useState } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import "./ProjectWidget.scss";
import IconComponent from "../../../configuration/icon-mapping";

export const ProjectWidget = ({
  projectList,
  onClickFunction = () => {},
  numberOfWidget = 0,
}) => {

  const viewDetails = (projectId) => {
    onClickFunction(projectId);
  }

  if (!projectList) return <></>;

  const tempProjectList =
    numberOfWidget === 0
      ? projectList
      : projectList.slice(0,numberOfWidget);

  return (
    <div className="row">
      {tempProjectList.map((project, index) => (
        <div className="col-md-6 mb-5" key={index}>
          <div className="card project-card">
            <div className="row">
              <div className="col-12 col-xl-5 card-img-holder">
                <img src={project?.clientSectionImage} />
              </div>
              <div className="col-12 col-xl-7">
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#" className="theme-link">
                      {project?.projectTitle}
                    </a>
                  </h5>
                  <p className="card-text">{project?.description}</p>
                  <p className="card-text">
                    {project.metaData.clientName && <small className="text-muted">Client: {project.metaData.clientName}</small>}
                  </p>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <ButtonComponent
                    className="btn-secondary"
                    lable="View Case Study"
                    imageIcon={<IconComponent icon="view-icon" />}
                    onClickFunction={() => viewDetails(project.projectId)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
