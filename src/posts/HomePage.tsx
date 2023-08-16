import Filter from './Filter'
import PostList from './PostList'
import "./HomePage.scss"
const HomePage = () => {
  return (
    <div className='home'>
        <div className='feed-header row'>
            <h3 className='recent col-6'>Recent posts</h3>
            <div className='filter col-6'><Filter/></div>
        </div>
        <div className='posts'>
            <PostList/>
        </div>
    </div>
  )
}

export default HomePage