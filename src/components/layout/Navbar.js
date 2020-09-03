import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Zoom from 'react-reveal/Zoom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper green">
          <Zoom duration={2000}>
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col brand-logo center black-text"
            >
              {/* <i className="material-icons">code</i> */}
              <Image style={{ height:"50px", width:"50px"}} src="https://www.svgrepo.com/show/126102/shelter.svg" roundedCircle />
              <span className=".d-none .d-md-block"> SHELTERIZE </span>
            </Link>
            </Zoom>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
