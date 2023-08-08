import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCommentAlt, faBell, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./Toolbar.scss"
const Toolbar = () => {
  return (
    <nav className='main-nav'>
        <FontAwesomeIcon icon={faUserPlus} className='item' />
        <FontAwesomeIcon icon={faCommentAlt} className='item' />
        <FontAwesomeIcon icon={faBell} className='item' />
        <img src={"https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=d"} className='item img-user' alt="imguser"/>
        <FontAwesomeIcon icon={faArrowDown} className='item' />
    </nav>
  )
}

export default Toolbar