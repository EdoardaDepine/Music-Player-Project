import { Component } from "react";
import Header from "../components/header";
import { getUser } from "../userAPI";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
//CSS

class Profile extends Component {
  state = {
    user: {},
    isLoading: false,
  };

  render() {
    const { user, isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className='containerPorfile'>
        <Header />
        <div className='userProfile'>
          <img
            className='imageUser'
            alt='imagem do usuário'
            src={user.image}
          ></img>
          <div className='userNameProfile'>
            <h1 className='nameTitle'>Nome:</h1>
            <p>{user.name}</p>
          </div>
          <div className='userDescriptionProfile'>
            <h1 className='descriptionTitle'>Descrição:</h1>
            <p className='description'> {user.description}</p>
          </div>
          <div className='userEmailProfile'>
            <h1 className='emailTitle'>Email:</h1>
            <p>{user.email}</p>
          </div>
          <Link to='/profile/edit'>
            <button className='buttonEditProfile'>Editar Perfil</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
