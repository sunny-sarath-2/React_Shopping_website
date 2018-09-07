import React, { Component } from "react";
import axios from "axios";
import API from "../services/API";
import { Link } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      loader: false
    };
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
    console.log(this.props);
    // this.props.update();
  }
  async componentDidMount() {
    let sample = await API.getSession();
    console.log(sample);
    let a = "name" in sample;
    if (!a) {
    } else {
      // this.props.history.push("/sample");
    }
    // if (
    //   localStorage.hasOwnProperty("name") &&
    //   localStorage.hasOwnProperty("password")
    // ) {
    //   console.log(localStorage.getItem("name"));
    // }
  }
  change(event) {
    if (event.target.name == "name")
      this.setState({ name: event.target.value });
    else if (event.target.name == "password") {
      this.setState({ password: event.target.value });
    }
  }
  submit() {
    this.setState({ loader: true });
    axios
      .post("http://localhost:5000/login", {
        name: this.state.name,
        password: this.state.password
      })
      .then(res => {
        if (res) {
          console.log(res);
          if (res.data.sucess) {
            // localStorage.setItem("name", this.state.name);
            // localStorage.setItem("password", this.state.password);
            // location.href = "/sample";
            // console.log(localStorage.getItem("name"));
            this.setState({ loader: false });
            this.props.history.push("/sample");
          } else {
            this.setState({ loader: false });
          }
        }
      });
  }
  render() {
    return (
      <form style={styles.form}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.change} />
        </label>
        <label>
          password:
          <input type="password" name="password" onChange={this.change} />
        </label>

        {this.state.loader ? (
          <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px" }} />
        ) : (
          <button type="submit" onClick={this.submit}>
            submit
          </button>
        )}
        <Link to="/create">
          <button>Create New Account</button>
        </Link>
      </form>
    );
  }
}

const styles = {
  input: {},
  form: {
    display: "table-caption"
  }
};

export default login;
