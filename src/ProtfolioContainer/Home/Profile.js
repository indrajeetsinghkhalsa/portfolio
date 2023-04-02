import "./Profile.scss";
import "bootstrap/js/src/collapse.js";
import { AboutMe } from "./AboutMe/AboutMe";
import { Overview } from "./Overview/Overview";
import { TestimonialCrousel } from "./TestimonialCrousel/TestimonialCrousel";
import { Project } from "./Project/Project";

function Profile() {
  return (
    <div className="content-section Profile">
      <AboutMe />
      <Overview />
      <TestimonialCrousel />
      <Project />
    </div>
  );
}

export default Profile;
