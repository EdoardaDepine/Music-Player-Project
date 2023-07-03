import { Component } from "react";
import Header from "../components/header";
import Loading from "../components/loading";
import { getUser, updateUser } from "../userAPI";
import { withRouter } from "react-router-dom";
//CSS

const minCharactersInputs = 3;

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <form className='containerProfileEdit'>
              <div className='containerImageEdit'>
                <label>Imagem:</label>
                <input
                  className='imageEditInput'
                  type='text'
                  name='image'
                  value={this.state.image}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className='containerNameEdit'>
                <label>Nome:</label>
                <input
                  className='nameEditInput'
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className='containerDescriptionEdit'>
                <label>Descrição:</label>
                <textarea
                  className='descriptionEditInput'
                  placeholder='insira uma descrição sobre você'
                  type='text'
                  name='description'
                  value={this.state.description}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className='containerEmailEdit'>
                <label>Email:</label>
                <input
                  className='emailEditInput'
                  type='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
              </div>
              <button
                className='saveButton'
                type='button'
                onClick={this.updateProfile}
                disabled={this.state.habilityButton}
              >
                Salvar
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileEdit);
