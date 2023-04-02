import { ProjectWidget } from "../Common/ProjectWidget/ProjectWidget";
import image from "../../assests/unnamed.webp";

export const ProjectCards = () => {
  const projectList = [
    {
      header:"Project Heading",
      body:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
      footer:"Client: Google",
      imageIcon: image
    }
  ]
  return (
      <ProjectWidget projectList={projectList} />
  );
};
