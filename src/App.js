import "./App.css";
//import Part from "./components/Part";
//import MainHeader from "./components/MainHeader";
//import Showcase from "./components/Showcase";
//import NewsLetter from "./components/NewsLetter";
//import Categories from "./components/Categories";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="body">
      <div>
        <Introduction></Introduction>
      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
