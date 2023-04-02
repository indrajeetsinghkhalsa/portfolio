const ButtonComponent = (props) => {
  return (
    <button
      className={`btn btn-primary ${props.className} me-2 mb-3`}
      disable={props.disable}
      onClick={props.onClickFunction}
    >
      {props.imageIcon}
      <span className="d-none d-md-inline">{props.lable ? props.lable : "Default Button"}</span>
    </button>
  );
};

export default ButtonComponent;
