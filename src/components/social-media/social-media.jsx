import React from "react";
import './social-media.css'

function SocialMedia(props) {
  return (
    <ul className="media">
      <li>
        <a href={props.github} target="_alt" rel="noopener noreferrer">
          github
        </a>
      </li>
      <li>
        <a href={props.linkedin} target="_alt" rel="noopener noreferrer">
          linkedin
        </a>
      </li>
      <li>
        <a href={props.mail} target="_alt" rel="noopener noreferrer">
         e-mail
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
