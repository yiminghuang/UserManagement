import React, { Component } from 'react';
import './App.css';
import { Route }  from 'react-router-dom';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';
import UserEditPage from './pages/UserEdit';
import { BrowserRouter } from 'react-router-dom';
import UserAddPage from './pages/UserAdd';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route path="/" exact component = {HomePage} />   
            <Route path="/user/add" exact component={UserAddPage}/>
            <Route  path="/user/list" exact component = {UserListPage}/>
            <Route  path="/user/edit/:id" exact component = {UserEditPage}/>
          </div>
  </BrowserRouter>

    );
  }
}

export default App;
