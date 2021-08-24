import Part from "./components/Part";
import AboutMeButton from "./components/AboutMeButton";
import "./App.css";
function App() {
  return (
    <div>
      <div className="box">
        <div className="title">
          <h2>ROBYN MATUTO</h2>
          <tr>
            <td className="list">
              <AboutMeButton></AboutMeButton>
            </td>
            <td className="list">
              <AboutMeButton></AboutMeButton>
            </td>
            <td className="list">
              <AboutMeButton></AboutMeButton>
            </td>
          </tr>
        </div>
      </div>
      <div className="center">
        <Part></Part>
      </div>
    </div>
  );
}

export default App;
