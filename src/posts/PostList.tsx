import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import { useFilterStore } from '../helpers/filter-store';
import "./PostList.scss"

const PostList = () => {
  const { verified } = useFilterStore();
  const [posts, setPosts] = useState([] as Array<{ is_verified: boolean }>);
  const [load, setLoad] = useState(true);

  const fetchAxios = async () => {
    try {
    setLoad(true);
    const response = await axios.get('https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8');
    setPosts(response.data);
    }
    catch(error){
        console.error('Error: ', error);
    }
    finally{
        setLoad(false);
    }
  };

  useEffect(() => {
    fetchAxios();
  }, []);

  const filteredPosts = verified ? posts.filter((post) => post.is_verified) : posts;

  return (
    <div className='m'>
      {load ? 
      ( <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
        </div> ) : (filteredPosts.map((post, index) => <Post key={index} post={post} />))}
    </div>
  );
};

export default PostList;