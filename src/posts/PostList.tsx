import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import { usePostsStore } from '../helpers/post-store';
import "./PostList.scss"
import Spinner from './Spinner';

const API_LINK = 'https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8';
interface Post {
    is_verified: boolean;
}

const PostList = () => {
  const { verified, posts, setPosts } = usePostsStore();
  const [load, setLoad] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(API_LINK);
      setPosts(response.data);
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newFilteredPosts = verified ? posts.filter((post) => post.is_verified) : posts;
    setFilteredPosts(newFilteredPosts);
  }, [verified, posts]);

  return (
    <div className='main-post'>
      {load ? (<Spinner />) : (filteredPosts.map((post, index) => <Post key={index} post={post} />))}
    </div>
  );
};

export default PostList;
