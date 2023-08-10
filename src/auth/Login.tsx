import "./Login.scss"
import Input from "./components/input/Input"
import Welcome from "./components/welcome/Welcome"
import "./Login.scss"


const Login = () => {
    
  return (
    <div className='log-container row'>
        <div className="col-xs-12 col-md-6 text-center"><Welcome/></div>
        <div className="col-xs-12 col-md-6"><Input/></div>
    </div>
  )
}

export default Login