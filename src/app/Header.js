import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {


  render() {
    const { userName, onLogout } = this.props;
    return (
      <header className="Header">
        <div className="neon">Vibe Share</div>
        <div className="NavLinks">
          <NavLink to="/profile-page" exact={true} className='HeaderLinks'>{userName}</NavLink>
          <NavLink to="/playlists" exact={true} className='HeaderLinks'>All Mixtapes</NavLink>
          <NavLink to="/about" exact={true} className='HeaderLinks'>About Us</NavLink>
          <NavLink to="/" exact={true} className='HeaderLinks' onClick={onLogout}>Logout</NavLink>
        </div>

      </header >
    );
  }

}

export default Header;