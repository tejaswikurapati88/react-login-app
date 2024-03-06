// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Message extends Component {
  state = {isLogined: false}

  onLogout = () => {
    const {isLogined} = this.state
    return this.setState(() => ({isLogined: !isLogined}))
  }

  onLogin = () => {
    const {isLogined} = this.state
    return this.setState(() => ({isLogined: !isLogined}))
  }

  render() {
    const {isLogined} = this.state
    return (
      <div className="container">
        {isLogined ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
        {isLogined ? (
          <Logout onClick={this.onLogout} />
        ) : (
          <Login onClick={this.onLogin} />
        )}
      </div>
    )
  }
}

export default Message
