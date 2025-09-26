import React, {useContext} from 'react';
import '../Styles/About.css';
import young_tuan from '../assets/img/young_tuan.jpg';
import {
  ImInstagram,
  ImGithub,
  ImLinkedin,
} from 'react-icons/im';
import {motion} from 'framer-motion';

//import { CursorContext } from '../context/CursorContext';
const About = () => {
    //const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
    
    return (
        <div className='about-container page-transition'>
          <div className='profile-container'>
            <motion.img 
              initial={{opacity: 0, scale: 0.8}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{duration: 0.8, ease: "easeOut"}}
              className='profile-pic' 
              src={young_tuan} 
              alt="Tuan Chau"
              //onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
            />
          
            <motion.div 
              className='profile-info' 
              initial={{opacity: 0, x: 30}}
              animate={{ opacity: 1, x: 0 }}
              transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}}
            > 
              <h2 className='name'>Tuan Chau</h2>
              {/* <p>
                Analog photographer and programmer.
              </p> */}
              <ul>
                <li>
                  <a className="social-icons" href='http://www.instagram.com/rawtuna35' target='_blank' rel="noopener noreferrer">
                    <ImInstagram className='icons'/> @rawtuna35
                  </a>
                </li>

                <li>
                  <a className="social-icons" href='https://github.com/tuanqchau' target='_blank' rel="noopener noreferrer">
                    <ImGithub className='icons'/> tuanqchau
                  </a>
                </li>

                <li>
                  {/* <a className="social-icons" href='https://www.linkedin.com/in/tuan-chau-5566ba1b4/' target='_blank'>
                    <ImLinkedin className='icons'/> Tuan Chau
                  </a> */}
                </li>  
              </ul>  
            </motion.div>
          </div>
        </div>
    );
}

export default About;