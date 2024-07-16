// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage:"",
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state


    if (username === '' && password === '') {
      this.setState({
        errorMessage: '*Username and Password cannot be empty',
      });
      return;
    }

    if (username === '') {
      this.setState({
        errorMessage: '*Username cannot be empty',
        password:"",
      });
      return;
    }

    if (password === '') {
      this.setState({
        errorMessage: '*Password cannot be empty',
        username:"",
      });
      return;
    }


    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.setState({
        errorMessage: '*Username and Password didn't match',
      });
    }
  };

  render() {
    const {username, password,errorMessage} = this.state
    return (
      <div className="main-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo"
            alt="website logo"
          />
          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p className="error-para">{errorMessage}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
