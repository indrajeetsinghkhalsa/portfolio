import "./AboutMe.scss";
import profilePic from "../../../assests/unnamed.webp";

export const AboutMe = () => {
  return (
    <section className="about-me p-3 p-lg-5 theme-bg-ligh">
      <div className="container">
        <div className="profile-teaser row">
          <div className="col">
            <h4 className="name ">Indrajeet Singh Badgujar</h4>
            <div className="tagline">Software Engineer</div>
            <div class="bio mb-4">
              I'm a software engineer work in frontend and backend development
              for complex scalable web apps. I write resuable code for software
              development. Want to know how I may help your project? Check out
              my project{" "}
              <a class="text-link" href="#">
                portfolio
              </a>{" "}
              and{" "}
              <a class="text-link" href="#">
                online resume
              </a>
              .
            </div>
            <div class="mb-4">
              <a class="btn btn-primary me-2 mb-3" href="#">
                <svg
                  class="svg-inline--fa fa-circle-right me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"
                  ></path>
                </svg>
                {/* <i class="fas fa-arrow-alt-circle-right me-2"></i> Font Awesome fontawesome.com */}
                <span class="d-none d-md-inline">View</span>
                Portfolio
              </a>
              <a class="btn btn-secondary mb-3" href="#">
                <svg
                  class="svg-inline--fa fa-file-lines me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="file-lines"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"
                  ></path>
                </svg>
                {/* <i class="fas fa-file-alt me-2"></i> Font Awesome fontawesome.com */}
                <span class="d-none d-md-inline">View</span> Resume
              </a>
            </div>
          </div>

          <div class="col-md-5 col-lg-5">
            <img
              class="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
              src={profilePic}
              alt="Indrajeet Singh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
