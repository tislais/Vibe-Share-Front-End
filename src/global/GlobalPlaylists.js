import { Component } from 'react';
import { getAllMixtapes } from '../utils/mixtape-api';
import { Link } from 'react-router-dom';
import './GlobalPlaylists.css';

export default class GlobalPlaylists extends Component {

  state = {
    mixtapes: []
  }

  async componentDidMount() {
    try {
      const mixtapes = await getAllMixtapes();
      this.setState({ mixtapes: mixtapes });
    }
    catch (err) {
      console.log(err);
    }
  }
  
  render() {
    return (
      <div className="GlobalPlaylists">
        <ul id="all-mix-tapes">
          {(this.state.mixtapes).map(mixtape => (
            <li key={mixtape.id} className={mixtape.theme}>
              <Link to={`/mixtape/${mixtape.id}`}>
                <img src={`/tapes/${mixtape.theme}.png`} alt="alt" />
                <span>{mixtape.title}</span>
              </Link>
            </li>
          ))}

        </ul>
      </div>
    );
  }

}