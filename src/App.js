import "./App.scss";
import Nav from "./Mobile/Component/Nav/Nav";
import Skills from "./Mobile/Component/Skills/Skills";
import HomePage from "./Mobile/Component/HomePage/HomePage";
//background image was made by Shane Marcos https://www.artstation.com/shanevmm
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <HomePage/> */}
      <Skills/>
    </div>
  );
}

export default App;
