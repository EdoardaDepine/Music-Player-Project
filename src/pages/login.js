import { Component } from "react";
import { createUser } from "../userAPI";
import { Redirect } from "react-router-dom";
import Loading from "../components/loading.js";
import "../style/login.css";

const minCharactersInputName = 3;

class Login extends Component {
  state = {
    habilityButtonLogin: true,
    nameLogin: "",
    logged: false,
    isLoading: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState(
      {
        [name]: value,
      },
      () => this.verifyInputNameLogin()
    );
  };

  onClickButtonLogin = async () => {
    this.setState({ isLoading: true });
    await createUser({ name: this.state.nameLogin });
    this.setState({ logged: true });
  };

  verifyInputNameLogin = () => {
    if (this.state.nameLogin.length >= minCharactersInputName) {
      return this.setState({ habilityButtonLogin: false });
    } else {
      return this.setState({ habilityButtonLogin: true });
    }
  };

  redirectToSearch = () => {
    if (this.state.logged) return <Redirect to='/search' />;
    return <Loading />;
  };

  render() {
    return this.state.isLoading ? (
      this.redirectToSearch()
    ) : (
      <div className='containerLogin'>
        <label className='loginNameInput'>
          <input
            placeholder='Nome'
            type='text'
            name='nameLogin'
            className='nameLogin'
            value={this.state.nameLogin}
            onChange={this.handleChange}
          ></input>
        </label>
        <button
          type='button'
          className='loginSubmitButton'
          disabled={this.state.habilityButtonLogin}
          onClick={this.onClickButtonLogin}
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
