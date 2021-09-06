import "./App.css";
//import Part from "./components/Part";
//import MainHeader from "./components/MainHeader";
//import Showcase from "./components/Showcase";
//import NewsLetter from "./components/NewsLetter";
//import Categories from "./components/Categories";
//import Introduction from "./components/Introduction";
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Intro from "./components/Intro";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body">
      <Intro></Intro>
      <About></About>
      <Quotes></Quotes>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App;
