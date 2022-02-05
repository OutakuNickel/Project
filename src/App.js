import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import Dashboard from "./Components/Dashboard/Dashboard";
import PhoneRegister from "./Components/Phone/PhoneRegister";
import UserProfile from "./Components/UserProfile/UserProfile";
import NavBar from "./Components/NavBar/navBar";
import Events from "./Components/Events/Events";
import LandingPage from "./Components/LandingPage/LandingPage"
function App() {
  return (
    <div className="app">
      <Router>
      {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/phoneVerification" component={PhoneRegister} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
