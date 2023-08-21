import { useState, useEffect } from 'react';
import Post from './Post';
import { usePostsStore } from '../helpers/post-store';
import "./PostList.scss"
import Spinner from './Spinner';
import { toast } from 'react-toastify';
import { dataAPI } from './data-api';


interface Post {
    is_verified: boolean;
}

const PostList = () => {
  const { verified, posts, setPosts } = usePostsStore();
  const [load, setLoad] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
        try {
          setLoad(true);
          const allPosts = await dataAPI.getAllPosts();
          setPosts(allPosts);
          console.log(allPosts);
        } catch (error) {
          toast.error("An error occured in fetching data");
        } finally {
          setLoad(false);
        }
      };
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
