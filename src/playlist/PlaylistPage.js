import { Component } from 'react';
import './PlaylistPage.css';

export default class PlaylistPage extends Component {
  state = {
    title: ''
  }

  handleTitle = e => {
    this.setState({ title: e.target.value });

  }

  render() {
    console.log(this.state.title);

    return (
      <div className="PlaylistPage">
        <form className="playListForm">
          <h2>Choose your Theme</h2>
          <p>
            <label>
              <span>Playlist</span>
              <input className="playListForm" placeholder="Title of Playlist" onChange={this.handleTitle} value={this.state.title} />

            </label>
          </p>


        </form>

      </div >
    );
  }

}