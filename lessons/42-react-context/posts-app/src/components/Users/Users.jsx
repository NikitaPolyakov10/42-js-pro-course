import React, {useState, useEffect, useContext} from 'react'
import './Users.css'
import SwitchButton from '../Button/SwitchButton';
import { ThemeContext } from '../../context/ThemeContext';

const Users = () => {
    const [users, setUsers] = useState([]);
    const {theme, toggleTheme} = useContext(ThemeContext);
  
    useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => setUsers(result));
    }, []);
  
    return (
      <div className={theme === 'light' ? 'users-container light' : 'users-container dark'}>
      <div className='header'>
        <h3 className='header-title'>Posts App</h3>
        <div className='switch-button'>
          <SwitchButton changeTheme = {toggleTheme}/>
        </div>
      </div>
      <div className={theme === 'light' ? 'users light' : 'users dark'}>
        {users.map((user) => {
          return <div className='user' key={user.id}>{user.name}</div>;
        })}
      </div>
      </div>
    );
};

export default Users;