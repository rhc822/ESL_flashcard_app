import React, { Component } from "react"
import AppData from "../../modules/AppData"

class Login extends Component {


  state = {
    email: "",
    password: "",
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  handleLogin = (e) => {
    e.preventDefault()
    /*
        The first part of the get puts the email and password in local storage as a single object.

        The second part of the get puts the userId into local storage as an array.
    */
    AppData.get(`user?email=${this.state.email}`)
    .then(r => {
        console.log(r)
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        })
    )
    localStorage.setItem(
        "userId", r[0].id
    )
    this.props.history.push("/");
    })

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <label
                    htmlFor="inputEmail"
                >Email address
                </label>
                <input
                    onChange={this.handleFieldChange}
                    type="email"
                    id="email"
                    placeholder="Email address"
                    required=""
                    autoFocus=""
                />
                <br />
                <br />
                <label
                    htmlFor="inputPassword"
                >Password
                </label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="password"
                    placeholder="Password"
                    required=""
                />
            </div>
            <br />
            <button
                type="submit"
            > Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login