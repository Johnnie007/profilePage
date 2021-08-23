import "./App.scss";
import Nav from "./Mobile/Component/Nav/Nav"
import HomePage from "./Mobile/Component/HomePage/HomePage";
//background image was made by Shane Marcos https://www.artstation.com/shanevmm
function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
    </div>
  );
}

export default App;
