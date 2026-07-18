import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";

import "./App.css";
import "./styles/Global.css";

function App() {
    return (
        <div className="App">
            <div id="content">
                <NavBar />
                <Intro />
                <FadeInSection><About /></FadeInSection>
                <FadeInSection><Experience /></FadeInSection>
                <FadeInSection><Projects /></FadeInSection>
                <FadeInSection><Contact /></FadeInSection>
            </div>
        </div>
    );
}

export default App;
