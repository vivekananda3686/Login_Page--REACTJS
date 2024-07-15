// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    user: false,
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
    history.replace("/")
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    //if (username === 'rahul' && password === 'rahul@2021') {
      const userDetails = {username, password}
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      console.log(response)
      const data = await response.json()
      console.log(data)
      this.setState({
        username: '',
        password: '',
        user: 'true',
      })
      if (response.ok === true) {
        this.onSubmitSuccess()
      }
      else{
        console.log("Erorororrororo")
      //}
      }
      if(username="")
      {
        this.setState({
        user: true,
        username: '',
        password: '',
      })
        
      }
       else if(username==="")
      {
         this.setState({
        user: true,
        username: '',
        password: '',
      })
      }
    else if(password==="")
      {
         this.setState({
        user: true,
        username: '',
        password: '',
      })
      }
      else{
        this.setState({
        user: true,
        username: '',
        password: '',
      })
      }
  }

  errorDisplay = () => {
    const {user} = this.state
    console.log(user)
    if (user === false) {
      return <p></p>
    } else {
      return <p className="error-para">*Username and Password didn't match</p>
    }
  }

  render() {
    const {username, password} = this.state
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
          {this.errorDisplay()}
        </div>
      </div>
    )
  }
}

export default LoginForm
