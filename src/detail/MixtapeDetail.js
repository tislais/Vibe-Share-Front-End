import React, { Component } from 'react';
import { getMixtapeById, getMixtapeItemsById } from '../utils/mixtape-api';
import './MixtapeDetail.css';

export default class MixtapeDetail extends Component {
  state = {
    mixtape: [],
    playlist_id: '',
    mixtapeItems: []
  };

  async componentDidMount() {
    const { match } = this.props;
    try {
      const mixtape = await getMixtapeById(match.params.id);
      this.setState({ mixtape: mixtape[0], playlist_id: mixtape[0].playlist_id.split('list=')[1] });
      const mixtapeItems = await getMixtapeItemsById(this.state.playlist_id);
      this.setState({ mixtapeItems: mixtapeItems });
    }
    catch (err) {
      console.log(err);
    }
  };


  render() {

    const { playlist_id, mixtapeItems, mixtape } = this.state;
    console.log(mixtape.note);

    return (
      <div className={`MixtapeDetail ${mixtape.theme}`}>
        <div className="MixtapeDetailInner">
          <div className="MixtapeTitle">
            <p className="title">{mixtape.title}</p>
          </div>
          <iframe width="600" height="315" title="custom" src={`https://www.youtube.com/embed/videoseries?list=${playlist_id}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



          <div className="MixtapeNote">
            <div className="MixtapeRecipient">
              For: {mixtape.recipient}
            </div>
            <p>{mixtape.note}</p>
          </div>

          <div className="MixtapeItems">
            {mixtapeItems.map(item => (
              <li key={item.snippet.title}>
                <span>{item.snippet.title}</span>
              </li>
            ))}
          </div>
        </div>
      </div >
    );
  }
}


