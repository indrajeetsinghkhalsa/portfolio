import "./PageHeader.scss";

const PageHeader = (props) => {
  return (
    <section
      className={`page-header ${props.className} p-3 p-lg-5 theme-bg-ligh`}
    >
      {props.Header ? (
        props.Header
      ) : (
        <div className="default-page-header">Default Header</div>
      )}
    </section>
  );
};

export default PageHeader;
