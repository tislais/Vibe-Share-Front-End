import { Component } from 'react';
import { addMixtape } from '../utils/mixtape-api';
import { slides } from './slides.js';
import './CreateMixTape.css';


export default class CreateMixTape extends Component {
  state = {
    title: '',
    playlist_id: '',
    note: '',
    recipient: '',
    theme: slides[0]
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    try {
      const mixtape = await addMixtape({ ...this.state, theme: this.state.theme.id });
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
    this.setState({ playlist_id: e.target.value });

  }

  handleDescription = e => {
    this.setState({ note: e.target.value });

  }

  handleSendTo = e => {
    this.setState({ recipient: e.target.value });
  }

  handleTheme = e => {
    console.log(e.target.value);
    this.setState({
      theme: this.state.slides.find(item => {
        console.log('e.target.value: ', e.target.value);
        console.log('item: ', item);
        if (item.id.toString() === e.target.value){
          return item;
        } else return null;
      })
    });
  }

  handleClick = e => {
    console.log(e);
  }

  render() {
    const { slides, theme } = this.state;
    return (
      <div className="CreateMixtapePage">
        <form className="CreateMixtapeForm" onSubmit={this.handleSubmit}>
          {/* I don't think theme can be null or undefined? */}
          <img src={theme.src} alt={theme.alt} className={theme.alt}/>

          <p>
            <label>
              <span>Theme</span>
              <select name='theme' className='themeDrop' onChange={this.handleTheme}>
                {/* options use their text content as value if not provided, so simplify */}
                {/* Don't use a map like slides[i], just use slide */}
                {slides.map(slide => <option>{slide.alt}</option>)}
              </select>
            </label>
          </p>

          <p>
            <label>
              <span>Mixtape Title</span>
              <input className="playListForm" 
                placeholder="Mixtape Title..." 
                onChange={this.handleTitle} 
                value={this.state.title} 
              />
            </label>
          </p>

          <p>
            <label>
              <span>Playlist URL</span>
              <input className="youTubeLink" placeholder="YouTube Playlist URL..." onChange={this.handleURL} value={this.state.URL} />

            </label>
          </p>

          <p>
            <label>
              <span>Addressed to</span>
              <input className="playListSendTo" placeholder="Addressed to..." onChange={this.handleSendTo} value={this.state.recipient} />

            </label>
          </p>

          <p>
            <label>
              <span>Personal note</span>
              <textarea maxlength="500" className="playListDescription" placeholder="Personal note..." onChange={this.handleDescription} value={this.state.description} />

            </label>
          </p>

          <button>Finish</button>
        </form >

      </div>
    );
  }
}