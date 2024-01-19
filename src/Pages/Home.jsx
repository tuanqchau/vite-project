import img8 from '../assets/img/img8.jpg'
import '../Styles/Home.css'
import { motion } from "framer-motion"

const Home = () => {

    return (
        <div className='container'>
        <motion.p initial={{opacity: 0, y: '-80%'}}
        animate={{opacity: 1, y:0}}
        exit={{opacity:0, y:'-80%'}}
        transition={{ duration: 0.85 }}
        className='title-text'>Film photography<br/>& Programming</motion.p>
            <motion.img 
            initial={{opacity: 0, y: '40%'}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:'40%'}}
            transition={{ duration: 0.85 }}
            className='home-img' src={img8}/>
        </div>
    );
}

export default Home;