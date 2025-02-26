import "./SkillWidget.scss";
import IconComponent from "../../../configuration/icon-mapping";

export const SkillWidget = ({iconList, title, description, className }) => {
  return (
    <div className="skill col-6 col-lg-3">
      <div className={`item-inner ${className === undefined ? "" : className}`}>
        <div className="item-icon">
          {iconList && iconList?.map((icon, index) => {
            return <IconComponent key={index} icon={icon?.id} height={icon?.height} width={icon?.width} color={icon?.color} />;
          })}
        </div>
        <h3 className="item-title">{title}</h3>
        <div className="item-description">{description}</div>
      </div>
    </div>
  );
};
