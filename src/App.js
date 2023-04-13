import HeartAnimation from "./Components/Hearth";
import LoveMessage from "./Components/LoveMessage";
import Particle from "./Components/SparksFly";
function App() {
  return (
    <div className="App">
      <LoveMessage message="  Eu te amo Bianca" />
      <HeartAnimation />
      <LoveMessage message="  Obrigada por ser minha amor linda loira namorada perfeita mommy fav" />
      <Particle />
    </div>
  );
}

export default App;