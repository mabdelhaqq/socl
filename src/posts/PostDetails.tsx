import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dataAPI } from './data-api';
import Spinner from './Spinner';
import { Post } from '../helpers/post-store';
import "./PostDetails.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Authorize from './Authorize';


const PostDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id:string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id){
        return ;
      } 
        const postId = +id;
        const fetchedPost = await dataAPI.getPost(postId);
        setPost(fetchedPost);
      
    };
    fetchPost();
  }, [id]);
  const handleRemove = async () => {
    if (!id) {
      return;
    }
    const postId = +id;
    try {
      await dataAPI.removePost(postId);
      navigate('/posts');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if (!post) {
    return <Spinner />;
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className='user-info'>
          <img src={post.user_avatar} alt="User Avatar" />
          <div>
            <h3>{post.user_name}</h3>
            <p>{post.timestamp}</p>
          </div>
        </div>
        <div className='back'>
          <FontAwesomeIcon icon={faArrowCircleLeft} className='icon' onClick={()=> {navigate('/posts')}} title='Back to the posts'/>
          <Authorize allowedRoles={['admin']}>
            <FontAwesomeIcon icon={faTrashAlt} className='icon' onClick={handleRemove} title='Delete post'/>
          </Authorize>
        </div>
      </div>
      <div className='all-content'>
      <div className='img-post'>
        <img src={post.image_url} alt="Post Image" />
      </div>
      <div className="post-content">
        <p className='hashtags'>#{post.hashtags}</p>
        <p>{post.body}</p>
        </div>
      </div>
      <div className="post-footer">
        <p>Likes: {post.likes}</p>
        <p>Comments: {post.comments}</p>
        <p>Shares: {post.shares}</p>
      </div>
    </div>
  );
};

export default PostDetails;
