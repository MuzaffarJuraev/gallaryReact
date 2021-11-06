import "./App.css";
import Img from "./components/img/Img";
import info from "./assets/info";
function App() {
  return (
    <div className="App">
      <Img info={info} />
    </div>
  );
}

export default App;
