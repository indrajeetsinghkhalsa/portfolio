import "./Profile.scss";
import "bootstrap/js/src/collapse.js";
import { AboutMe } from "./AboutMe/AboutMe";
import { Overview } from "./Overview/Overview";
import { TestimonialCrousel } from "./TestimonialCrousel/TestimonialCrousel";
import { ProjectCards } from "../Project/ProjectCards";

function Profile() {
  return (
    <div className="content-section Profile">
      <AboutMe />
      <Overview />
      <TestimonialCrousel />
      <section className="Project p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">Project</h2>
          <ProjectCards />
        </div>
      </section>
    </div>
  );
}

export default Profile;
