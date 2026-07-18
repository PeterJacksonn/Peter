import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";

import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <NavBar />
        <Intro />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
