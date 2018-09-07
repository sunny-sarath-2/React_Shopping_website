import React, { Component } from "react";
import axios from "axios";
import API from "../services/API";
class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      phone: "",
      loader: false
    };
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }
  async componentDidMount() {
    // let sample = await API.getSessionInsert();
    axios.get("https://reqres.in/api/users?page=2").then(res => {
      // console.log(res.data.data);
      res.data.data.map(number => {
        console.log(number.avatar);
      });
    });
    // console.log(sample);
  }
  change(field, e) {
    var obj = {};
    obj[field] = e.target.value;
    this.setState(obj);
    console.log(obj);
  }
  submit() {
    console.log(this.state);
    this.setState({ loader: true });
    axios
      .post("http://localhost:5000/insert", {
        name: this.state.name,
        password: this.state.password,
        phone: this.state.phone
      })
      .then(res => {
        if (res) {
          console.log(res.data);
          // if (res.data.sucess) {
          //   location.href = "/sample";
          // }
          this.setState({ loader: false });
        }
      });
  }

  render() {
    return (
      <form style={styles.form}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={e => {
              this.change("name", e);
            }}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={this.state.password}
            onChange={e => {
              this.change("password", e);
            }}
          />
        </label>
        <label>
          phone:
          <input
            type="number"
            value={this.state.phone}
            onChange={e => {
              this.change("phone", e);
            }}
          />
        </label>
        <button type="button" onClick={this.submit}>
          submit
        </button>
      </form>
    );
  }
}

export default create;

const styles = {
  input: {},
  form: {
    display: "table-caption"
  }
};
