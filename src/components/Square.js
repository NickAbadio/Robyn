import "./Square.css";

function Square(props) {
  return (
    <div className="box">
      <img src={props.image} alt="Logo" className="icon1" />
      <h1 className="titleBox"> {props.title} </h1>
      <h2 className="infoBox"> {props.info} </h2>
    </div>
  );
}

export default Square;
