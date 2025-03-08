import { Nav } from "react-bootstrap";
import "bootstrap/js/src/collapse.js";
import "./ResponsiveSideMenu.scss";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Common/Button/ButtonComponent";
import sideMenuData from "../../Data/sideMenu.json"
import IconComponent from '../../configuration/icon-mapping';

const ResponsiveSideMenu = () => {
  const navigate = useNavigate();
  const changePath = (path) => {
    navigate(path);
  };
  const hireMe = sideMenuData?.naveBarSetting?.hireMe;
  return (
    <section>
      <header className="header text-center">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <a className="no-text-decoration" href={sideMenuData?.home?.homeURL}>
              {sideMenuData?.home?.homeTitle}
            </a>
          </h1>
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navigation"
              className="navbar-collapse flex-column collapse"
            >
              {/* profile section */}
              <div className="profile-section pt-3 pt-lg-0">
                <img
                  className="profile-image mb-3 rounded-circle mx-auto"
                  src={sideMenuData?.naveBarSetting.profilePicture}
                  alt={sideMenuData.home.homeTitle}
                />
                {/* bio section */}
                <div className="bio mb-3">
                  {sideMenuData?.naveBarSetting.bio}
                </div>

                {/* social list */}
                <ul className="social-list list-inline py-2 mx-auto">
                  {sideMenuData?.naveBarSetting?.socialMediaDetails &&
                    sideMenuData?.naveBarSetting?.socialMediaDetails?.map((socialMedia, index) => {
                      return (
                        <li className="list-inline-item" id={index} key={index}>
                          <a
                            href={socialMedia.link}
                            target={socialMedia.target}
                            rel="noopener noreferrer"
                          >
                            <IconComponent icon={socialMedia.icon.id}
                              height={socialMedia.icon.height}
                              width={socialMedia.icon.width}
                              color={socialMedia.icon.color}
                            />
                          </a>
                        </li>
                      );
                    }
                    )
                  }
                </ul>
                <hr />
              </div>

              {/* menu */}
              <div className="menu">
                {sideMenuData?.naveBarSetting?.menuDetails?.menus &&
                  <Nav
                    //TODO: if navigation not work the put defaultActiveKey="portfolio/#"
                    defaultActiveKey="/#"
                    className="mr-auto flex-column"
                    onSelect={(selectedKey) => changePath(selectedKey)}
                  >
                    {sideMenuData?.naveBarSetting?.menuDetails?.menus.map((menu, index) => {
                      return (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={menu.link} className="flex-column nav-item">
                            <IconComponent icon={menu.icon.id} height={menu.icon.height} width={menu.icon.width} color={menu.icon.color} />
                            {menu.name}
                          </Nav.Link>
                        </Nav.Item>
                      )
                    }
                    )
                    }
                  </Nav>
                }
              </div>

              {/* hier me */}
              {hireMe && (
                <div className="my-2 hireMe">
                  <ButtonComponent
                    onClickFunction={() =>
                      navigate(hireMe.link, { replace: true })
                    }
                    imageIcon={
                      <IconComponent icon={hireMe.icon.id}
                        height={hireMe.icon.height}
                        width={hireMe.icon.width}
                        color={hireMe.icon.color}
                      />
                    }
                    lable={hireMe.name}
                  />
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default ResponsiveSideMenu;
