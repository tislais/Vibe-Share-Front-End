import React, { Component } from 'react';
import { getMixtapeById } from '../utils/mixtape-api';



export default class MixtapeDetail extends Component {
  state = {
    mixtape: [],
    playlist_id: ''
  };



  async componentDidMount() {
    const { match } = this.props;
    console.log(match);
    try {
      const mixtape = await getMixtapeById(match.params.id);
      console.log(match.params.id);
      console.log(mixtape);
      this.setState({ mixtape: mixtape, playlist_id: mixtape[0].playlist_id });
    }
    catch (err) {
      console.log(err);
    }
  };

  // async componentDidMount() {
  // 
  //   try {
  //     const dino = await getDino(match.params.id);
  //     this.setState({ dino: dino });
  //   }
  //   catch (err) {
  //     console.log(err.message);
  //   }
  //   finally {
  //     this.setState({ loading: false });
  //   }
  // }




  render() {
    const playlistId = this.state.playlist_id;
    console.log(this.state.playlist_id);
    return (
      <div>
        <iframe width="560" height="315" title="custom" src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

      </div >
    );
  }
}


