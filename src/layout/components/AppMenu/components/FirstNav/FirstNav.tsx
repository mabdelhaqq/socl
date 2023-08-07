import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed, faUserFriends, faEnvelopeOpen, faVideo, faPhotoFilm, faFile } from '@fortawesome/free-solid-svg-icons';
import "./FirstNav.scss"

const FirstNav = () => {
  return (
    <nav className='links'>
        <div className='itemlinks'>
            <FontAwesomeIcon icon={faFeed} className='itemicon'/>
            <span className='titlelink'>Feed</span>
        </div>
        <div className='itemlinks'>
            <FontAwesomeIcon icon={faUserFriends} className='itemicon'/>
            <span className='titlelink'>Friends</span>
        </div>
        <div className='itemlinks'>
            <FontAwesomeIcon icon={faEnvelopeOpen} className='itemicon'/>
            <span className='titlelink'>Event</span>
        </div>
        <div className='itemlinks'>
            <FontAwesomeIcon icon={faVideo} className='itemicon'/>
            <span className='titlelink'>Watch videos</span>
        </div>
        <div className='itemlinks'>
            <FontAwesomeIcon icon={faPhotoFilm} className='itemicon'/>
            <span className='titlelink'>Photos</span>
        </div>
        <div className='itemlinks'>
            <FontAwesomeIcon icon={faFile} className='itemicon'/>
            <span className='titlelink'>Files</span>
        </div>
    </nav>
  )
}

export default FirstNav