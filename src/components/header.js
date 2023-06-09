import { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/loading.js";
import { getUser } from "../userAPI";
import "../style/header.css";

class Header extends Component {
  state = {
    user: "",
  };

  async componentDidMount() {
    const userLocalStorage = await getUser();
    this.setState({ user: userLocalStorage });
  }

  render() {
    return (
      <header className='header'>
        <div className='container'>
          <p className='titleSite'>
            <strong>Muisic</strong>tunes
          </p>
          <div className='userName'>
            <p>
              {this.state.user ? `user: ${this.state.user.name}` : <Loading />}
            </p>
          </div>
        </div>
        <div className='links'>
          <div className='linkToSearch'>
            <Link to='/search' className='search'>
              Pesquisa
            </Link>
          </div>
          <div className='linkToFavorites'>
            <Link to='/favorites' className='favorites'>
              Favoritas
            </Link>
          </div>
          <div className='linkToProfile'>
            <Link to='/profile' className='profile'>
              Perfil
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
