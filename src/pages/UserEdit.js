import React, {Component} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserEdit extends Component {

    state = {
        user: null
    };

    componentDidMount () {
        // const userId = this.context.router.params.id;
        console.log(this.props);
        const userId = this.props.match.params.id;
        fetch('http://localhost:3001/user/' + userId)
        .then(res => res.json())
        .then(res => {
            this.setState({
                user: res
            });
        });
    }

    render () {
         const {user} = this.state;
        return (
            <HomeLayout title= "编辑用户">
                {
                    user ? <UserEditor editTarget = {user} /> : '加载中...'
                }
            </HomeLayout>
        );
    }
}

// UserEdit.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default UserEdit;