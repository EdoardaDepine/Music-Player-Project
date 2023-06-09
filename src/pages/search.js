import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import searchAlbumsAPI from "../searchAlbumsAPI";
import Loading from "../components/loading";
import "../style/search.css";

const minCharactersInputArtist = 2;

class Search extends Component {
  state = {
    habilityButtonSearch: true,
    nameArtist: "",
    albums: null,
    isLoading: false,
    searchArtistName: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.verifyInputArtist()
    );
  };

  verifyInputArtist = () => {
    if (this.state.nameArtist.length >= minCharactersInputArtist) {
      return this.setState({ habilityButtonSearch: false });
    } else {
      return this.setState({ habilityButtonSearch: true });
    }
  };

  onClickButtonSearch = async () => {
    this.setState({ isLoading: true });
    const albunsAPI = await searchAlbumsAPI(`${this.state.nameArtist}`);
    this.setState({ albums: albunsAPI });
    this.setState({ isLoading: false });
    this.setState({ searchArtistName: this.state.nameArtist });
    this.setState({ nameArtist: "" });
  };

  albumsList = () => {
    const { albums } = this.state;
    if (albums === null)
      return (
        <p className='searchResults'>Pesquise para encontrar seus álbuns!</p>
      );
    if (albums.length === 0)
      return <p className='searchResults'>Nenhum álbum foi encontrado!</p>;

    return (
      <div>
        <p className='searchResults'>
          Resultado de álbuns de: {this.state.searchArtistName}
        </p>
        <div className='albumList'>
          {albums.map((album) => (
            <div key={album.collectionId}>
              <div className='albumCard'>
                <img
                  className='imageAlbum'
                  src={album.artworkUrl100}
                  alt={album.collectionName}
                ></img>
                <Link className='link' to={`/album/${album.collectionId}`}>
                  <p className='nameAlbum'>{album.collectionName}</p>
                </Link>
                <p className='artistNameAlbum'>{album.artistName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Header />
        <div className='searchContainer'>
          <label className='searchArtistInput'>
            <input
              className='nameArtistInput'
              placeholder='Nome do artista ou banda'
              type='text'
              name='nameArtist'
              value={this.state.nameArtist}
              onChange={this.handleChange}
            ></input>
          </label>
          <button
            className='searchArtistButton'
            type='button'
            disabled={this.state.habilityButtonSearch}
            onClick={this.onClickButtonSearch}
          >
            Procurar
          </button>
        </div>
        <div className='searchResults'>
          {this.state.isLoading ? <Loading /> : <div>{this.albumsList()}</div>}
        </div>
      </div>
    );
  }
}

export default Search;
