import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.svg";
import {motion} from "framer-motion";
import {useNavigate} from 'react-router-dom'
function Footer() {
  const navigate= useNavigate()
  return (
    <div className="footer-sec">
      <hr />
      <div className="footer_grid">
        <motion.div
                whileInView={{opacity: [0, 1], x: [200, 0]}}
                transition={{duration: 1}}
            >
          <div className="footer_logo">
            <img src={Logo} alt="" className="footer_img" />
            <span className="footer-title">ICreate</span>
            <p className="footer_img_p">
              "Where Ideas Flourish, Art Blossoms – Powered by AI."
            </p>
          </div>
          <p className="footer-para">Copyright © 2024, All Rights Reserved</p>
          <br />
          <p className="footer-para2">
            ContactUs:{" "}
            <span className="footer-contact">
              ankitanandfullstackdeveloper@gmail.com
            </span>
          </p>
        </motion.div>
        <motion.div
        className="links"
        whileInView={{opacity: [0, 1], x: [-200, 0]}}
        transition={{duration: 1}}>
          <h1 className="links_h1">Navigate to your Favourite Section</h1>
          <ul>
            <li className="f_li" onClick={()=>navigate('/')}>&#8250;Home</li>
            <li className="f_li" onClick={()=>navigate('/community')}>&#8250;Community</li>
            <li className="f_li" onClick={()=>navigate('/create')}>&#8250;Create</li>
            <li className="f_li" onClick={()=>navigate('/about')}>&#8250;About</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
