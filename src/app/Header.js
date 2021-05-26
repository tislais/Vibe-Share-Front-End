import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    const { userName } = this.props;
    return (
      <header className="Header">

        <h1>Vibe Share</h1>
        <NavLink to="/profile-page" exact={true} className='HeaderLinks'>{ userName }</NavLink>
        <NavLink to="/playlists" exact={true} className='HeaderLinks'>Global Playlists</NavLink>
        <NavLink to="/" exact={true} className='HeaderLinks'>Logout</NavLink>


      </header>
    );
  }

}

export default Header;