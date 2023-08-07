import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../../../../../assets/styles/SideBar/SearchBox.scss"
const SearchBox = () => {
  return (
    <div className='searchb'>
        <FontAwesomeIcon icon={faSearch} className='iconsearch'/>
        <input placeholder='   Search' className='inputsearch'/>
    </div>
  )
}

export default SearchBox