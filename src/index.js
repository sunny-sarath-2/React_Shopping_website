import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import Sample from "./Sample";
import create from "./create";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "check",
      cart: 0
    };
    this.update = this.update.bind(this);
    this.product = this.product.bind(this);
  }
  update() {
    this.setState({ cart: this.state.cart + 1 });
    console.log("hello update");
  }
  product() {
    console.log("hello");
  }
  render() {
    return (
      <Router>
        <div>
          <Header style={{ flex: 1 }} data={this.state} />
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/sample" component={Login} />
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <Sample
                    {...props}
                    product={this.product}
                    update={this.update}
                  />
                );
              }}
            />
            <Route exact path="/create" component={create} />
          </Switch>
          <Footer style={{ flex: 1 }} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
