import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext } from 'react';
import Order from './components/Customer/Order/Order';
import Review from './components/Customer/Review/Review';
import CustomerService from './components/Customer/CustomerService/CustomerService';
import AddService from './components/AdminPanel/AddService/AddService';
import CustomerList from './components/AdminPanel/CustomerList/CustomerList';
import MakeAdmin from './components/AdminPanel/MakeAdmin/MakeAdmin';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    message: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order/:title">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/service">
            <CustomerService></CustomerService>
          </PrivateRoute>
          <PrivateRoute path="/customerList">
            <CustomerList></CustomerList>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
