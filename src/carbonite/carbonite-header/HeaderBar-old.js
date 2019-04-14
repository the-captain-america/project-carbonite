import React, { Component } from 'react';
import AuthMenu from './AuthMenu';
import HorizontalMenu from './HorizontalMenu';
import MenuBar from './MenuBar';
import { Link } from 'react-router-DOM';

const dataHorizontal = [
  { 
   title: 'Home', 
   link: '/home', 
   selected:null 
  },
  { 
   title: 'Projects', 
   link: '/projects', 
   selected:null 
  },
  { 
   title: 'Contact', 
   link: '/contact', 
   selected:null 
  }
];

const dataVertical = [
  { 
   title: 'Home', 
   link: '/home', 
   selected:null 
  },
  { 
   title: 'Projects', 
   link: '/projects', 
   selected:null 
  },
  {
    title: 'Contact',
    link: '/contact',
    selected:null
  }
];

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      toggleAuth: false
    };

    this.logOut = this.logOut.bind(this);
    this.onPressOverlay = this.onPressOverlay.bind(this);
    this.onPressMenu = this.onPressMenu.bind(this);
    this.onPressAuth = this.onPressAuth.bind(this);
  }

  logOut() {
		console.log('logged out');
  }

  onPressMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  onPressOverlay() {
    this.setState({
      menu: !this.state.menu
    });
  }

  onPressAuth() {
    this.setState({
      toggleAuth: !this.state.toggleAuth
    });
  }

  onPressLogout() {
    console.log('logout');
  }
  
  render() {
    const logo = '';
    return (
      <div>
        <header className="header-bar">
          <MenuBar
            menu={this.state.menu}
            data={dataVertical}
            onPressMenu={this.onPressMenu}
            onPressOverlay={this.onPressOverlay} />
          
          <HorizontalMenu 
            data={dataHorizontal} 
            selected={this.state.selected} 
           />

          <span className="logo" style={{display:'none'}}>
            <img className="logo" src={logo} />
          </span>
          
          <AuthMenu
            auth={this.state.auth}
            onPressAuth={this.onPressAuth.bind(this)}
            toggleAuth={this.state.toggleAuth} />
        </header>
      </div>
    );
  }
}



export default HeaderBar;