// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <div className="nav-items-container">
            <div className="nav-item">
              <p>Home</p>
            </div>
            <div className="nav-item">
              <p>Products</p>
            </div>
            <div className="nav-item">
              <p>Cart</p>
            </div>
            <div>
              <button className="logout-button">Logout</button>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div>
            <h1>Clothes That Get YOU Noticed</h1>
            <p>
              Fashion is part of the daily air and it does not quite help that
              it changes all the time.
            </p>
            <button className="logout-button">Shop Now</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
