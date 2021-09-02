import "./Introduction.css";
import image from "../images/RobynNoBG1.png";
import icon1 from "../images/user-location.png";
import Square from "./Square";
function Introduction() {
  const boxes = [
    { icon: icon1, title: "location", info: "Toronto, Ontario" },
    { icon: icon1, title: "Occupation", info: "Actress" },
    { icon: icon1, title: "location", info: "Toronto, Ontario" },
    { icon: icon1, title: "location", info: "Toronto, Ontario" },
  ];
  return (
    <div className="intro">
      <h1 className="title">Hi, I'am Robyn</h1>
      <div className="image">
        <img src={image} alt="Logo" className="image1" />
      </div>
      <div className="info">
        <Square
          image={boxes[0].icon}
          title={boxes[0].title}
          info={boxes[0].info}
        ></Square>
        <Square
          image={boxes[1].icon}
          title={boxes[1].title}
          info={boxes[1].info}
        ></Square>
        <Square
          image={boxes[2].icon}
          title={boxes[2].title}
          info={boxes[2].info}
        ></Square>
        <Square
          image={boxes[3].icon}
          title={boxes[3].title}
          info={boxes[3].info}
        ></Square>
      </div>
    </div>
  );
}

export default Introduction;
