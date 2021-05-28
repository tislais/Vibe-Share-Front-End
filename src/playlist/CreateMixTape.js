import { Component } from 'react';
import { addMixtape } from '../utils/mixtape-api';
import './CreateMixTape.css';


export default class CreateMixTape extends Component {
  state = {
    title: '',
    playlist_id: '',
    note: '',
    recipient: '',
    slides: [
      {
        src: '/tapes/tape1.png',
        id: 'tape-one',
        alt: 'tape one'
      },
      {
        src: '/tapes/tape2.png',
        id: 'tape-two',
        alt: 'tape-two'
      },
      {
        src: '/tapes/tape3.png',
        id: 'tape-three',
        alt: 'tape-three'
      },
      {
        src: '/tapes/tape4.png',
        id: 'tape-four',
        alt: 'tape-four'
      },
      {
        src: '/tapes/tape5.png',
        id: 'tape-five',
        alt: 'tape-five'
      },
      {
        src: '/tapes/tape6.png',
        id: 'tape-six',
        alt: 'tape-six'
      },
      {
        src: '/tapes/tape7.png',
        id: 'tape-seven',
        alt: 'tape-seven'
      },
      {
        src: '/tapes/tape8.png',
        id: 'tape-eight',
        alt: 'tape-eight'
      },
      {
        src: '/tapes/tape9.png',
        id: 'tape-nine',
        alt: 'tape-nine'
      }
    ],
    theme: {
      src: '/tapes/tape1.png',
      id: 0,
      alt: 0
    }
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
      <div className="PlaylistPage">
        <form className="playListForm" onSubmit={this.handleSubmit}>
          <h2>Choose your Theme</h2>
          {
            theme ? <img src={theme.src} alt={theme.alt} /> : <img src="/tapes/tape1.png" alt="0" />
          }
          <select name='theme' className='themeDrop'
            onChange={this.handleTheme}>
            {
              slides.map((_, i) => {
                return <option value={slides[i].alt.toString()}>{slides[i].alt.toString()}</option>;
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