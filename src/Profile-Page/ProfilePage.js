import { Component } from 'react';
import { getMixtapesByUserId } from '../utils/mixtape-api.js';

import './ProfilePage.css';

export default class ProfilePage extends Component {

  state = {
    userName: '',
    userId: '',
    mixtapes: []
  }
  //loading: false ???

  async componentDidMount() {
    try {
      const localStorageUserId = window.localStorage.getItem('USER_ID');
      const mixtapes = await getMixtapesByUserId(localStorageUserId); 
      console.log(mixtapes);
      this.setState({ mixtapes: mixtapes });
    }
    catch (err) {
      console.log(err);
    }
  }

/*   getUserId = () => {
    
    this.setState({ userId: localStorageUserId });
  } */

  handleNav = async () => {
    const { history } = this.props;
    history.push('/create-mixtape');
  }

  render() {

    // if any mixtapes created, show them in a list
    // if not...

    const { userName, userId, mixtapes } = this.props;
    return (
      <div className="ProfilePage">
        <h1>Welcome, {userName}</h1>

        {/*on click module appears. redirect to "create page"*/}
        <button id="createPlaylist" onClick={this.handleNav}> + Create new playlist</button>

        {mixtapes 

          ? <ul id="my-mix-tapes">
            {mixtapes.map(mixtape => (
              <li key={mixtape.id}>
                <span>{mixtape.title}</span>
                <span>{mixtape.note}</span>
                <span>{mixtape.recipient}</span>
              </li>
            ))}
          </ul> 
          : <span>You haven't added a mixtape yet, slacker!</span>}
      </div>

    );};

}