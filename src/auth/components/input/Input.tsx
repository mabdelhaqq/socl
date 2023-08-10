import React, {useState} from 'react'
import { useAppContext } from '../../../helpers/app-store'
import { useNavigate } from 'react-router-dom'
import "./Input.scss"

const Input = () => {
    const { setUsername } = useAppContext();
    const [username, setUsernameInput] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "") {
        alert("Please enter your username");
        } else {
        setUsername(username);
        navigate('/');
        }
    };
    return (
        <div className='second-container'>
                <div className='input-container'>
                    <label htmlFor='user'>UserName : </label>
                    <input type='text' placeholder='username' value={username} id="user" 
                    onChange={ (e) => {setUsernameInput(e.target.value)}} className='input-user'/>
                </div>
                <button onClick={handleLogin} className='btn-login'>Login</button>
        </div>
    )
}

export default Input