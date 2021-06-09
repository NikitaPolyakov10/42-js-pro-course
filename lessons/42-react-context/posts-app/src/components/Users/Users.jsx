import React, {useState, useEffect} from 'react'
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => setUsers(result));
    }, []);
  
    return (
      <div className='users'>
        {users.map((user) => {
          return <div className='user' key={user.id}>{user.name}</div>;
        })}
      </div>
    );
};

export default Users;