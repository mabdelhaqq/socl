import { useAppContext } from '../../../helpers/app-store'
import { useNavigate } from 'react-router-dom'
import "./Input.scss"

const Input = () => {
    const { username, setUsername } = useAppContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username) {
            return alert("Please enter your username");
        }
        navigate('/');
    };
    return (
        <div className='second-container'>
                <div className='input-container'>
                    <label htmlFor='user'>UserName : </label>
                    <input type='text' placeholder='username' value={username} id="user" 
                    onChange={ (e) => {setUsername(e.target.value)}} className='input-user'/>
                </div>
                <button onClick={handleLogin} className='btn-login'>Login</button>
        </div>
    )
}

export default Input