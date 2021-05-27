import { Component } from 'react';
import { addMixtape } from '../utils/mixtape-api';
import './CreateMixTape.css';
import { Carousel } from '3d-react-carousal';

export default class CreateMixTape extends Component {
  state = {
    title: '',
    playlist_id: '',
    note: '',
    recipient: '',
    slides: [<img src="/tapes/tape1.png" value="0" alt='0' />, <img src="/tapes/tape2.png" value="1" alt='1' />, <img src="/tapes/tape3.png" alt='2' />, <img src="/tapes/tape4.png" alt='3' />, <img src="/tapes/tape5.png" alt='4' />, <img src="/tapes/tape6.png" alt='5' />, <img src="/tapes/tape7.png" alt='6' />, <img src="/tapes/tape8.png" alt='7' />, <img src="/tapes/tape9.png" alt='8' />, <img src="/tapes/tape10.png" alt='9' />],
    theme: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    try {
      const mixtape = await addMixtape(this.state);
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
      theme: this.state.slides.filter((item, i) => {
        console.log(i.toString() === e.target.value);
        if (i.toString() === e.target.value) return item;
        else return false;
        // return i === e.target.value;
      })
    });
  }

  handleClick = e => {
    console.log(e);
  }

  render() {
    console.log(this.state.theme);
    // let slides = [
    //   <img src="/tapes/tape1.png" />, <img src="/tapes/tape2.png" />, <img src="/tapes/tape3.png" />, <img src="/tapes/tape4.png" />, <img src="/tapes/tape5.png" />, <img src="/tapes/tape6.png" />, <img src="/tapes/tape7.png" />, <img src="/tapes/tape8.png" />, <img src="/tapes/tape9.png" />, <img src="/tapes/tape10.png" />];
    const { slides, theme } = this.state;
    console.log(theme[0]);
    return (
      <div className="PlaylistPage">
        <form className="playListForm" onSubmit={this.handleSubmit}>
          <h2>Choose your Theme</h2>

          <Carousel onClick={this.handleClick} slides={slides} autoplay={false} interval={1000} />
          {theme ? theme : <img src='/tapes/tape1.png' alt='base' />}
          {/* <img src={this.state?.theme[0].img.src} alt='biscuit' /> */}
          <select name='theme' className='themeDrop'
            onChange={this.handleTheme}>
            {/* <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> */}
            {
              slides.map((_, i) => {
                return <option value={`${i}`}>{i}</option>;
              })
            }
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
              <input className="playListSendTo" placeholder="PlayList Send To" onChange={this.handleSendTo} value={this.state.recipient} />

            </label>
          </p>

          <button>Add</button>
        </form >

      </div>
    );
  }
}