import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  handleLogout = () => {
    window.localStorage.clear();
  };

  render() {
    const { userName } = this.props;
    return (
      <header className="Header">
        <div className="neon">Vibe Share</div>
        <div className="NavLinks">
          <NavLink to="/profile-page" exact={true} className='HeaderLinks'>{userName}</NavLink>
          <NavLink to="/playlists" exact={true} className='HeaderLinks'>All Playlists</NavLink>
          <NavLink to="/" exact={true} className='HeaderLinks' onClick={this.handleLogout}>Logout</NavLink>
        </div>

      </header >
    );
  }

}

export default Header;