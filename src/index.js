import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
// import UserAddPage from './pages/UserAdd';
// import HomePage from './pages/Home';
// import UserListPage from './pages/UserList';
// import UserEditPage from './pages/UserEdit';
// import { BrowserRouter} from 'react-router-dom';
import App from './App';

// ReactDOM.render((
//     // <Router history= { hashHistory }>
//             <Route path="/" component = {HomePage} />   
//             <Route path="/user/add" component={UserAddPage}/>
//             <Route history= { hashHistory } path="user/list" component = {UserListPage}/>
//             <Route  history= { hashHistory } path="/user/edit/:id" component = {UserEditPage}/>
//     </Router>
// ), document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render((

        <App/>
 
), document.getElementById('root'));