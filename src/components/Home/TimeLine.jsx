import React from "react";
import { Timeline } from "antd";
import "../Styles/Home.css";
function TimeLine() {
  return (
    <div>
      <br />
      <div Style="max-height:457px; margin-top:0px; margin: 10px; overflow:scroll;">
        <ul className="timeline-3">
          <li>
            <a Style="color: black;">Last visited on</a>
            <p>20 Mar, 2022</p>
          </li>
          <li>
            <a Style="color: black;">Amount paid</a>
            <p>$100 on 20 Mar, 2022</p>
          </li>
          <li>
            <a Style="color: black;">Visited on</a>
            <p>20 Mar, 2022</p>
          </li>
          <li>
            <a Style="color: black;">Booked online appointment </a>
            <p>20 Mar, 2022</p>
          </li>
          <li>
            <a Style="color: black;">Amount paid</a>
            <p>$50 on 20 Mar, 2022</p>
          </li>
          <li>
            <a Style="color: black;">Procedure performed</a>
            <p>Root canal on 20 Mar, 2022</p>
          </li>
          <li>
            <a Style="color: black;">First visited on</a>
            <p>20 Mar, 2022</p>
          </li>
        </ul>
        <div Style="height:10px;">
          <a href="#" Style="color: #5783ff; font-size: 10pt; float:right;">
            View more
          </a>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
