import "./TestimonialWidget.scss";
import smilingGif from "../../../assests/smiling-facea.gif";
import IconComponent from "../../../configuration/icon-mapping";

export const TestimonialWidget = ({ imagepath, message, name, designation }) => {
  return (
    <div className="custom-crousel" id="tns1-item3">
      <div className="item-inner">
        <div className="quote-holder">
          <blockquote className="quote-content">{message}</blockquote>
          <IconComponent icon="cote-icon" />
        </div>
        <div className="source-holder">
          <div className="source-profile">
            <img src={imagepath ? imagepath : smilingGif} alt={name} />
          </div>
          <div className="meta">
            <div className="name">{name}</div>
            <div className="info">{designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
