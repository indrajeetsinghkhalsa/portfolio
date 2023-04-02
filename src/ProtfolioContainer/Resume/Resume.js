import ButtonComponent from "../Common/Button/ButtonComponent";
import PageHeader from "../Common/Page/PageHeader";
import { ReactComponent as Pdf } from "../../assests/pdf.svg";
import PageSection from "../Common/Page/PageSection";
import { ReactComponent as Phone } from "../../assests/phone.svg";
import { ReactComponent as Email } from "../../assests/message.svg";
import { ReactComponent as Location } from "../../assests/location.svg";
import { ReactComponent as LinkedIn } from "../../assests/linkedIn.svg";
import { ReactComponent as Github } from "../../assests/github.svg";
import profilePic from "../../assests/unnamed.webp";

import workData from "../../Data/Resume/WorkExperiences.json";
import projectDataFile from "../../Data/Resume/ProjectData.json";
import skillData from "../../Data/Resume/Skills.json";
import education from "../../Data/Resume/Education.json";
import awards from "../../Data/Resume/Awards.json";
import languages from "../../Data/Resume/Languages.json";

import "./Resume.scss";
import InfoItemWidget from "../Common/infoItemWidget/InfroItemWidget";

//import for pdf generator
/* ES6 */
import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";

const GetPageHeader = () => {
  const generatePdf = () => {
    htmlToImage
      .toPng(document.getElementById("resume-wrapper"), { quality: 0.95 })
      .then(function (dataUrl) {
        var imgData = dataUrl;
        var imgWidth = 210;
        var pageHeight = 295;
        var doc = new jsPDF("p", "mm", "a4");
        const imgProps = doc.getImageProperties(dataUrl);
        var imgHeight = (imgProps.height * imgWidth) / imgProps.width;
        var heightLeft = imgHeight;

        var position = 0; // give some top padding to first page

        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight + 15);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight; // top padding for other pages
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight + 15);
          heightLeft -= pageHeight;
        }
        doc.save("file.pdf");
      });
  };
  return (
    <>
      <h2 className="heading mb-3">Online Resume</h2>
      <ButtonComponent
        className="download-resume-button"
        imageIcon={<Pdf height="16px" />}
        lable={"Download PDF"}
        onClickFunction={generatePdf}
      />
    </>
  );
};

const ResumePageHeader = () => {
  return (
    <>
      <div className="resume-container-header">
        <div className="row align-items-center">
          <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
            <h2 className={"resume-name text-uppercase"}>
              {" "}
              INDRJAEET SINGH BADGUJAR
            </h2>
            <p className="resume-tagline mb-3 mb-md-0"> Software Developer</p>
          </div>
          <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Phone color={"#4f4f4f"} height="16px" />
                <a className="resume-link" href="tel:#">
                  (+91) 7875 3469 48
                </a>
              </li>
              <li className="mb-2">
                <Email color={"#4f4f4f"} height="16px" />
                <a className="resume-link" href="mailto:indrajeetsinghkhalsa3@gmail.com">
                  indrajeetsingkhalsa3@gmail.com
                </a>
              </li>
              <li className="mb-0">
                <Location color={"#4f4f4f"} height="16px" />
                Nashik Road
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
};

const ResumeIntro = () => {
  return (
    <>
      <div className="resume-intro py-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 col-xl-2 text-center">
            <img
              className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded-circle mx-auto"
              src={profilePic}
              alt="Indrajeet Singh"
            />
          </div>
          <div className="col text-start">
            <p className="col text-start">
              Professional software engineer with 1.5 years of experience of
              developing innovative technical solutions which included
              requirement gathering, technical design documentation,
              development, unit testing and post production go live support
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
};

const ResumeBody = () => {
  return (
    <div className="resume-body">
      <div className="row">
        <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
          <section className="work-section py-3">
            <InfoItemWidget
              dataList={workData[0].data}
              title={workData[0].title}
            />
          </section>
          <section className="project-section py-3">
            <InfoItemWidget
              dataList={projectDataFile[0].data}
              title={projectDataFile[0].title}
            />
          </section>
        </div>
        <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
          <section className="skills-section py-3">
            <InfoItemWidget
              className={"skills"}
              dataList={skillData[0].data}
              title={skillData[0].title}
            />
          </section>
          <section className="education-section py-3">
            <InfoItemWidget
              className={"education"}
              dataList={education[0].data}
              title={education[0].title}
              styleList={false}
            />
          </section>
          <section className="awards-section py-3">
            <InfoItemWidget
              className={"awards"}
              dataList={awards[0].data}
              title={awards[0].title}
              styleList={false}
            />
          </section>
          <section className="awards-section py-3">
            <InfoItemWidget
              LANGUAGES
              className={"languages"}
              dataList={languages[0].data}
              title={languages[0].title}
              styleList={false}
            />
          </section>
        </aside>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

const ResumeFooter = () => {
  return (
    <section className="resume-footer text-center">
      <ul class="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
        <li class="list-inline-item mb-lg-0 me-3">
          <a
            class="resume-link"
            href="https://github.com/indrajeetsinghkhalsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="me-2" color={"#767676"} height="24px" />
            <span class="d-none d-lg-inline-block text-muted">
            indrajeetsinghkhalsa
            </span>
          </a>
        </li>
        <li class="list-inline-item mb-lg-0 me-3">
          <a
            class="resume-link"
            href="https://www.linkedin.com/in/indrajeet-singh-khalsa-999166141/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="me-2" color={"#767676"} height="24px" />
            <span class="d-none d-lg-inline-block text-muted">
              indrajeet-singh-khalsa
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

const Resume = () => {
  return (
    <div className="content-section resume">
      <PageHeader
        className="resume-header text-center single-col-max-width"
        Header={<GetPageHeader/>}
      />
      <PageSection
        className="resume-container"
        body={
          <div
            id={"resume-wrapper"}
            className={"resume-wrapper mx-auto theme-bg-light p-5 shadow-lg"}
          >
            <ResumePageHeader />
            <ResumeIntro />
            <ResumeBody />
            <ResumeFooter />
          </div>
        }
      ></PageSection>
    </div>
  );
};

export default Resume;
