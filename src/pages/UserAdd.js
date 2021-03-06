import React, { Component } from 'react';
// import FormItem from '../components/FormItem';
// import formProvider from '../utils/formProvider';
// import PropTypes from 'prop-types';
// import {withRouter}from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';


//UserAdd = formProvider(fields)(UserAdd);
class UserAdd extends Component {
   

    // handleSubmit (e) {
    //     e.preventDefault();

    //     // const { form : {name, age, gender}} = this.state;
    //     // if (!name.valid || !age.valid || !gender.valid) {
    //     //     alert('请填写正确的信息后重试');
    //     //     return;
    //     // }
    //     const {form: {name, age, gender}, formValid} = this.props;
    //     if(!formValid) {
    //          alert('请填写正确的信息后重试');
    //         return;
    //     }
    //     fetch('http://localhost:3001/user', {
    //     method: 'post',
    //     // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
    //     body: JSON.stringify({
    //         name : name.value,
    //         age : age.value,
    //         gender : gender.value
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         // 当添加成功时，返回的json对象中应包含一个有效的id字段
    //         // 所以可以使用res.id来判断添加是否成功
    //         if (res.id) {
    //         alert('添加用户成功');
    //         // this.context.router.history.push('/user/list');   //no make sense here v4
    //         // this.props.history.push("/user/list");   //version 4
    //         this.context.router.push('/user/list');
    //         return;
    //         // this.setState({     //applied form to the state, no initial
    //         //     name: '',
    //         //     age: 0,
    //         //     gender: ''
    //         // });
    //         } else {
    //         alert('添加失败');
    //         }
    //     })
    //     .catch((err) => console.error(err));
    // }

    render () {
        // const {form: {name, age, gender}} = this.state;
        // const {form: {name, age, gender}, onFormChange } = this.props;
        return (

        <HomeLayout title = "添加用户">
                {/*<form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormItem label="用户名：" valid={name.valid} error={name.error}>
                    <input
                        type="text"
                        value={name.value}
                        onChange={(e) => onFormChange('name', e.target.value)}
                    />
                    </FormItem>
                    <FormItem label="年龄：" valid={age.valid} error={age.error}>
                    <input
                        type="number"
                        value={age.value || ''}
                        onChange={(e) => onFormChange('age', +e.target.value)}
                    />
                    </FormItem>
                    <FormItem label="性别：" valid={gender.valid} error={gender.error}>
                    <select
                        value={gender.value}
                        onChange={(e) => onFormChange('gender', e.target.value)}
                    >
                        <option value="">请选择</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                    </FormItem>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>*/}
                <UserEditor/>   
        </HomeLayout>
    );
  }
}

// UserAdd.contextTypes= {
//     router : React.PropTypes.object.isRequired
// };

//     UserAdd = formProvider({
//         name: {
//             defaultValue: '',
//             rules: [
//             {
//                 pattern: function (value) {
//                 return value.length > 0;
//                 },
//                 error: '请输入用户名'
//             },
//             {
//                 pattern: /^.{1,4}$/,
//                 error: '用户名最多4个字符'
//             }
//             ]
//         },
//         age: {
//             defaultValue: 0,
//             rules: [
//             {
//                 pattern: function (value) {
//                 return value >= 1 && value <= 100;
//                 },
//                 error: '请输入1~100的年龄'
//             }
//             ]
//         },
//         gender: {
//             defaultValue: '',
//             rules: [
//             {
//                 pattern: function (value) {
//                 return !!value;
//                 },
//                 error: '请选择性别'
//             }
//             ]
//         }
//     })(UserAdd);

export default UserAdd;