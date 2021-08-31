import "./Square.css";

function Square(props) {
  return (
    <div className="box">
      <img src={props.image} alt="Logo" className="icon1" />
      Location: Toronto, Ontario
    </div>
  );
}

export default Square;
