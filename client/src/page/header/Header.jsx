import React from 'react';
import './header.css';
import people from '../../assets/images/people.png'
import AI from '../../assets/images/ai.png'
import DashBoardImage from '../../assets/images/DashBoardImage.gif'
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate =useNavigate()
    return (
        <motion.div
        id="home"
        whileInView={{opacity: [0, 1], y: [100, 0]}}
        transition={{duration: 0.9}}>
        <motion.div
            className="gpt3__header section__padding"
            id="home"
            whileInView={{opacity: [0, 1], y: [100, 0]}}
            transition={{duration: 0.9}}
        >
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Something amazing with ICREATE
                </h1>
                <p>AI-Powered Images: Where Imagination Becomes Reality. Modern text-to-image systems have a tendency to ignore words or descriptions, forcing users to learn prompt engineering. Icreate represents a leap forward in our ability to generate images that exactly adhere to the text you provide. <br />Icreate is an independent platform exploring new mediums of thought and expanding the imaginative powers of the human species.</p>
                <div className="gpt3__header-content__input">
                <button className="register-button" onClick={()=>navigate('/create')}>
                                <span> Get Started </span>
                </button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt='People'/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-img">
                <img src={AI} alt='AI'/>
            </div>
        </motion.div>
        <div className="main-div">
        <div className='outer-div'>
          <div className="inner-div">
           <img src={DashBoardImage} className='dashborad-image' alt="" />
         </div>
        </div>
      </div>
        </motion.div>
    );
}

export default Header;