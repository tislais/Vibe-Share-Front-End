import React, { Component } from 'react';

export default class Favorites extends Component {

  state = {
    favorites: []
  }

  render() {
    return (
      <div>
        List of user's favorite playlists.
      </div>
    );
  }
}
