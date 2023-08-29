import { useEffect } from 'react';
import { useAppContext } from '../../../helpers/app-store'
import { useNavigate } from 'react-router-dom'
import "./Input.scss"

const Input = () => {
    const { username, setUsername } = useAppContext();
    const navigate = useNavigate();
    const { role, setRole } = useAppContext();

    const handleLogin = () => {
        if (!username) {
            return alert("Please enter your username");
        }
        navigate('/posts');
    };
    useEffect( ()=> {
        setUsername('');
        setRole('user');
    }, [])
    return (
        <div className='second-container'>
            <input type='text' placeholder='username' value={username} id="user" 
            onChange={ (e) => {setUsername(e.target.value)}} className='input-user' required/>
            <div className='role-checkbox'>
                <label><input type='checkbox' checked={role === 'admin'}
                onChange={(e) => setRole(e.target.checked ? 'admin' : 'user')}/>Admin</label>
            </div>
            <button onClick={handleLogin} className='btn-login'>Login</button>
        </div>
    )
}

export default Input