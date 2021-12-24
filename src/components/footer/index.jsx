import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserCircle,
  faCog,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerButton">
        <div className="spacer"></div>
        <FontAwesomeIcon icon={faPhone} rotation={90} color="grey"  size="2x" />
        <div className="selectionBar"></div>
      </div>
      <div className="footerButton">
        <div className="spacer"></div>
        <FontAwesomeIcon icon={faUserCircle} color="grey" size="2x" />
        <div className="selectionBar"></div>
      </div>
      <div className="middleP"></div>
      <div className="middle">
        <div className="middleInner">
          <FontAwesomeIcon icon={faEllipsisV} color="white" size="2x" />
          <FontAwesomeIcon icon={faEllipsisV} color="white" size="2x" />
          <FontAwesomeIcon icon={faEllipsisV} color="white" size="2x" />
        </div>
      </div>
      <div className="footerButton">
        <div className="spacer"></div>
        <FontAwesomeIcon icon={faCog} size="2x" color="grey" />
        <div className="selectionBar"></div>
      </div>
      <div className="footerButton">
        <div className="spacer"></div>
        <div className="outer">
          <div className="inner"></div>
        </div>
        <div className="selectionBar"></div>
      </div>
    </div>
  );
}
