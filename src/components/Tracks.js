import React, { Component } from "react";

class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null };

  playAudio = (previewUrl) => () => {
    const audio = new Audio(previewUrl);

    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();
      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        setTimeout(() => {
          audio.play();
          this.setState({ audio, playingPreviewUrl: previewUrl });
        }, 750);
      }
    }
  };

  componentWillUnmount() {
    this.setState({ audio: null });
  }

  trackIcon = (track) => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }
    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span>| |</span>;
    }

    return <span>&#9654;</span>;
  };

  render() {
    const { tracks } = this.props;

    return (
      <div>
        <hr
          style={{
            marginTop: "4rem",
          }}
        />
        {tracks.map((track) => {
          const { name, album, id, preview_url } = track;

          return (
            <div
              key={id}
              onClick={this.playAudio(preview_url)}
              className={`track ${track.preview_url ? "track-pointer" : ""}`}
            >
              <img
                src={album.images[0].url}
                alt="track-image"
                className="track-image"
              />
              <p className="track-text">{name}</p>
              <p className="track-icon">{this.trackIcon(track)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
