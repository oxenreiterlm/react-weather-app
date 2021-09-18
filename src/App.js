import "./App.css";
import MainSection from "./MainSection";
import Signature from "./Signature";
import backgroundImage from "./media/itsBrightOutside.gif";

export default function App() {
  return (
    <div
      className="wholePageImg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="App">
        <div className="container align-items-center">
          <MainSection />
        </div>
        <Signature />
      </div>
    </div>
  );
}
