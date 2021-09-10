import "./App.css";
import MainSection from "./MainSection";
import Signature from "./Signature";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <MainSection defaultCity="Pittsburgh" />
      </div>
      <Signature />
    </div>
  );
}
