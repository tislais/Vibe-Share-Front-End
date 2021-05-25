import { Component } from 'react';
import './PlaylistPage.css';

export default class PlaylistPage extends Component {

  render() {

    return (
      <div className="PlaylistPage">
        <form className="playListForm">
          <h2>Choose your Theme</h2>
          <p>
            <label>
              <span>Playlist</span>
              <input className="playListForm" placeholder="Title of      Playlist" value=""
              />
            </label>
          </p>


        </form>

      </div >
    );
  }

}