import { Component } from 'react';
import { addMixtape } from '../utils/mixtape-api';
import './CreateMixTape.css';

export default class CreateMixTape extends Component {
  state = {
    title: '',
    youTubeLink: '',
    description: '',
    send: '',
    theme: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    try {
      const mixtape = addMixtape(this.state);
      history.push(`/mixtape/${mixtape.id}`);
    }
    catch (err) {
      console.log(err.message);
    }
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

  handleTheme = e => {
    this.setState({ theme: e.target.value });
  }



  render() {
    console.log(this.state.URL);

    return (
      <div className="PlaylistPage">
        <form className="playListForm" onSubmit={this.handleSubmit}>
          <h2>Choose your Theme</h2>
          <select name='theme' className='themeDrop'
            onChange={this.handleTheme}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>


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
              <span>Recipient</span>
              <input className="playListSendTo" placeholder="PlayList Send To" onChange={this.handleSendTo} value={this.state.send} />

            </label>
          </p>

          <button>Add</button>
        </form >

      </div>
    );
  }
}