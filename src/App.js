import "./App.css";
import Card from "./Card/Card";
import data from "../src/Card/CardData";
function App() {
  const travelCountry = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <div className="App">{travelCountry}</div>;
}

export default App;
