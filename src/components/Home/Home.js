import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div id="home-view">
            
            <section className="text-column">
                <div className="text-column-inner">
                    <h1>Hey, you!</h1>
                    <p className="big">
                        Would you like to have a great pair of shoes ?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>

            <section className="home-columns">
                <div className="column">
                <div className="img-holder">
                    <img src="./images/shoes-home.jpg" alt="" />
                    </div>
                    <span className="overlay"><Link to={'/blog'}>Blog</Link></span>
                </div>
                <div className="column">
                    <div className="img-holder">
                    <img src="./images/register.jpg" alt="" />
                    </div>
                    <span className="overlay"><Link to={'/register'}>Register</Link></span>
                </div>
                <div className="column">
                <div className="img-holder">
                    <img src="./images/about.jpg" alt="" />
                    </div>
                    <span className="overlay"><Link to={'/'}>About</Link></span>
                </div>
            </section>
        </div>
    )
}

export default Home;
