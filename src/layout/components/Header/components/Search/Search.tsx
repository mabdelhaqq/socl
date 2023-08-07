import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Search.scss"

const Search = () => {
  return (
    <div className='searchbox'>
        <input placeholder=' Search' className='searchinput'/>
        <FontAwesomeIcon icon={faSearch} className='searchicon' />
    </div>
  )
}

export default Search