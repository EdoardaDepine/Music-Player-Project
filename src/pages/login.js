import { Component } from "react";
import { createUser } from "../userAPI";
import { Redirect } from "react-router-dom";
import Loading from "../components/loading.js";
//CSS

const minCharactersInputName = 3;

class Login extends Component {
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
