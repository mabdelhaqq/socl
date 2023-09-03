import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed, faUserFriends, faEnvelopeOpen, faVideo, faPhotoFilm, faFile, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import "./FirstNav.scss"
import { Link } from 'react-router-dom';

const navigationItems = [
    {
      icon: faFeed,
      title: 'Feed',
      path: '/posts'
    },
    {
      icon: faChartSimple,
      title: 'Analytics',
      path: '/analytics'
    },
    {
      icon: faUserFriends,
      title: 'Friends',
      path: ''
    },
    {
      icon: faEnvelopeOpen,
      title: 'Event',
      path: ''
    },
    {
      icon: faVideo,
      title: 'Watch videos',
      path: ''
    },
    {
      icon: faPhotoFilm,
      title: 'Photos',
      path: ''
    },
    {
      icon: faFile,
      title: 'Files',
      path: ''
    },
  ];
  
  const FirstNav = () => {
    return (
      <nav className='links'>
        {navigationItems.map((item, index) => (
          <Link to={item.path} className='Links'><div key={index} className='item-links'>
            <FontAwesomeIcon icon={item.icon} className='item-icon' />
            <span className='title-link'>{item.title}</span>
          </div></Link>
        ))}
      </nav>
    );
  };
  
  export default FirstNav;