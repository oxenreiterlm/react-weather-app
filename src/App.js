import "./App.css";
import Header from "./Header";
import MainSection from "./MainSection";
import Signature from "./Signature";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainSection />
      </div>
      <Signature />
    </div>
  );
}
