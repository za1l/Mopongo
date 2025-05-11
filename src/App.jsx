import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import QuienesSomos from "./components/QuienesSomos";
import MinutinesResearch from "./components/MinutinesResearch";
import MopongoArt from "./components/MopongoArt";
import OnlyMopongos from "./components/OnlyMopongos";
import ECLive from "./components/ECLive";
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <div className="bento-grid">
        <QuienesSomos />
        <MinutinesResearch />
        <MopongoArt />
        <OnlyMopongos />
        <ECLive />
        <JoinUs />
      </div>
    </div>
  );
}

export default App;
