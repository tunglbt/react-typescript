import * as React from 'react';
import {connect} from 'react-redux';
import userActions from 'src/core/reduxs/User/userActions';
import User from 'src/core/models/User.model';

type Props = {
    fetchUsers: () => Promise<any>,
    users: User[];
    isFetching: boolean,
    error: any;
}

class UserContainer extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchUsers();
    };

    render() {
        if (this.props.isFetching) {
            return <div>Loading</div>
        }


        if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
        }

        return (
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Active?</th>
                    <th>Posts</th>
                    <th>Messages</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(u =>
                    <tr key={u.id}>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td>{u.active ? 'Yes' : 'No'}</td>
                        <td>{u.posts}</td>
                        <td>{u.messages}</td>
                    </tr>,
                )}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    isFetching: state.userReducer.isFetching,
    error: state.userReducer.error,
});

const mapDispatchToProps = {
    fetchUsers: userActions.fetchUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserContainer);