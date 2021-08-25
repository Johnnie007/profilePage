import React from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
//Stating state for Hamburger menu
    state = {
        status: 'close'
    }

    //changing the status of state
    status = (event) => {
        console.log(event)
        if(event.type){
            if(this.state.status === 'close'){
                this.setState({
                    status: 'open'
                })
            }
            else if(this.state.status === 'open'){
                this.setState({
                    status: 'close'
                })
            }
        }
    }
    //Variables for the open and close return elements
    open = 
        <nav className="open__nav">
            <ul className="open__nav--ul">
                <li className="open__nav--li"><Link to='/'><h1>Home</h1></Link></li>
                <li className="open__nav--li"><Link to='/skills'><h1>Skills</h1></Link></li>
                <li className="open__nav--li"><Link to='/portfolio'><h1>Portfolio</h1></Link></li>
            </ul>
            <div className='open' onClick={this.status}>
                <div className='open__bar'></div>
                <div className='open__bar'></div>
                <div className='open__bar'></div>
            </div>
        </nav>

    close = <div className='close' onClick={this.status}>
                <div className='close__bar'></div>
                <div className='close__bar'></div>
                <div className='close__bar'></div>
            </div>
    render(){
        //if statement to return menu status
        let menu = this.state.status
        if(menu === 'open'){
            return(this.open)
        }else{
            return(this.close)
        }
    }
}

export default Nav;