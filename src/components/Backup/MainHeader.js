import "./MainHeader.css";
function MainHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="title">
          <h1>Robyn Matuto</h1>
        </div>
        <ul>
          <li>
            <button className="TitleButtons">ABOUT ME</button>
          </li>
          <li>
            <button className="TitleButtons">CONTACT ME</button>
          </li>
          <li>
            <button className="TitleButtons">HAHA UNLESS</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default MainHeader;
