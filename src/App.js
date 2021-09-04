import "./App.css";
//import Part from "./components/Part";
//import MainHeader from "./components/MainHeader";
//import Showcase from "./components/Showcase";
//import NewsLetter from "./components/NewsLetter";
//import Categories from "./components/Categories";
//import Introduction from "./components/Introduction";
//import AboutMe from "./components/AboutMe";
//import Intro from "./components/Intro";

function App() {
    return (
        <div>
            <div className="container">
                <header>
                    <img src="/images/logo.svg" alt="test" />

                    <nav>
                        <a href="#" class="hide-desktop">
                            <img src="images/ham.svg" alt="toggle menu" />
                        </a>
                        <ul className="show-desktop hide-desktop"></ul>
                        <li className="exit-btn hide-desktop">
                            <img src="images/exit.svg" alt="exit" />
                        </li>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">services</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </nav>
                </header>
                <section>
                    <img
                        src="images/server.svg"
                        alt="Server graphic"
                        className="mainImage"
                    />
                    <h1>Web Hosting for the modern Era</h1>
                    <p class="subHead">
                        Go Serverless and pay only for what you use
                    </p>
                    <img
                        src="images/scroll.svg"
                        alt="scroll down"
                        className="scroll hide-mobile show-desktop"
                    />
                </section>
            </div>
            <div className="blue-container">
                <div className="container">
                    <ul>
                        <li>
                            <img src="images/icon-1.svg" alt="calender" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer non fermentum nunc.
                                Vestibulum sit amet laoreet est. Duis vitae
                                semper diam. Suspendisse nec augue dapibus,
                                gravida arcu at, ultrices diam. Cras in
                                convallis lorem, vitae lacinia nunc. Sed dictum
                                vestibulum mi et viverra. In hac habitasse
                                platea dictumst. Nullam vitae viverra orci, a
                                feugiat nunc. Fusce vel sem efficitur, luctus
                                urna sed, aliquam odio
                            </p>
                        </li>
                        <li>
                            <img src="images/icon-2.svg" alt="calender" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer non fermentum nunc.
                                Vestibulum sit amet laoreet est. Duis vitae
                                semper diam. Suspendisse nec augue dapibus,
                                gravida arcu at, ultrices diam. Cras in
                                convallis lorem, vitae lacinia nunc. Sed dictum
                                vestibulum mi et viverra. In hac habitasse
                                platea dictumst. Nullam vitae viverra orci, a
                                feugiat nunc. Fusce vel sem efficitur, luctus
                                urna sed, aliquam odio
                            </p>
                        </li>
                        <li>
                            <img src="images/icon-3.svg" alt="calender" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer non fermentum nunc.
                                Vestibulum sit amet laoreet est. Duis vitae
                                semper diam. Suspendisse nec augue dapibus,
                                gravida arcu at, ultrices diam. Cras in
                                convallis lorem, vitae lacinia nunc. Sed dictum
                                vestibulum mi et viverra. In hac habitasse
                                platea dictumst. Nullam vitae viverra orci, a
                                feugiat nunc. Fusce vel sem efficitur, luctus
                                urna sed, aliquam odio
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="gray-container">
                <div className="container">
                    <ul>
                        <li>
                          <figure>
                            <img
                                src="images/user1.png"
                                alt="user testimonial picture"
                            />
                        </li>
                        </figure>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
