import PageSection from "../../Common/Page/PageSection";
import { SkillWidget } from "../../Common/SkillWidget/SkillWidget";
import {ReactComponent as JavaScriptIcon} from "../../../assests/languageLogo/javascript-svgrepo-com.svg"
import {ReactComponent as JavaIcon} from "../../../assests/languageLogo/java-svgrepo-com.svg"
import {ReactComponent as HtmlIcon} from "../../../assests/languageLogo/html-5-svgrepo-com.svg"
import {ReactComponent as CssIcon} from "../../../assests/languageLogo/css-3-svgrepo-com.svg"
import {ReactComponent as SpringBootIcon} from "../../../assests/languageLogo/springio-icon.svg"
import {ReactComponent as ReactJsIcon} from "../../../assests/languageLogo/reactjs-svgrepo-com.svg"
import {ReactComponent as GitIcon} from "../../../assests/languageLogo/git-svgrepo-com.svg"
import {ReactComponent as sqlIcon} from "../../../assests/languageLogo/sql-svgrepo-com.svg"
import {ReactComponent as KibanatIcon} from "../../../assests/languageLogo/kibana-svgrepo-com.svg"

export const Overview = () => {
  const skillSet = [
    {
      title: "Java And Java 8",
      description:
        "Having more then 1.5 year experince in this technology. Used for bakcned devleopement",
      iconList: [JavaIcon],
    },
    {
      title: "Java Script",
      description:
        "I have 6 month experience in this technology. Usually I used for Scripting when Creating webpage",
      iconList: [JavaScriptIcon],
    },
    {
      title: "HTML And Css",
      description:
        "Having more then 6 month experince in this technology. Used for Forntend devleopement",
      iconList: [HtmlIcon, CssIcon],
    },
    {
      title: "Sql",
      description: "Modrate level. Used for data storage",
      iconList: [sqlIcon],
    },
    {
      title: "Spring Boot",
      description: "Using for better performance and management",
      iconList: [SpringBootIcon],
    },
    {
      title: "Git",
      description: "Using for code management",
      iconList: [GitIcon],
    },
    {
      title: "React Js",
      description:
        "Having more then 6 month experince in this technology. Used for bakcned devleopement",
      iconList: [ReactJsIcon],
    },
    {
      title: "Kibana",
      description: "Tool used for reading log",
      iconList: [KibanatIcon],
    },
  ];
  return (
    <PageSection
      className={"overview"}
      body={
        <>
          <div className="container">
            <h2 className="section-title">What I do</h2>
            <div class="section-intro mb-5">
              I have more than 2 years' experience building software for
              clients. Below is a quick overview of my main technical skill sets
              and technologies I use. Want to find out more about my experience?
              Check out my{" "}
              <a class="text-link" href="#">
                online resume
              </a>{" "}
              and{" "}
              <a class="text-link" href="#">
                project portfolio
              </a>
              .
            </div>
            <div className="row">
              {skillSet.map((skill) => (
                <SkillWidget
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
