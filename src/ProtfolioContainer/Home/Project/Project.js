import { ProjectWidget } from "../../Common/ProjectWidget/ProjectWidget";
import "./Project.scss";

export const Project = () => {
  return (
    <section className="Project p-3 p-lg-5">
      <div className="container">
      <h2 className="section-title font-weight-bold mb-5">Project</h2>
      <ProjectWidget />
      </div>
    </section>
  );
};
