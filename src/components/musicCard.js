import { Component } from "react";
import { addSong, removeSong, getFavoriteSongs } from "../favoriteSongsAPI";
import Loading from "./loading";
//CSS

class MusicCard extends Component {
  state = {
    check: false,
    isLoading: false,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    const { trackId } = this.props;
    const allMusics = await getFavoriteSongs();

    if (allMusics.some((music) => music.trackId === trackId)) {
      this.setState({ check: true });
    }

    this.setState({ isLoading: false });
  };

  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div className='card'>
        <p className='trackName'>{trackName}</p>
        <div className='containerCard'>
          <audio className='previewSong' src={previewUrl} controls></audio>
          {this.state.isLoading ? (
            <div className='checkboxMusic'>
              <Loading />
            </div>
          ) : (
            <label>
              Favorita
              <input
                type='checkbox'
                className='checkboxMusic'
                name='check'
                checked={this.state.check}
                onChange={this.handleChange}
              ></input>
            </label>
          )}
        </div>
      </div>
    );
  }
}

export default MusicCard;
