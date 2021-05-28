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
        id: 'Ursa-Major',
        alt: 'Ursa-Major'
      },
      {
        src: '/tapes/tape2.png',
        id: 'Ophiuchus',
        alt: 'Ophiuchus'
      },
      {
        src: '/tapes/tape3.png',
        id: 'Jupiter',
        alt: 'Jupiter'
      },
      {
        src: '/tapes/tape4.png',
        id: 'Pleiades',
        alt: 'Pleiades'
      },
      {
        src: '/tapes/tape5.png',
        id: 'Ceti-Alpha-5',
        alt: 'Ceti-Alpha-5'
      },
      {
        src: '/tapes/tape6.png',
        id: 'Zeta-Reticuli',
        alt: 'Zeta-Reticuli'
      },
      {
        src: '/tapes/tape7.png',
        id: 'Shai-Hulud',
        alt: 'Shai-Hulud'
      },
      {
        src: '/tapes/tape8.png',
        id: 'Stardust',
        alt: 'Stardust'
      },
      {
        src: '/tapes/tape9.png',
        id: 'Omega',
        alt: 'Omega'
      }
    ],
    theme: {
      src: '/tapes/tape1.png',
      id: 'Ursa-Major',
      alt: 'Ursa-Major'
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
          {
            theme ? <img src={theme.src} alt={theme.alt} /> : <img src="/tapes/tape1.png" alt="0" />
          }
          <h2>Theme</h2>
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
              <span>Mixtape Title</span>
              <input className="playListForm" placeholder="Mixtape Title..." onChange={this.handleTitle} value={this.state.title} />

            </label>
          </p>

          <p>
            <label>
              <span>YouTube Playlist URL</span>
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