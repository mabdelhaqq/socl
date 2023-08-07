import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCommentAlt, faBell, faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import "../../../../../assets/styles/Header/Toolbar.scss"
import "./Toolbar.scss"
const Toolbar = () => {
  return (
    <nav className='mainnav'>
        <FontAwesomeIcon icon={faUserPlus} className='item' />
        <FontAwesomeIcon icon={faCommentAlt} className='item' />
        <FontAwesomeIcon icon={faBell} className='item' />
        <img src={"https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=d"} className='item imguser' alt="imguser"/>
        <FontAwesomeIcon icon={faArrowDown} className='item' />
    </nav>
  )
}

export default Toolbar