import "./Introduction.css";
import image from "../images/RobynNoBG1.png";
import icon1 from "../images/user-location.png";
import Square from "./Square";
function Introduction() {
  return (
    <div className="intro">
      <style>
        @importurl('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
      </style>
      <div className="header">
        <h1 className="title">Hi, I'am Robyn</h1>
      </div>
      <div className="info">
        <Square image={icon1}></Square>
        <Square className="row"></Square>
        <Square className="row"></Square>
        <Square className="row"></Square>
      </div>
      <div className="image">
        <img src={image} alt="Logo" className="image1" />
      </div>
    </div>
  );
}

export default Introduction;
