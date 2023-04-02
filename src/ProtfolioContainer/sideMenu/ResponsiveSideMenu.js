import profilePic from "../../assests/unnamed.webp";
import { ReactComponent as AboutMeSvg } from "../../assests/aboutMe.svg";
import { ReactComponent as Portfolio } from "../../assests/portfolio.svg";
import { ReactComponent as Document } from "../../assests/document.svg";
import { ReactComponent as Contact } from "../../assests/contact.svg";
import { ReactComponent as HierMe } from "../../assests/hierMe.svg";
import { Nav } from "react-bootstrap";
import "bootstrap/js/src/collapse.js";
import "./ResponsiveSideMenu.scss";
import {useNavigate } from "react-router-dom";
import ButtonComponent from "../Common/Button/ButtonComponent";

const ResponsiveSideMenu = () => {
  const navigate = useNavigate();
  const changePath = (path) => {
    navigate(path);
  };
  return (
    <section>
      <header className="header text-center">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <a className="no-text-decoration" href="index.html">
              Indrajeet Singh
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
                  src={profilePic}
                  alt="Indrajeet Singh"
                />
                {/* bio section */}
                <div className="bio mb-3">
                  Hi, my name is Indrajeet Singh Badgujar and I'm a senior
                  software engineer. Welcome to my personal website!
                </div>
                {/* social list */}
                <ul className="social-list list-inline py-2 mx-auto">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/indrajeetsingh.khalsa.7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook-square fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="mailto:indrajeetsinghkhalsa3@gmail.com">
                      <i className="fa fa-google-plus-square fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/indrajeetsinghkhalsa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/indrajeetsinghkhalsa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github fa-2x"></i>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>

              {/* menu */}
              <div className="menu">
                <Nav
                  defaultActiveKey="/#"
                  className="mr-auto flex-column"
                  onSelect={(selectedKey) => changePath(selectedKey)}
                >
                  <Nav.Item>
                    <Nav.Link href="/#" className="flex-column nav-item">
                      <AboutMeSvg height="16px" />
                      About Me
                    </Nav.Link>

                    <Nav.Link eventKey="#" className="flex-column nav-item">
                      <Portfolio height="16px" />
                      Portfolio
                    </Nav.Link>

                    <Nav.Link
                      eventKey="/Resume"
                      className="flex-column nav-item"
                    >
                      <Document height="16px" />
                      Resume
                    </Nav.Link>
                    <Nav.Link
                      eventKey="/ContactMe"
                      className="flex-column nav-item"
                    >
                      <Contact height="16px" />
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              {/* hier me */}
              <div className="my-2 hireMe">
                <ButtonComponent
                  onClickFunction={() =>
                    navigate("/ContactMe", { replace: true })
                  }
                  imageIcon={<HierMe height="20px" />}
                  lable={" Hire Me"}
                />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default ResponsiveSideMenu;
