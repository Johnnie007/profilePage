import "./App.scss";
import Nav from "./Mobile/Component/Nav/Nav";
import Skills from "./Mobile/Component/Skills/Skills";
import HomePage from "./Mobile/Component/HomePage/HomePage";
import Portfolio from "./Mobile/Component/Porfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <HomePage/> */}
      {/* <Skills/> */}
      <Portfolio/>
    </div>
  );
}

export default App;
