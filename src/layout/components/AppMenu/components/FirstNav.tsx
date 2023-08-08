import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed, faUserFriends, faEnvelopeOpen, faVideo, faPhotoFilm, faFile } from '@fortawesome/free-solid-svg-icons';
import "./FirstNav.scss"

const navigationItems = [
    {
      icon: faFeed,
      title: 'Feed',
    },
    {
      icon: faUserFriends,
      title: 'Friends',
    },
    {
      icon: faEnvelopeOpen,
      title: 'Event',
    },
    {
      icon: faVideo,
      title: 'Watch videos',
    },
    {
      icon: faPhotoFilm,
      title: 'Photos',
    },
    {
      icon: faFile,
      title: 'Files',
    },
  ];
  
  const FirstNav = () => {
    return (
      <nav className='links'>
        {navigationItems.map((item, index) => (
          <div key={index} className='item-links'>
            <FontAwesomeIcon icon={item.icon} className='item-icon' />
            <span className='title-link'>{item.title}</span>
          </div>
        ))}
      </nav>
    );
  };
  
  export default FirstNav;