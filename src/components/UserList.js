import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/UserList.css';

const UserList = ({ users }) => (
  <div className="user-list">
    <ul className="list">
      {users.map(user => (
        <li key={user.id}>
          <p className="list-item-title">{user.username}</p>
          <Link
            to={{
              pathname: `/users/${user.id}`,
              state: {
                user,
              },
            }}
            className="details"
          >
            Details
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
