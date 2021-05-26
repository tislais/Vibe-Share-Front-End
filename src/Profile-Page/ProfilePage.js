import { Component } from 'react';
import './ProfilePage.css';

export default class ProfilePage extends Component {


  //state = {
  //loading: false
  //}

  handleNav = async () => {
    const { history } = this.props;
    history.push('/create-mixtape');

  }




  render() {
    return (
      <div className="ProfilePage">
        <h1>Profile Page</h1>
        <img src="" alt="user-pic" id="user-pic"></img>
        <input id="user-descrip"></input>

        {/*on click module appears. redirect to "create page"*/}
        <button id="createPlaylist" onClick={this.handleNav}> +Create new playlist</button>

        <ul id="my-mix-tapes"></ul>

        <ul id="favorites"></ul>


      </div>
    );
  }

}