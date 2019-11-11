import React from "react";
import fixed_logo from "./components/fixed_logo.PNG";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/loginForm/loginForm";
import Email from "./components/Register/emailAuthentication";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import "./App.css";
import SearchContainer from "./containers/SearchContainer";

function App() {
  const state = {
    isLogined: false
  };
  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');

  // const handleIdChange = (e) => {
  //     setId(e.target.value);
  //     console.log(e.target.value);
  // }

  // const handlePwChange = (e) => {
  //     setPw(e.target.value);
  // }

  return (
    <Router>
      <div className="top_fixed">
        <img id="fixed_logo" src={fixed_logo} alt="" />
        <SearchContainer />
      </div>
      <Route
        exact
        path="/"
        render={props => (
          <Login
            ONCLICK={() => {
              state.isLogined = !state.isLogined;
              if (state.isLogined === true) {
                window.location.href = window.location + "home";
              }
            }}
          />
        )}
      />
      <Route exact path="/email" component={Email} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
