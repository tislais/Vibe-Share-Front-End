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
        <button id="createPlaylist" onClick={this.handleNav}> + Create new mixtape</button>

        Search for a playlist on YouTube: 
        <input id="yt-search-input" value={this.state.value} onChange={this.handleChange}/><button id="yt-search-button" onClick={()=> window.open(`https://www.youtube.com/results?search_query=${input}%2C+playlist`, '_blank')}>Search YouTube</button>

        <button id="yt-playlist-button" onClick={()=> window.open('https://www.youtube.com/feed/library', '_blank')}>See my playlists on YouTube</button>
        

        {mixtapes

          ? <ul id="my-mix-tapes">
            {mixtapes.map(mixtape => (
              <li key={mixtape.id}>
                <Link to={`/mixtape/${mixtape.id}`}>
                  <span>{mixtape.title}</span>
                  <span>{mixtape.note}</span>
                  <span>{mixtape.recipient}</span>
                </Link>
              </li>
            ))}
          </ul>
          : <span>You haven't added a mixtape yet, slacker!</span>}
      </div>

    );
  };

}

