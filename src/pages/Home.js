import React, {Component } from 'react';
import { Link } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';

class Home extends Component {
  render () {
    return (

       <HomeLayout title = "welcome">
          <Link to="/user/list">用户列表</Link>
            <br/>
            <Link to="/user/add">add users</Link>
       </HomeLayout>

    );
  }
}

export default Home;