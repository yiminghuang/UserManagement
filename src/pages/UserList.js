import React, { Component } from 'react';
import HomeLayout from '../layouts/HomeLayout';

class UserList extends  Component {
    state = {
        userList: []
    };

    componentDidMount () {
        fetch('http://localhost:3001/user')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userList: res
                });
            });
            console.log(this.userList);
    }

    componentWillReceiveProps(nextProps) {
            
    }

     handleEdit (user) {
        this.props.history.push('/user/edit/' + user.id);
  }

    handleDel (user) {
        // let confirmed = confirm(`确定要删除用户 ${user.name} 吗?`);
        const confirmed = window.confirm(`确定要删除用户 ${user.name} 吗?`); //here is ` not '

        if(confirmed) {
            fetch('http://localhost:3001/user/' + user.id, {
                method: 'delete'
            })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userList: this.state.userList.filter(item => item.id !== user.id)
                });
                alert('success delete the user!');
            })
            .catch(err => {
                console.error(err);
                alert('failure to delete user');
                });
        }
    }

    render () {
        const {userList} = this.state;

        return (

                <HomeLayout title="用户列表">
                        <table>
                            <thead>
                            <tr>
                                <th>用户ID</th>
                                <th>用户名</th>
                                <th>性别</th>
                                <th>年龄</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                userList.map((user) => {
                                return (
                                    <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <a href="javascript:void(0)"
                                        onClick={() => this.handleEdit(user)}>编辑</a>
                                        &nbsp;
                                        <a href="javascript:void(0)"
                                        onClick={() => this.handleDel(user)}>删除</a>
                                    </td>
                                    </tr>
                                );
                                })
                            }
                            </tbody>
                        </table>
            </HomeLayout>
            );
    }
}

export default UserList;