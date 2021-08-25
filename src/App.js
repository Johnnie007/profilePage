import "./App.scss";
// import Nav from "./Mobile/Component/Nav/Nav";
// import Skills from "./Mobile/Component/Skills/Skills";
// import HomePage from "./Mobile/Component/HomePage/HomePage";
// import Portfolio from "./Mobile/Component/Portfolio/Portfolio";
// import Footer from "./Mobile/Component/Footer/Footer";
import {Switch, Route} from 'react-router-dom';
import Nav from "./Desktop/Nav/Nav";
import HomePage from "./Desktop/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <Nav/>
      <Switch>
        <Route path='/' exact render={()=> <HomePage/>}/>
        <Route path='/skills' render={() => <Skills/>}/>
        <Route path='/portfolio' render={()=> <Portfolio/>}/>
        <Route/>
      </Switch>
      <Footer/> */}
      <Nav/>
      <HomePage/>
    </div>
  );
}

export default App;
