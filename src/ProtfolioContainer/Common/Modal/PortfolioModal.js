import IconComponent from "../../../configuration/icon-mapping";
import ButtonComponent from "../Button/ButtonComponent";
import PageSection from "../Page/PageSection";
import "./PortfolioModal.scss";

const PortfolioModal = (props) => {
  if (props.backgroundScroll) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <PageSection
      className="portfolio-modal"
      body={
        <>
        {/*to controle the modal close click outside the modal */}
        <div className="overlay" onClick={props.modalCloseAction}></div>
        <div className="modal-content">
          <ButtonComponent
            className="modal-close"
            onClickFunction={props.modalCloseAction}
            imageIcon={<IconComponent  icon={"cross-icon"} height={"50px"} width={"50px"} color={"black"}/>}
          />
          {props.modalHeader && <div className="modal-header">{props.modalHeader}</div>}
          {props?.modalBody && <div className="modal-body">{props.modalBody}</div>}
          {props.modalPage && props.modalPage}
        </div>
        </>
      }
    />
  );
};

export default PortfolioModal;
