import React, {useContext} from 'react';
import '../Styles/About.css';
import young_tuan from '../assets/img/young_tuan.jpg';
import {
  ImInstagram,
  ImGithub,
  ImLinkedin,
} from 'react-icons/im';
import {motion} from 'framer-motion';

const About = () => {

    return (
        <div className='profile-container'>
          <motion.img 
        initial={{x: '-500%'}}

          animate={{ rotate: 360, x:'600%' }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          

          className='profile-pic' src={young_tuan}/>
          

            <div className='profile-info'>
                <h2 className='name'>Tuan</h2>
                <ul>
                    <li>
                    <a className="social-icons" href='http://www.instagram.com/tuanqchau_' target='_blank'>
                        <ImInstagram className='icons'/> @tuanqchau_
                    </a>
                    </li>

                    <li>
                    <a className="social-icons" href='https://github.com/tuanqchau' target='_blank'>
                        <ImGithub className='icons'/> tuanqchau
                    </a>
                    </li>

                    <li>
                    <a className="social-icons" href='https://www.linkedin.com/in/tuan-chau-5566ba1b4/' target='_blank'>
                        <ImLinkedin className='icons'/> Tuan Chau
                    </a>
                    </li>  
                </ul>  
            </div>
            
         
         
        </div>
    );
}

export default About;