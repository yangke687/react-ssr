import React, { Component } from 'react';
import { fetchUsers } from '../actions';
import { connect } from 'react-redux';

class UsersList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { users, fetchUsers } = this.props;
    fetchUsers();
    console.log(users); 
  }

  render() {
    const { users }= this.props;
    return (
      <div>
        A big users list:
        <ul>
          {users.map((user, idx) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(function(state){
  return {
    users: state.users
  }
}, { fetchUsers })(UsersList);

