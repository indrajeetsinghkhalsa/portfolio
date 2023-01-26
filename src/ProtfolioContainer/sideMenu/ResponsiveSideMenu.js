import profilePic from "../../assests/unnamed.webp";
import aboutMeSvg from "../../assests/aboutMe.svg";
import hireMe from "../../assests/hierMe.svg";
import { Nav } from "react-bootstrap";
import "bootstrap/js/src/collapse.js";
import "./ResponsiveSideMenu.scss";
import { useNavigate } from "react-router-dom";


const ResponsiveSideMenu = () => {
  const navigate = useNavigate();
  const changePath = (path) => {
    navigate(path)
  }
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
                        <a href="#">
                          <i className="fa fa-facebook-square fa-2x"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-google-plus-square fa-2x"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram fa-2x"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-github fa-2x"></i>
                        </a>
                      </li>
                    </ul>
                    <hr />
                  </div>
    
                  {/* menu */}
                  <div className="menu">
                    <Nav
                      defaultActiveKey="/"
                      className="mr-auto flex-column"
                      onSelect={(selectedKey) => changePath(selectedKey)}
                    >
                      <Nav.Item>
                        <Nav.Link
                          href="/"
                          className="flex-column nav-item"
                        >
                          <img
                            className="menuImage"
                            src={aboutMeSvg}
                            alt="aboutMe"
                          />
                          About Me
                        </Nav.Link>
    
                        <Nav.Link eventKey="#" className="flex-column nav-item">
                          <img
                            className="menuImage"
                            src={aboutMeSvg}
                            alt="Portfolio"
                          />
                          Portfolio
                        </Nav.Link>
    
                        <Nav.Link eventKey="#" className="flex-column nav-item">
                          <img
                            className="menuImage"
                            src={aboutMeSvg}
                            alt="Resume"
                          />
                          Resume
                        </Nav.Link>
                        <Nav.Link eventKey="/ContactMe" className="flex-column nav-item">
                          <img
                            className="menuImage"
                            src={aboutMeSvg}
                            alt="Contact"
                          />
                          Contact
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
    
                  {/* hier me */}
                  <div className="my-2 hireMe">
                    <a className="btn btn-primary" href="contact.html" target="_blank">
                      <img className="hireMeImg" src={hireMe} alt="hireMe" />
                      Hire Me
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </section>
      );
}

export default ResponsiveSideMenu;