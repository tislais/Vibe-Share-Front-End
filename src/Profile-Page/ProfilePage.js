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
        <button id="createPlaylist" onClick={this.handleNav}> + Create Mixtape</button>

        <p>You will need a Youtube playlist URL to create a mixtape!</p>

        <span>Find a playlist on Youtube:</span>
        <div className="Search">
          <input id="yt-search-input" value={this.state.value} onChange={this.handleChange}/><button id="yt-search-button" onClick={()=> window.open(`https://www.youtube.com/results?search_query=${input}%2C+playlist&sp=EgIQAw%253D%253D`, '_blank')}>Search YouTube</button>
        </div>

        <span>Find a playlist you've already created:</span>
        <div id="yt-playlist-button" onClick={()=> window.open('https://www.youtube.com/feed/library', '_blank')}>See my playlists on YouTube</div>
        

        {mixtapes
          ? 
          <ul id="MyMixtapes">
            <h2>My Mixtapes:</h2>
            {mixtapes.map(mixtape => (
              <li key={mixtape.id}>
                <Link to={`/mixtape/${mixtape.id}`}>
                  <span>For: {mixtape.recipient}</span>
                  <span>{mixtape.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          : <span>You haven't added a mixtape yet, slacker!</span>}
      </div>

    );
  };

}

