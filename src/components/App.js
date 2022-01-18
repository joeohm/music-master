import React, { Component } from "react";
import { fetchArtist, fetchTopTrack } from "../util/helpers";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

class App extends Component {
  state = { artist: null, tracks: [] };

  searchArtist = (artistQuery) => {
    // 1. Call the artist fetcher and update state with artist info
    fetchArtist(artistQuery)
      .then((data) => {
        if (data.artists.total === 0) {
          this.setState({ artist: null });
          return;
        }

        const artist = data.artists.items[0];
        this.setState({ artist });
        const id = this.state.artist.id;

        // 2. Call the top-tracks fetcher and update state with top-tracks info
        fetchTopTrack(id)
          .then((data) => {
            this.setState({ tracks: data.tracks });
            console.log(this.state);
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));

    // 3. Empty the search field value
    document.querySelector(".artist-search").value = "";
  };

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
