import { Component } from "react";
import Header from "../components/header";
import Loading from "../components/loading";
import { getUser, updateUser } from "../userAPI";
import { withRouter } from "react-router-dom";
//CSS

const minCharactersInputs = 3;

class ProfileEdit extends Component {
  state = {
    isLoading: false,
    name: "",
    description: "",
    email: "",
    image: "",
    habilityButton: true,
    redirect: false,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState(
      {
        name: user.name,
        description: user.description,
        email: user.email,
        image: user.image,
      },
      this.verifyInputs
    );

    this.setState({ isLoading: false });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.verifyInputs()
    );
  };

  verifyInputs = () => {
    const { name, image, description, email } = this.state;
    if (
      name.length >= minCharactersInputs &&
      image.length >= minCharactersInputs &&
      description.length >= minCharactersInputs &&
      email.length >= minCharactersInputs
    ) {
      this.setState({ habilityButton: false });
    } else {
      this.setState({ habilityButton: true });
    }
  };

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
