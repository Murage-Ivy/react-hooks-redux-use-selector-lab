import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users);
  const usersList = users.map((user, index) => <li key={index}> {user.username} </li>);

  return (
    <div>
      <ul>
        Users!
        {usersList}
        <br />
      
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
      <div>  Total Users: {users.length}</div>
    </div>
  );
}

export default Users;
