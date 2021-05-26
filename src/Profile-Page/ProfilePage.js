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
    const { userName } = this.props;
    return (
      <div className="ProfilePage">
        <h1>Welcome, {userName}</h1>

        {/*on click module appears. redirect to "create page"*/}
        <button id="createPlaylist" onClick={this.handleNav}> + Create new playlist</button>

        {/* <ul id="my-mix-tapes">
        </ul>
        <ul id="favorites">
          <Favorites />
        </ul> */}


      </div>


    );
  }

}