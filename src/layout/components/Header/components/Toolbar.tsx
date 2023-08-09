import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCommentAlt, faBell, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./Toolbar.scss"
import { useUserContext } from '../../../../helpers/user-context'

const Toolbar = () => {
  const { username } = useUserContext();
  return (
    <nav className='main-nav'>
        <span className='name-user'>{username}</span>
        <FontAwesomeIcon icon={faUserPlus} className='item' />
        <FontAwesomeIcon icon={faCommentAlt} className='item' />
        <FontAwesomeIcon icon={faBell} className='item' />
        <img src={"https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=d"} className='item img-user' alt="imguser"/>
        <FontAwesomeIcon icon={faArrowDown} className='item' />
    </nav>
  )
}

export default Toolbar