import "./About.css";
import Card from "./Card";
function About() {
  return (
    <div className="blue-container">
      <div className="container">
        <ul>
          <li>
            <Card></Card>
          </li>
          <li>
            <Card></Card>
          </li>
          <li>
            <Card></Card>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
