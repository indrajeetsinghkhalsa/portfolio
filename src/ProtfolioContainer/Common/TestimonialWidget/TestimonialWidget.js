import "./TestimonialWidget.scss";
import smilingGif from "../../../assests/smiling-facea.gif";

export const TestimonialWidget = ({ imagepath, message, name, designation }) => {
  return (
    <div className="custom-crousel" id="tns1-item3">
      <div className="item-inner">
        <div className="quote-holder">
          <blockquote className="quote-content">{message}</blockquote>
          <svg
            className="svg-inline--fa fa-quote-left"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="quote-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"
            ></path>
          </svg>
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
