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
            <div class="row g-4 g-lg-5">
              <div class="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img
                  class="project-thumb img-fluid rounded"
                  src={project?.metaData?.clientSectionImage}
                  alt="projectImage"
                />
              </div>
              <div class="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div class="client-info">
                  <h3 class="client-name font-weight-bold mb-4">
                    {project?.metaData?.clientName}
                  </h3>
                  <ul class="client-meta list-unstyled">
                    {project.metaData.industry && (
                      <li class="mb-2">
                        <Industry />
                        <strong>Industry:</strong> {project.metaData.industry}
                      </li>
                    )}
                    {project.metaData.size && (
                      <li class="mb-2">
                        <PeopleSize />
                        <strong>Size:</strong> {project.metaData.size}
                      </li>
                    )}
                    {project.metaData.website && (
                      <li class="mb-2">
                        <strong>
                          <LinkIcon />
                        </strong>{" "}
                        <a class="theme-link" href={project.metaData.website}>
                          {project?.metaData?.clientName}
                        </a>
                      </li>
                    )}
                  </ul>
                  {project.metaData.clientBio && (
                    <div class="client-bio mb-4">
                      {project.metaData.clientBio}
                    </div>
                  )}
                  {project?.metaData?.requirement?.length > 0 && (
                    <>
                      <h4 class="subheading mb-3">Project Requirements</h4>
                      <ul class="mb-0">
                        {project.metaData.requirement.map((data) => (
                          <li class="mb-2">{data}</li>
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
                <div class="project-section mb-5">
                  <h3 class="project-section-title">{details.subTitle}</h3>
                  <p>{details.beforImage}</p>
                  {details.images?.length > 0 && (
                    <div class="row mt-5">
                      {details.images.map((img) => (
                        <div class="col-12 col-lg-6 mb-5">
                          <img
                            class="img-fluid rounded"
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
                <div class="project-section mb-5">
                  <h3 class="project-section-title">{details.subTitle}</h3>
                  <p>{details.description}</p>
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
