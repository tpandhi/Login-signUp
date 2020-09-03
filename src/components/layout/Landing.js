import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row justify-content-center">
          <div className="col s12 center-align">
          <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(1) translateY(-50%)",
                }}
              >
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <Stagger in>
            <Fade in>
            <div className="col s6">
            
              <Link
                to="/register"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  backgroundColor: "rgb(35, 156, 106)",
                  letterSpacing: "1.5px",
                  color:"white"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3 "  
              >
               <span className="align-self-center">NEED HELP</span>
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "170px",
                  borderRadius: "3px",
                  backgroundColor: "rgb(35, 156, 106)",
                  letterSpacing: "1.5px",
                  color:"white"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                WANT TO HELP
              </Link>
              </div>
              </Fade>
          </Stagger>
            
            </FadeTransform>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
