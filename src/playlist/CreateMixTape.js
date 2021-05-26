import { Component } from 'react';
import './CreateMixTape.css';

export default class CreateMixTape extends Component {
  state = {
    title: '',
    youTubeLink: '',
    description: '',
    send: ''
  }

  handleTitle = e => {
    this.setState({ title: e.target.value });

  }

  handleYouTubeLink = e => {
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
              <span>YouTube Link</span>
              <input className="youTubeLink" placeholder="YouTube Link" onChange={this.handleURL} value={this.state.URL} />

            </label>
          </p>

          <p>
            <label>
              <span>Playlist Description</span>
              <input className="playListDescription" placeholder="PlayList Description" onChange={this.handleDescription} value={this.state.description} />

            </label>
          </p>

          <p>
            <label>
              <span>Send To</span>
              <input className="playListSendTo" placeholder="PlayList Send To" onChange={this.handleSendTo} value={this.state.send} />

            </label>
          </p>

          <button>Add</button>
        </form >

      </div>
    );
  }
}