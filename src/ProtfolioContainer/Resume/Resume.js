import ButtonComponent from "../Common/Button/ButtonComponent";
import PageHeader from "../Common/Page/PageHeader";
import { ReactComponent as Pdf } from "../../assests/pdf.svg";
import PageSection from "../Common/Page/PageSection";


import "./Resume.scss";
import InfoItemWidget from "../Common/infoItemWidget/InfroItemWidget";
import IconComponent from "../../configuration/icon-mapping";

import resumeData from "../../Data/Resume/Resume.json";

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
  const header = resumeData?.header;
  return (
    <>
      <div className="resume-container-header">
        <div className="row align-items-center">
          <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
            <h2 className={"resume-name text-uppercase"}>
              {" "}
              {header.name}
            </h2>
            <p className="resume-tagline mb-3 mb-md-0"> {header.designation}</p>
          </div>
          <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
            <ul className="list-unstyled mb-0">
              {header?.contactDetails?.map((contact, index) => {
                return (
                  <li className="mb-2" id={index}>
                    <IconComponent icon={contact.icon.id} height={contact.icon.height} width={contact.icon.width} color={contact.icon.color} />
                    {
                      contact.isCLickable ?
                        <a className="resume-link" href={contact.link}> {contact.displayName} </a>
                        :
                        contact.displayName
                    }
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
};

const ResumeIntro = () => {
  const introductionDetails = resumeData?.header?.introductionDetails;
  return (
    <>
      <div className="resume-intro py-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 col-xl-2 text-center">
            <img
              crossOrigin="anonymous"
              className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded-circle mx-auto"
              src={introductionDetails.profilePicture}
              alt="Indrajeet Singh"
            />
          </div>
          <div className="col text-start">
            <p className="col text-start">
              {introductionDetails.introduction}
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
};

const ResumeBody = () => {
  const body = resumeData?.body;
  const leftSection = body?.leftSection;
  const rightSection = body?.rightSection;
  return (
    <div className="resume-body">
      <div className="row">
        {/* left Section */}
        {
          leftSection && leftSection.length > 0 && (
            <div className={`resume-main col-12  ${rightSection && rightSection?.length > 0 ? 'col-lg-8 col-xl-9' : 'col-lg-12 col-xl-12'} pe-0 pe-lg-5`}>
              {
                leftSection.map((sectionDetails) => {
                  return (

                    <section className="py-3" id={sectionDetails.id}>
                      <InfoItemWidget
                        className={sectionDetails.id}
                        dataList={sectionDetails.data}
                        title={sectionDetails.title}
                      />
                    </section>
                  )
                })
              }
            </div>
          )
        }
        {/* right section */}
        {
          rightSection && rightSection?.length > 0 && (
            <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
              {
                rightSection.map((sectionDetails) => {
                  return (
                    <section className="py-3" id={sectionDetails.id}>
                      <InfoItemWidget
                        className={sectionDetails.id}
                        dataList={sectionDetails.data}
                        title={sectionDetails.title}
                      />
                    </section>
                  )
                }
                )
              }
            </aside>
          )
        }
      </div>
      <hr className="mt-4" />
    </div>
  );
};

const ResumeFooter = () => {
  const footer = resumeData?.footer;
  return (
    <section className="resume-footer text-center">
      <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
        {footer?.icons && footer.icons.map((iconDetails) => {
          return (
            <li className="list-inline-item mb-lg-0 me-3">
              <a
                className="resume-link"
                href={iconDetails.link}
                target={iconDetails.target}
                rel="noopener noreferrer"
              >
                <IconComponent className="me-2" icon={iconDetails.icon.id} height={iconDetails.icon.height} width={iconDetails.icon.width} color={iconDetails.icon.color} />
                <span className="d-none d-lg-inline-block text-muted">
                  {iconDetails.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Resume = () => {
  return (
    <div className="content-section resume">
      <PageHeader
        className="resume-header text-center single-col-max-width"
        Header={<GetPageHeader />}
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
