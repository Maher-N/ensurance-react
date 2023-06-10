
import React, { Component } from "react";
import {  connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Home from "./Components/Home.component.";
import Profile from "./Components/profile.component";
import BoardUser from "./Components/boardUser.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./Components/helpers/history";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      shٍowModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  UNSAFE_componentWillMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles?.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles?.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {

    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    //console.log(this.props.user)

  
    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              bezKoder
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {this.props.user && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>
            {this.props.user ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {this.props.user.name}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={(e) => this.logOut(e)}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.auth);

  const { user } = state.auth;
  return {
    user,
  };
  
}


export default connect(mapStateToProps)(App);