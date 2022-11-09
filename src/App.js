import Fruits from "./Fruits";
import FruitsList from "./FruitsList";
import FruitsCounter from "./FruitsCounter";

function App() {
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits>
      <FruitsList />
      <FruitsCounter />
      </Fruits>
    </div>
  );
}

export default App;
