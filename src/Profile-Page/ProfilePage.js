import { Component } from 'react';
import { getMixtapesByUserId } from '../utils/mixtape-api.js';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

export default class ProfilePage extends Component {

  state = {
    mixtapes: [],
    input: ''
  }
  //loading: false ???

  async componentDidMount() {
    try {
      const { userId } = this.props;
      const mixtapes = await getMixtapesByUserId(userId);
      this.setState({ mixtapes: mixtapes });
    }
    catch (err) {
      console.log(err);
    }
  }

  handleNav = async () => {
    const { history } = this.props;
    history.push('/create-mixtape');
  }

  handleChange = async (event) => {
    this.setState({ input: event.target.value });
  }

  handleSearch = () => {
    const { input } = this.state;
    window.open(`https://www.youtube.com/results?search_query=${input}%2C+playlist&sp=EgIQAw%253D%253D`, '_blank')
  }

  render() {
    // if any mixtapes created, show them in a list
    // if not...  ...then what?
    const { mixtapes, input } = this.state;
    const { userName } = this.props;

    return (
      <div className="ProfilePage">

        <h1>Welcome, {userName}</h1>

        {/*on click module appears. redirect to "create page"*/}

        <p>Grab a YouTube playlist URL!</p>

        <div className="Search">
          <input id="yt-search-input" 
            placeholder="Find a playlist on YouTube"
            value={this.state.value} 
            onChange={this.handleChange} 
          />

          <a id="yt-search-button" 
            href={`https://www.youtube.com/results?search_query=${input}%2C+playlist&sp=EgIQAw%253D%253D`}
            target="_blank">
              <i class="fas fa-search"></i>
          </a>
        </div>

        <a id="yt-playlist-button" 
          href="https://www.youtube.com/feed/library" 
          target="_blank">
          Already created a playlist?
        </a>
        
        <Link to="/create-mixtape"> + Create Mixtape</Link>

        <h2>My Mixtapes:</h2>
        {/* 0 is falsey */}
        {mixtapes
          ? <ul id="MyMixtapes">
              {mixtapes.map(mixtape => (
                <li key={mixtape.id}>
                  <Link to={`/mixtape/${mixtape.id}`}>
                    <span>For: {mixtape.recipient}</span>
                    <span>{mixtape.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

          : <span className="Slacker">
              You haven't added a mixtape yet, slacker!
            </span>
        }
      </div>

    );
  };

}

