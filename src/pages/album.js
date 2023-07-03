import { Component } from "react";
import Header from "../components/header";
import Loading from "../components/loading";
import getMusics from "../musicsAPI";
import MusicCard from "../components/musicCard.js";
//CSS

class Album extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className='musicsList'>
            <img
              alt='imagem do Álbum'
              src={this.state.musics[0].artworkUrl100}
            ></img>
            <h1 className='albumName'>{this.state.musics[0].collectionName}</h1>
            <p className='artistName'>{this.state.musics[0].artistName}</p>
            <div>
              {this.state.musics
                .filter((music) => music.trackId)
                .map((music) => (
                  <div>
                    <MusicCard
                      key={music.trackId}
                      trackId={music.trackId}
                      music={music}
                      trackName={music.trackName}
                      previewUrl={music.previewUrl}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Album;
