import PageSection from "../../Common/Page/PageSection";
import { SkillWidget } from "../../Common/SkillWidget/SkillWidget";

const Javascript = () => {
  return (
    <svg
      class="svg-inline--fa fa-js-square"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="js-square"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
      ></path>
    </svg>
  );
};

export const Overview = () => {
  const skillSet = [
    {
      title: "Java And Java 8",
      description:
        "Having more then 1.5 year experince in this technology. Used for bakcned devleopement",
      Icon: Javascript,
    },
    {
      title: "Java Script",
      description:
        "I have 6 month experience in this technology. Usually I used for Scripting when Creating webpage",
      Icon: Javascript,
    },
    {
      title: "HTML And Css",
      description:
        "Having more then 6 month experince in this technology. Used for Forntend devleopement",
      Icon: Javascript,
    },
    {
      title: "Sql",
      description: "Modrate level. Used for data storage",
      Icon: Javascript,
    },
    {
      title: "Spring Boot",
      description: "Using for better performance and management",
      Icon: Javascript,
    },
    {
      title: "Git",
      description: "Using for code management",
      Icon: Javascript,
    },
    {
      title: "React Js",
      description:
        "Having more then 6 month experince in this technology. Used for bakcned devleopement",
      Icon: Javascript,
    },
    {
      title: "Kibana",
      description: "Tool used for reading log",
      Icon: Javascript,
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
                  Icon={skill.Icon}
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
