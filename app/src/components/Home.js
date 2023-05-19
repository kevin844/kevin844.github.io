import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from "react-router-dom";

function Home() {
    return (
        <div className="home-content" id="home">
            <h1>Hi, my name is Kevin Gutierrez</h1>
            <h2><strong>I'm a software developer.</strong></h2>
            <p>Making the web a better place, one line of code at a time.</p>
            
            <a href="https://wa.me/+573108442794" className="wa-btn" target="_blank">Contact me</a>
        </div>
    );
}

export default Home;