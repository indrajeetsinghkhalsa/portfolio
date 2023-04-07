import { ProjectWidget } from "../Common/ProjectWidget/ProjectWidget";
import projectList from "../../Data/projectDetails/ProjectDetails.json";

export const ProjectCards = ({
  enablePop = false,
  onClickFunction = () => {},
  numberOfCards=0,
}) => {
  return (
    <ProjectWidget
      projectList={projectList}
      numberOfWidget={numberOfCards}
      onClickFunction={onClickFunction}
    />
  );
};
