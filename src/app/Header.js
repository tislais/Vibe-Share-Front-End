import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    const { userName } = this.props;
    return (
      <header className="Header">
        <div className="container">
          <div className="neon">Vibe Share</div>
        </div>
        <div className="NavLinks">
          <NavLink to="/profile-page" exact={true} className='HeaderLinks'>{userName}</NavLink>
          <NavLink to="/playlists" exact={true} className='HeaderLinks'>All Playlists</NavLink>
          <NavLink to="/" exact={true} className='HeaderLinks'>Logout</NavLink>
        </div>

      </header >
    );
  }

}

export default Header;