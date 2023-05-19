import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-content" id="home">
            <h1>Hi, my name is Kevin Gutierrez</h1>
            <h2><strong>I'm a software developer.</strong></h2>
            <h4>Making the web a better place, one line of code at a time.</h4>
            <button className="send-atsapp">
                <strong>Send me a message!</strong>
            </button>
        </div>
    );
}

export default Home;