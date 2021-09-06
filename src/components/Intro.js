function Intro() {
  return (
    <div>
      <div className="container">
        <header>
          <img src="/images/logo.svg" alt="test" />
          <nav>
            <a href="#" class="hide-desktop">
              <img src="images/ham.svg" alt="toggle menu" className="menu" />
            </a>
            <ul className="show-desktop hide-mobile">
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
            </ul>
          </nav>
        </header>
        <section>
          <img
            src="images/server.svg"
            alt="Server graphic"
            className="mainImage"
          />
          <h1>Web Hosting for the modern Era</h1>
          <p class="subHead">Go Serverless and pay only for what you use</p>
          <img
            src="images/scroll.svg"
            alt="scroll down"
            className="scroll hide-mobile show-desktop"
          />
        </section>
      </div>
    </div>
  );
}

export default Intro;
