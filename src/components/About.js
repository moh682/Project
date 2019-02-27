import React from 'react';
import picture from '../images/cv_billede.jpg';
import gitHub from '../images/GitHub_icon.jpg';
import linkedin from '../images/linkedin_icon.jpg';

export default class About extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col">
              <h3 style={{marginTop:"1.2em"}}>Personal Information</h3>
              <div id="personal-information">
                <li>Mohammad Omar Hariri</li>
                <li>moehariri682@gmail.com</li>
                <li>Snerlevej 52, 3000 Helsingør</li>
                <li>+45 81 74 74 44</li>
              </div>
              <div style={{marginTop:"1.2em"}}>
              <h3>Skills</h3>
                <div id="split" className="progress split">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Java</div>
                </div>
                <div id="split" className="progress split ">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "85%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">JS</div>
                </div>
                <div id="split" className="progress split ">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "75%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">MySQL</div>
                </div>
                <div id="split" className="progress split ">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "87%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">REST</div>
                </div>
                <div id="split" className="progress split ">
                  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Python</div>
                </div>
                <div id="split" className="progress split ">
                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "45%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Security</div>
                </div>
                <div id="split" className="progress split ">
                  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "67%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">html / css / Bootstrap</div>
                </div>
              </div>
            </div>

            <div className="col-5">
              <div className="shadow p-3 mb-5 rounded">
                <h3>Experience</h3>
                <li>student - still learning</li>
              </div>
              <div>
                <h3>About me</h3>
                <ul>
                  <li>Driven by challenges both mentally and physically</li>
                  <li>I have a constant thirst for knowladge.</li>
                  <li>My growth is a high priority to me</li>
                  <li>Teamplay is key to succes in any context</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4>Social Media</h4>
                <div>
                <a href="https://www.linkedin.com/in/mohammad-omar-hariri-337a0116b/"><img id="linkedin" src={linkedin} alt="" width="20em" height="20em"/></a>
                <a className="ml-2" href="https://github.com/moh682"><img id="github" src={gitHub} alt="" width="20em" height="20em"/></a>
                </div>
                <div>
                  
                </div>
              </div>
            </div>

            <div className="col ">
              <img id="image" className="rounded" src={picture} width="200px" height="360px" />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

//clip-path: polygon(88% 0, 100% 16%, 82% 100%, 0 100%, 0 0);
