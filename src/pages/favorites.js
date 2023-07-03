import { Component } from "react";
import Header from "../components/header";
import { getFavoriteSongs } from "../favoriteSongsAPI";
import Loading from "../components/loading";
import MusicCard from "../components/musicCard";
//CSS

class Favorites extends Component {
  state = {
    isLoading: true,
    musics: [],
  };

  async componentDidMount() {
    const favoritesMusics = await getFavoriteSongs();
    this.setState({ musics: favoritesMusics });
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className='pageAlbum'>
        <Header />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            {this.state.musics
              .filter((music) => music.trackId)
              .map((music) => (
                <>
                  <div className='cardMusicAndAlmbum'>
                    <img alt='imagem do Álbum' src={music.artworkUrl100}></img>
                    <MusicCard
                      key={music.trackId}
                      trackId={music.trackId}
                      music={music}
                      trackName={music.trackName}
                      previewUrl={music.previewUrl}
                    />
                  </div>
                </>
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default Favorites;
