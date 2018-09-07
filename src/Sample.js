import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "./components/container";
import axios from "axios";
class sample extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      data: []
    };
    this.logout = this.logout.bind(this);
    this.update = this.props.update;
    this.product = this.product.bind(this);
  }
  async componentDidMount() {
    console.log("CDM");
    axios.get("https://reqres.in/api/users?page=2").then(res => {
      if (res != null) {
        console.log(res.data);
        this.setState({ data: res.data.data });
      }
    });
  }
  product() {
    this.props.history.push("/sample");
  }
  async logout() {
    console.log("hello");
    this.props.history.push("/");
    localStorage.clear();
    // location.href = "/";
  }
  render() {
    return (
      <div>
        {/* <h1>hello</h1>
        <Link to="/">
          <button onClick={this.logout}>Logout</button>
        </Link>
        <Link to="/create">
          <button onClick={this.logout}>Add new user</button>
        </Link> */}
        <Container
          update={this.update}
          product={this.product}
          {...this.state}
        />
      </div>
    );
  }
}

export default sample;
