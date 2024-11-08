import javascriptLogo from "../assets/img/javascript.svg";
import reactLogo from "../assets/img/react.svg";
import nodeLogo from "../assets/img/node.svg";
import cssLogo from "../assets/img/css.svg";
import htmlLogo from "../assets/img/html.svg";
import dockerLogo from "../assets/img/docker.svg";
import pythonLogo from "../assets/img/python.svg";
import figmaLogo from "../assets/img/figma.svg";
// Add other logos as needed

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of the technologies I'm skilled in.<br></br> Explore my knowledge in various tech stacks below.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={javascriptLogo} alt="JavaScript Logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="React Logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodeLogo} alt="Node Logo" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="CSS Logo" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={htmlLogo} alt="HTML5 Logo" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={dockerLogo} alt="Docker Logo" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Python Logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={figmaLogo} alt="Figma Logo" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Shape" />
    </section>
  );
};
