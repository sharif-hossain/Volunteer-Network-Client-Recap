import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEvent from "./components/Admin/AddEvent/AddEvent";
import RegisteredList from "./components/Admin/RegisteredList/RegisteredList";
import Login from "./components/Client/Login/Login";
import PrivateRoute from "./components/Client/PrivateRoute/PrivateRoute";
import RegEvents from "./components/Client/RegEvents/RegEvents";
import Register from "./components/Client/Register/Register";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register/:id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/regEvents">
            <RegEvents/>
          </PrivateRoute>
          <Route path="/admin">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/registeredList">
            <RegisteredList/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
