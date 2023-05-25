import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

import pic from "../assets/Photo (1).jpg" 

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={pic} alt="Founder" />
        <h2>Riya Tiwari</h2>
        <p>Motivation is temporary, learn to be consistent.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instgram.com/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
