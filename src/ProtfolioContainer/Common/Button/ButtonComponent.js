const ButtonComponent = (props) => {
  return (
    <button
      className={`btn btn-primary ${props.className && props.className} me-2 mb-3`}
      disable={props.disable}
      onClick={props.onClickFunction}
    >
      {props.imageIcon}
      <span className="d-none d-md-inline">{props.lableNone && props.lableNone+" "}</span>
      {props.lable}
    </button>
  );
};

export default ButtonComponent;
