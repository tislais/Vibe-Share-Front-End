import { Component } from 'react';
import { getMixtapesByUserId } from '../utils/mixtape-api.js';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

export default class ProfilePage extends Component {

  state = {
    userName: '',
    userId: '',
    mixtapes: [],
    input: ''
  }
  //loading: false ???

  async componentDidMount() {
    try {
      const localStorageUserId = window.localStorage.getItem('USER_ID');
      const mixtapes = await getMixtapesByUserId(localStorageUserId);
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

  handleChange = async (event) => {
    this.setState({ input: event.target.value });
  }

  render() {

    // if any mixtapes created, show them in a list
    // if not...

    const { mixtapes, input } = this.state;
    const { userName } = this.props;
    return (
      <div className="ProfilePage">
        <h1>Welcome, {userName}</h1>

        {/*on click module appears. redirect to "create page"*/}

        <p>Grab a YouTube playlist URL!</p>

        <div className="Search">
          <input id="yt-search-input" value={this.state.value} onChange={this.handleChange} placeholder="Find a playlist on YouTube"/><button id="yt-search-button" onClick={()=> window.open(`https://www.youtube.com/results?search_query=${input}%2C+playlist&sp=EgIQAw%253D%253D`, '_blank')}><i class="fas fa-search"></i></button>
        </div>

        <div id="yt-playlist-button" onClick={()=> window.open('https://www.youtube.com/feed/library', '_blank')}>Already created a playlist?</div>
        
        <button id="createPlaylist" onClick={this.handleNav}> + Create Mixtape</button>

        <h2>My Mixtapes:</h2>
        {mixtapes
          ?
          <ul id="MyMixtapes">
            {mixtapes.map(mixtape => (
              <li key={mixtape.id}>
                <Link to={`/mixtape/${mixtape.id}`}>
                  <span>For: {mixtape.recipient}</span>
                  <span>{mixtape.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          : <span className="Slacker">You haven't added a mixtape yet, slacker!</span>}
      </div>

    );
  };

}

