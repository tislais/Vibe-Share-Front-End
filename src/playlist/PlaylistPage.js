import { Component } from 'react';
import './PlaylistPage.css';

export default class PlaylistPage extends Component {
  state = {
    title: '',
    URL: '',
    description: '',
    send: ''
  }

  handleTitle = e => {
    this.setState({ title: e.target.value });

  }

  handleURL = e => {
    this.setState({ URL: e.target.value });

  }

  handleDescription = e => {
    this.setState({ description: e.target.value });

  }

  handleSendTo = e => {
    this.setState({ send: e.target.value });
  }

  render() {
    console.log(this.state.URL);

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

          <p>
            <label>
              <span>PlaylistURL</span>
              <input className="playListURL" placeholder="PlayList URL" onChange={this.handleURL} value={this.state.URL} />

            </label>
          </p>

          <p>
            <label>
              <span>PlaylistDescription</span>
              <input className="playListDescription" placeholder="PlayList Description" onChange={this.handleDescription} value={this.state.description} />

            </label>
          </p>

          <p>
            <label>
              <span>PlaylistSendTo</span>
              <input className="playListSendTo" placeholder="PlayList Send To" onChange={this.handleSendTo} value={this.state.send} />

            </label>
          </p>


        </form >

      </div >
    );
  }

}