import "./Part.css";
import image from "../images/image1.jpg";
function Part() {
  return (
    <div className="part">
      <img src={image} alt="Logo" className="image" />
    </div>
  );
}

export default Part;
