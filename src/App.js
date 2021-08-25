import "./App.scss";
import Nav from "./Mobile/Component/Nav/Nav";
import Skills from "./Mobile/Component/Skills/Skills";
import HomePage from "./Mobile/Component/HomePage/HomePage";
import Portfolio from "./Mobile/Component/Portfolio/Portfolio";
import Footer from "./Mobile/Component/Footer/Footer";
import {Switch, Route, Redirect} from 'react-router-dom';
import DesktopNav from "./Desktop/DesktopNav/DesktopNav";
import DesktopHomePage from "./Desktop/DesktopHomePage/DesktopHomePage";
import DesktopPortfolio from "./Desktop/DesktopPortfolio/DesktopPortfolio";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className='mobile'>
      <Nav/>
      <Switch>
        <Route path='/' exact render={()=> <HomePage/>}/>
        <Route path='/skills' render={() => <Skills/>}/>
        <Route path='/portfolio' render={()=> <Portfolio/>}/>
      </Switch>
      </div>
      <div className='desktop'>
        <DesktopNav/>
        <Switch>
          <Route path='/' exact render={()=> <DesktopHomePage/>}/>
          <Route path='/portfolio' render={()=> <DesktopPortfolio/>}/>
          <Route path='/skills' render={()=><Skills/>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
