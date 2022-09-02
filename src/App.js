import "./App.scss";
import Nav from "./Mobile/Component/Nav/Nav";
import Skills from "./Mobile/Component/Skills/Skills";
import HomePage from "./Mobile/Component/HomePage/HomePage";
import Portfolio from "./Mobile/Component/Portfolio/Portfolio";
import {Switch, Route} from 'react-router-dom';
import DesktopNav from "./Desktop/DesktopNav/DesktopNav";
import DesktopHomePage from "./Desktop/DesktopHomePage/DesktopHomePage";
import DesktopPortfolio from "./Desktop/DesktopPortfolio/DesktopPortfolio";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";
import React, {useState, useEffect} from "react";

function App() {
   const [isLoading, setLoading] = useState(true);
  // const [img, setImg] = useState('');
  // const [status, setStatus] = useState('')
  // const apiUrl = 'https://api.github.com/users/johnnie007';
  
   useEffect( () => {
    setTimeout(()=>{
      setLoading(false);
    }, 2000);
   })
   
  return (
    <div className="App">
      {isLoading ? <LoadingAnimation/> :
      <div className='mobile'>
      <Nav/>
      <Switch>
        <Route path='/' exact render={()=> <HomePage/>}/>
        <Route path='/skills' render={() => <Skills/>}/>
        <Route path='/portfolio' render={()=> <Portfolio/>}/>
      </Switch>
      </div>}
      {isLoading ? <LoadingAnimation/> :
      <div className='desktop'>
        <DesktopNav/>
        <Switch>
          <Route path='/' exact render={()=> <DesktopHomePage />}/>
          <Route path='/portfolio' render={()=> <DesktopPortfolio/>}/>
          <Route path='/skills' render={()=><Skills/>} />
        </Switch>
      </div>}
    </div>
  );
}

export default App;
