import "./ProjectDetails.scss";
import { ReactComponent as Industry } from "../../assests/projectDetails/industry.svg";
import { ReactComponent as PeopleSize } from "../../assests/projectDetails/peopleSize.svg";
import { ReactComponent as LinkIcon } from "../../assests/projectDetails/link.svg";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <section className="project-detail-header theme-bg-light py-5">
        <div className="container single-col-max-width"></div>
        <h2 className="heading text-center">{project?.projectTitle}</h2>
      </section>
      <section className="project-detail-body px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta-data theme-bg-light p-4">
            <div className="row g-4 g-lg-5">
              <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img
                  className="project-thumb img-fluid rounded"
                  src={project?.metaData?.projectImage}
                  alt="projectImage"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">
                    {project?.metaData?.clientName}
                  </h3>
                  <ul className="client-meta list-unstyled">
                    {project.metaData.industry && (
                      <li className="mb-2">
                        <Industry />
                        <strong>Industry:</strong> {project.metaData.industry}
                      </li>
                    )}
                    {project.metaData.size && (
                      <li className="mb-2">
                        <PeopleSize />
                        <strong>Size:</strong> {project.metaData.size}
                      </li>
                    )}
                    {project.metaData.website && (
                      <li className="mb-2">
                        <strong>
                          <LinkIcon />
                        </strong>{" "}
                        <a className="theme-link" href={project.metaData.website}>
                          {project?.metaData?.clientName}
                        </a>
                      </li>
                    )}
                  </ul>
                  {project.metaData.clientBio && (
                    <div className="client-bio mb-4">
                      {project.metaData.clientBio}
                    </div>
                  )}
                  {project?.metaData?.requirement?.length > 0 && (
                    <>
                      <h4 className="subheading mb-3">Project Requirements</h4>
                      <ul className="mb-0">
                        {project.metaData.requirement.map((data) => (
                          <li className="mb-2">{data}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {project.projectDetails?.length > 0 && (
          <div className="project-section py-5">
            {project.projectDetails.map((details) =>
              details.showInBetweenImage ? (
                <div className="project-section mb-5">
                  <h3 className="project-section-title">{details.subTitle}</h3>
                  <p>{details.beforeImage}</p>
                  {details.images?.length > 0 && (
                    <div className="row mt-5">
                      {details.images.map((img) => (
                        <div className="col-12 col-lg-6 mb-5">
                          <img
                            className="img-fluid rounded"
                            src={img}
                            alt="image"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <p>{details.afterImage}</p>
                </div>
              ) : (
                <div className="project-section mb-5">
                  <h3 className="project-section-title">{details.subTitle}</h3>
                  <p>{details.description}</p>
                  <p>{details.afterImage}</p>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectDetails;
