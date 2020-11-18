import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }


  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleInput} name="username" value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={event => this.handleInput(event)} name="password" value={this.state.password} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
