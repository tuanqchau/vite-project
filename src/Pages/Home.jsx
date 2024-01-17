import img8 from '../assets/img/img8.jpg'
import '../Styles/Home.css'

const Home = () => {

    return (
        <div className='container'>
            <p className='title-text'>Film photography<br/>& Programming</p>
            <img className='home-img' src={img8}/>
        </div>
    );
}

export default Home;