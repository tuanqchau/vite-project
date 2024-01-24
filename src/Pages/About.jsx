import React, {useContext} from 'react';
import '../Styles/About.css';
import young_tuan from '../assets/img/young_tuan.jpg';
import {
  ImInstagram,
  ImGithub,
  ImLinkedin,
} from 'react-icons/im';
import {motion} from 'framer-motion';

import { CursorContext } from '../context/CursorContext';
const About = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
    
    return (
        <div className='profile-container'>
          <motion.img 
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{duration: 0.85}}
            className='profile-pic' src={young_tuan} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
          
            <motion.div className='profile-info' 
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{duration: 0.85}}> 
                <h2 className='name'>Tuan</h2>
                <ul>
                    <li>
                    <a onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="social-icons" href='http://www.instagram.com/tuanqchau_' target='_blank'>
                        <ImInstagram className='icons'/> @tuanqchau_
                    </a>
                    </li>

                    <li>
                    <a onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="social-icons" href='https://github.com/tuanqchau' target='_blank'>
                        <ImGithub className='icons'/> tuanqchau
                    </a>
                    </li>

                    <li>
                    <a onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="social-icons" href='https://www.linkedin.com/in/tuan-chau-5566ba1b4/' target='_blank'>
                        <ImLinkedin className='icons'/> Tuan Chau
                    </a>
                    </li>  
                </ul>  
            </motion.div>
        </div>
    );
}

export default About;