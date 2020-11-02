import React from "react";
import { useSpring, animated } from "react-spring";
import "./About.css";

const FaceIcon = () => {
  return (
    <span>
      <svg
        width="20px"
        style={{ marginRight: "10px", marginTop: "5px" }}
        height="15px"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        class="svg-inline--fa fa-facebook-f fa-w-10"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
      </svg>
    </span>
  );
};

const Instagram = () => {
  return (
    <span>
      <svg
        width="15px"
        style={{ marginRight: "10px", marginTop: "5px" }}
        height="15px"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-instagram"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </span>
  );
};
const Gmail = () => {
  return (
    <span>
      <svg
        width="15px"
        style={{ marginRight: "10px", marginTop: "5px" }}
        height="15px"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-mail"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </span>
  );
};
const Call = () => {
  return (
    <span>
      <svg
        width="10px"
        style={{ marginRight: "10px", marginTop: "5px" }}
        height="8px"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-phone-call"
      >
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </span>
  );
};

const About = ({ expanded }) => {
  

  return (
    <div className={`about_page ${expanded?'expanded':''} `}  >
      <div className="self_intro">
        <h1>Usama Rehman</h1>
        <p>
          Photography is the art, application and practice of creating durable
          images by recording light, either electronically by means of an image
          sensor, or chemically
        </p>
      </div>
      <div className="self_detail">
        <ul>
          <li>
            <FaceIcon></FaceIcon>blackStone
          </li>
          <li>
            <Instagram></Instagram>black_stone
          </li>
          <li>
            <Call></Call>+92 308 701 1212
          </li>
          <li>
            <Gmail></Gmail>blackStone_440@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
