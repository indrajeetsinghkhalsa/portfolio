import "./InfoItemWidget.scss";
const InfoItemWidget = ({ title, dataList, className, styleList = true }) => {
  return (
    <div className={`item-section ${className && className}`}>
      <h3 className={`text-uppercase item-section-heading ${dataList[0].subTitle ? "mb-4" : "mb-0" }`}>{title}</h3>
      {dataList &&
        dataList.map((data) => (
          <div className="item mb-3">
            <div className="item-heading row align-items-center mb-2">
             {data.subTitle && <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                {data.subTitle}
              </h4>}
              <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                {data.tag}
              </div>
            </div>
            <div className="item-content">
              <p>{data.description}</p>
              {data.featurePoints && (
                <ul className={`${!styleList && "list-unstyled"} resume-list`}>
                  {data.featurePoints.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default InfoItemWidget;
