import PageSection from "../../Common/Page/PageSection";
import { SkillWidget } from "../../Common/SkillWidget/SkillWidget";
import overviewData from "../../../Data/overview.json"
import { Link } from "react-router-dom";

export const Overview = () => {
  const skillSet = overviewData.skillSet;
  return (
    <PageSection
      className={"overview"}
      body={
        <>
          <div className="container">
            <h2 className="section-title">What I do</h2>
            <div className="section-intro mb-5">
              {overviewData.whatIDo.description}
              {overviewData?.whatIDo?.links?.map((link, index) => (
                <>
                  <Link key={index} className="text-link" to={link.link}>
                    {link?.linkName}
                  </Link>{" "}
                </>
              ))}
              .
            </div>
            <div className="row">
              {skillSet.map((skill, index) => (
                <SkillWidget
                  key={index}
                  id={skill.title}
                  iconList={skill.iconList}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
          <hr />
        </>
      }
    ></PageSection>
  );
};