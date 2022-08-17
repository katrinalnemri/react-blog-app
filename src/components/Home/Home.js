import { useContext } from "react";

import { PostContext } from "../../contexts/PostContext";


const Home = () => {
    return (
        <div id="home-view">
            <section className="home-columns">
                <div className="column">
                    <img src="" alt=""/>
                </div>
                <div className="column">
                    <img src="" alt=""/>
                </div>
                <div className="column">
                    <img src="" alt=""/>
                </div>
            </section>

            <section className="text-column">
                <div className="text-column-inner">
                    <p></p>
                </div>
            </section>

            <section className="home-buttons">
                <span className="phone">

                </span>

                <span className="email">
                    
                </span>

                <span className="contact">
                    
                </span>
            </section>
        </div>
    )
}

export default Home;
